package com.skinsense.skinsense_backend.service;

import com.skinsense.skinsense_backend.entity.Product;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.*;

@Service
public class ProductService {

    @Value("${rapidapi.key}")
    private String apiKey;

    @Value("${rapidapi.host}")
    private String apiHost;

    private final RestTemplate restTemplate = new RestTemplate();

    // 🔹 MAIN METHOD
    public List<Product> getProducts(String skinType, String concern) {

        String query = buildQuery(skinType, concern);
        System.out.println("🔍 Query: " + query);

        List<Product> products = fetchProducts(query);

        // 🔥 Fallback if empty
        if (products.isEmpty()) {
            System.out.println("⚠️ No products found, trying fallback...");
            products = fetchProducts("face wash");
        }

        return products;
    }

    // 🔹 API CALL METHOD
    private List<Product> fetchProducts(String query) {

        String url = "https://real-time-amazon-data.p.rapidapi.com/search?query="
                + query.replace(" ", "%20") + "&country=IN";

        HttpHeaders headers = new HttpHeaders();
        headers.set("X-RapidAPI-Key", apiKey);
        headers.set("X-RapidAPI-Host", apiHost);

        HttpEntity<String> entity = new HttpEntity<>(headers);

        try {
            ResponseEntity<Map> response = restTemplate.exchange(
                    url,
                    HttpMethod.GET,
                    entity,
                    Map.class
            );

            return parseProducts(response.getBody());

        } catch (Exception e) {
            System.out.println(" API CALL FAILED: " + e.getMessage());
            return Collections.emptyList();
        }
    }

    // 🔹 QUERY BUILDER
    private String buildQuery(String skinType, String concern) {

        if (concern != null && concern.equalsIgnoreCase("ACNE")) {
            return skinType.toLowerCase() + " skin salicylic acid face wash";
        }

        switch (skinType.toUpperCase()) {
            case "DRY":
                return "moisturizer for dry skin";
            case "OILY":
                return "face wash for oily skin";
            case "NORMAL":
                return "gentle skincare products";
            default:
                return "skincare products";
        }
    }

    // 🔹 PARSER
    private List<Product> parseProducts(Map<String, Object> body) {

        List<Product> products = new ArrayList<>();

        try {
            if (body == null || body.get("data") == null) {
                System.out.println(" No data found in API response");
                return products;
            }

            Map<String, Object> data = (Map<String, Object>) body.get("data");
            List<Map<String, Object>> items =
                    (List<Map<String, Object>>) data.get("products");

            if (items == null || items.isEmpty()) {
                System.out.println(" No products in response");
                return products;
            }

            for (Map<String, Object> item : items) {

                String name = getSafe(item, "product_title");
                String price = getSafe(item, "product_price");
                String rating = getSafe(item, "product_star_rating");
                String image = getSafe(item, "product_photo");
                String url = getSafe(item, "product_url");

                // 🔹 Clean HTML
                name = name.replace("&amp;", "&");

                // 🔹 Optional UX improvement
                if (rating.equals("N/A")) {
                    rating = "No rating";
                }

                products.add(new Product(name, price, rating, image, url));

                if (products.size() == 5) break;
            }

            System.out.println(" Products extracted: " + products.size());

        } catch (Exception e) {
            System.out.println(" Error parsing products: " + e.getMessage());
        }

        return products;
    }

    // 🔹 SAFE GETTER
    private String getSafe(Map<String, Object> map, String key) {
        Object val = map.get(key);
        return val != null ? val.toString() : "N/A";
    }
}