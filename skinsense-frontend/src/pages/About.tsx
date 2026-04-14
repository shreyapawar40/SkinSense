export default function About() {
  return (
    <div className="bg-[#fdf6f3] text-[#5a3e36]">

      {/* HERO */}
      <div className="text-center py-20 px-6">
        <h1 className="text-5xl font-semibold mb-6">
          About SkinSense
        </h1>

        <p className="max-w-2xl mx-auto text-gray-600">
          Your intelligent skincare companion powered by AI — helping you
          understand your skin better and make smarter skincare choices.
        </p>
      </div>

      {/* MISSION */}
      <div className="max-w-5xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h2 className="text-3xl font-semibold mb-4">
            Our Mission
          </h2>

          <p className="text-gray-600 leading-relaxed">
            We aim to simplify skincare by combining technology and beauty.
            SkinSense empowers users to understand their skin deeply and
            make informed decisions without confusion or guesswork.
          </p>
        </div>

        <div className="bg-[#f7e9e4] h-[250px] rounded-2xl flex items-center justify-center">
          <p className="italic text-gray-600">
            "Healthy skin begins with understanding."
          </p>
        </div>

      </div>

      {/* FEATURES */}
      <div className="py-16 bg-white text-center px-6">

        <h2 className="text-3xl font-semibold mb-10">
          What We Offer
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-[#fdf6f3] p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold mb-2"> AI Analysis</h3>
            <p className="text-sm text-gray-600">
              Detects skin type and concerns instantly using advanced models.
            </p>
          </div>

          <div className="bg-[#fdf6f3] p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold mb-2">💡 Smart Tips</h3>
            <p className="text-sm text-gray-600">
              Personalized skincare advice tailored to your skin.
            </p>
          </div>

          <div className="bg-[#fdf6f3] p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold mb-2"> Product Picks</h3>
            <p className="text-sm text-gray-600">
              Curated product recommendations that actually work.
            </p>
          </div>

        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="py-16 px-6 text-center">

        <h2 className="text-3xl font-semibold mb-10">
          Why Choose SkinSense?
        </h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">

          <div>
            <p className="text-xl mb-2">⚡</p>
            <p className="text-sm">Fast & accurate analysis</p>
          </div>

          <div>
            <p className="text-xl mb-2">🎯</p>
            <p className="text-sm">Personalized results</p>
          </div>

          <div>
            <p className="text-xl mb-2">🧴</p>
            <p className="text-sm">Real product suggestions</p>
          </div>

          <div>
            <p className="text-xl mb-2">🔒</p>
            <p className="text-sm">No data stored (privacy first)</p>
          </div>

        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#d8a48f] text-white text-center py-16 px-6">

        <h2 className="text-3xl font-semibold mb-4">
          Ready to understand your skin?
        </h2>

        <p className="mb-6">
          Try SkinSense now and get personalized skincare insights instantly.
        </p>

        <button className="bg-white text-[#d8a48f] px-6 py-3 rounded-lg font-semibold">
          Start Analysis
        </button>

      </div>

    </div>
  );
}