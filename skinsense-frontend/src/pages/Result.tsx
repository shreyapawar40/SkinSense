import { useNavigate } from "react-router-dom";

type Product = {
  name?: string;
  description?: string;
  price?: string;
  image?: string;
  url?: string;
  tag?: string;
};

type ResultType = {
  skinType: string;
  concern: string;
  tips?: string[];
  acneTips?: string[];
  products?: Product[];
};

export default function Result() {
  const navigate = useNavigate();

  // ✅ Safe parse
  const raw = localStorage.getItem("result");
  let result: ResultType | null = null;

  try {
    result = raw ? JSON.parse(raw) : null;
  } catch {
    result = null;
  }

  if (!result) {
    return (
      <div className="h-screen flex items-center justify-center">
        No Data Found
      </div>
    );
  }

  // ✅ Clean + truncate helpers
  const cleanTitle = (text?: string) => {
    if (!text) return "Unnamed Product";
    return text
      .replace(/for (women|men|all skin types)/gi, "")
      .replace(/\d+ml/gi, "")
      .trim();
  };

  const truncate = (text?: string, max = 50) => {
    if (!text) return "";
    return text.length > max ? text.slice(0, max) + "..." : text;
  };

  return (
    <div className="min-h-screen bg-[#fdf6f3] flex px-16 py-12 gap-12">

      {/* LEFT SIDE */}
      <div className="w-1/2">
        <h1 className="text-3xl font-semibold text-[#5a3e36] mb-2">
          Your Skin Analysis
        </h1>

        <p className="text-gray-400 mb-6">
          Personalized insights based on your skin
        </p>

        <div className="mb-6">
          <p className="text-lg">
            <b>Skin Type:</b> {result.skinType || "N/A"}
          </p>
          <p>
            <b>Concern:</b> {result.concern || "N/A"}
          </p>
        </div>

        {Array.isArray(result.tips) && (
          <div className="mb-6">
            <h2 className="font-semibold text-[#5a3e36] mb-2">Tips</h2>
            <ul className="space-y-1 text-gray-600">
              {result.tips.map((tip, i) => (
                <li key={i}>• {tip}</li>
              ))}
            </ul>
          </div>
        )}

        {Array.isArray(result.acneTips) && (
          <div className="mb-6">
            <h2 className="font-semibold text-[#5a3e36] mb-2">Acne Tips</h2>
            <ul className="space-y-1 text-gray-600">
              {result.acneTips.map((tip, i) => (
                <li key={i}>• {tip}</li>
              ))}
            </ul>
          </div>
        )}

        <button
          onClick={() => navigate("/analyze")}
          className="mt-6 bg-[#d8a48f] hover:bg-[#c68c78] text-white px-6 py-3 rounded-full transition"
        >
          Analyze Again
        </button>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-1/2">

        <h2 className="text-lg font-semibold text-[#6d4c41]">
          Wellness Products
        </h2>
        <p className="text-xs text-[#bca39a] mb-6">
          Chosen with care
        </p>

        <div className="flex flex-col gap-4">

          {Array.isArray(result.products) &&
            result.products.map((p, i) => (
              <div
                key={i}
                className="bg-[#f7efec] rounded-2xl px-4 py-3 flex items-center gap-4"
              >

                {/* IMAGE */}
                <div className="w-16 h-16 rounded-lg overflow-hidden bg-white flex-shrink-0">
                    <img
                        src={p.image || "/placeholder.png"}
                        alt={p.name}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* CONTENT */}
                <div className="flex-1">

                  {/* TAG */}
                  {p.tag && (
                    <span className="text-[10px] bg-[#ead7d0] text-[#9c6b5b] px-2 py-1 rounded-full">
                      {p.tag}
                    </span>
                  )}

                  {/* NAME */}
                  <h3 className="text-sm font-medium text-[#5a3e36] mt-1">
                    {truncate(cleanTitle(p.name), 45)}
                  </h3>

                  {/* DESCRIPTION */}
                  {p.description && (
                    <p className="text-[11px] text-[#bca39a] mt-1">
                      {truncate(p.description, 60)}
                    </p>
                  )}

                  {/* FOOTER */}
                  <div className="flex items-center justify-between mt-2">

                    <span className="text-sm font-medium text-[#5a3e36]">
                      {p.price || "N/A"}
                    </span>

                    <a
                      href={p.url || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] bg-[#d8a48f] hover:bg-[#c68c78] text-white px-3 py-1.5 rounded-full transition"
                    >
                      🛒 Add to Cart
                    </a>

                  </div>
                </div>
              </div>
            ))}

        </div>
      </div>
    </div>
  );
}