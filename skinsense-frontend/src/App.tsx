import { useState } from "react";
import axios from "axios";

// 🔹 TYPES
type Product = {
  name: string;
  price: string;
  rating: string;
  image: string;
  url: string;
};

type ApiResponse = {
  skinType: string;
  concern: string;
  tips: string[];
  acneTips?: string[];
  products: Product[];
};

function App() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(false);

  // 🔹 HANDLE FILE
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  // 🔹 UPLOAD
  const handleUpload = async () => {
    if (!file) {
      alert("Select a file first");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);

      const res = await axios.post<ApiResponse>(
        "http://localhost:8080/api/analyze",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setResult(res.data);
    } catch (err) {
      console.error(err);
      alert("Error uploading image");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>SkinSense</h1>

      {/* FILE INPUT */}
      <input type="file" onChange={handleFileChange} />
      <br /><br />

      {/* BUTTON */}
      <button onClick={handleUpload}>
        {loading ? "Analyzing..." : "Analyze"}
      </button>

      {/* RESULT */}
      {result && (
        <div style={{ marginTop: "30px" }}>
          <h2>Skin Type: {result.skinType}</h2>
          <h3>Concern: {result.concern}</h3>

          <h4>Tips:</h4>
          <ul>
            {result.tips.map((tip, i) => (
              <li key={i}>{tip}</li>
            ))}
          </ul>

          {/* PRODUCTS */}
          <h3>Recommended Products</h3>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            {result.products.map((p, i) => (
              <div
                key={i}
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  width: "200px",
                }}
              >
                <img src={p.image} width="150" />
                <h4>{p.name}</h4>
                <p>{p.price}</p>
                <p>⭐ {p.rating}</p>
                <a href={p.url} target="_blank">Buy</a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;