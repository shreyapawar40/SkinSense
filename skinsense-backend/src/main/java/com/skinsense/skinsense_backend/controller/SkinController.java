package com.skinsense.skinsense_backend.controller;


import com.skinsense.skinsense_backend.entity.Product;
import com.skinsense.skinsense_backend.service.AnalysisService;
import com.skinsense.skinsense_backend.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class SkinController {

    private final AnalysisService analysisService;
    private final ProductService productService;

    @PostMapping("/analyze")
    public ResponseEntity<?> analyze(@RequestParam("file") MultipartFile file)
            throws IOException {

        // 1. Call ML service
        Map<String, Object> mlResponse = analysisService.analyze(file);

        String skinType = (String) mlResponse.get("skinType");
        String concern = (String) mlResponse.get("concern");

        // 2. Get products
        List<Product> products = productService.getProducts(skinType, concern);

        // 3. Merge response
        Map<String, Object> finalResponse = new HashMap<>();

        finalResponse.put("skinType", skinType);
        finalResponse.put("concern", concern);
        finalResponse.put("tips", mlResponse.get("tips"));
        finalResponse.put("acneTips", mlResponse.get("acneTips"));
        finalResponse.put("products", products);

        return ResponseEntity.ok(finalResponse);
    }
}