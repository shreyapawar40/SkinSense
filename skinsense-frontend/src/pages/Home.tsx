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
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-5xl text-white font-bold mb-4 drop-shadow-lg">
            Your Skin, Your Story
          </h1>
          <p className="text-white text-lg mb-8 max-w-md">
            AI-powered skin analysis & personalized care
          </p>
          <button
            onClick={() => navigate("/analyze")}
            className="bg-[#d8a48f] hover:bg-[#c4907b] text-white px-8 py-3 rounded-full font-semibold transition duration-300 shadow-lg"
          >
            Try Now ✨
          </button>
        </div>
      </div>

      {/* ABOUT */}
      <div className="text-center py-16 px-6">
        <h2 className="text-3xl text-[#5a3e36] font-bold mb-4">
          What is SkinSense?
        </h2>
        <p className="max-w-xl mx-auto text-gray-600 text-lg leading-relaxed">
          SkinSense analyzes your skin using AI and provides
          personalized skincare tips and product recommendations
          tailored just for you.
        </p>
      </div>

      {/* FEATURES */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10 pb-16">
        <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
          <div className="text-4xl mb-3">🌿</div>
          <h3 className="text-[#5a3e36] font-bold text-lg mb-2">Natural Care</h3>
          <p className="text-gray-500 text-sm">Recommendations based on your unique skin type</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
          <div className="text-4xl mb-3">🤖</div>
          <h3 className="text-[#5a3e36] font-bold text-lg mb-2">AI Powered</h3>
          <p className="text-gray-500 text-sm">Advanced ML model analyzes your skin instantly</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
          <div className="text-4xl mb-3">🛍️</div>
          <h3 className="text-[#5a3e36] font-bold text-lg mb-2">Smart Products</h3>
          <p className="text-gray-500 text-sm">Get curated product suggestions just for you</p>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div className="bg-[#f7e9e4] py-16 text-center">
        <h2 className="text-3xl text-[#5a3e36] font-bold mb-10">
          How It Works
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-6 px-10">
          <div className="bg-white p-6 rounded-2xl shadow flex-1">
            <div className="text-3xl mb-2">📸</div>
            <h3 className="font-bold text-[#5a3e36]">Capture</h3>
            <p className="text-gray-500 text-sm mt-1">Take a photo using your webcam</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow flex-1">
            <div className="text-3xl mb-2">🤖</div>
            <h3 className="font-bold text-[#5a3e36]">Analyze</h3>
            <p className="text-gray-500 text-sm mt-1">AI analyzes your skin condition</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow flex-1">
            <div className="text-3xl mb-2">💡</div>
            <h3 className="font-bold text-[#5a3e36]">Results</h3>
            <p className="text-gray-500 text-sm mt-1">Get personalized tips & products</p>
          </div>
        </div>
        <button
          onClick={() => navigate("/analyze")}
          className="mt-10 bg-[#d8a48f] hover:bg-[#c4907b] text-white px-8 py-3 rounded-full font-semibold transition duration-300 shadow-lg"
        >
          Try It Out 🚀
        </button>
      </div>

    </div>
  );
}