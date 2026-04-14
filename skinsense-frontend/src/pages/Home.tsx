import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#fdf6f3]">

      {/* HERO */}
      <div className="relative h-[80vh]">
        <img
          src="/hero.png"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl text-white font-bold mb-4">
            Your Skin, Your Story
          </h1>

          <p className="text-white mb-6">
            AI-powered skin analysis & personalized care
          </p>

          <button
            onClick={() => navigate("/analyze")}
            className="bg-[#d8a48f] text-white px-6 py-3 rounded"
          >
            Try Now
          </button>
        </div>
      </div>

      {/* ABOUT */}
      <div className="text-center py-16 px-6">
        <h2 className="text-3xl text-[#5a3e36] mb-4">
          What is SkinSense?
        </h2>
        <p className="max-w-xl mx-auto text-gray-600">
          SkinSense analyzes your skin using AI and provides
          personalized skincare tips and product recommendations.
        </p>
      </div>

      {/* HOW IT WORKS */}
      <div className="bg-[#f7e9e4] py-16 text-center">
        <h2 className="text-3xl text-[#5a3e36] mb-10">
          How It Works
        </h2>

        <div className="flex justify-center gap-6">
          <div className="bg-white p-6 rounded shadow">📸 Capture</div>
          <div className="bg-white p-6 rounded shadow">🤖 Analyze</div>
          <div className="bg-white p-6 rounded shadow">💡 Results</div>
        </div>

        <button
          onClick={() => navigate("/analyze")}
          className="mt-10 bg-[#d8a48f] text-white px-6 py-3 rounded"
        >
          Try It Out
        </button>
      </div>
    </div>
  );
}