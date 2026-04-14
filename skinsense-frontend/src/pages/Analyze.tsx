export default function Result() {

  const result = JSON.parse(localStorage.getItem("result") || "null");

  if (!result) {
    return <div className="p-10 text-center">No Data Found</div>;
  }

  return (
    <div className="h-screen flex bg-[#fdf6f3]">

      {/* LEFT SIDE */}
      <div className="w-3/4 px-12 py-10 overflow-y-auto">

        {/* Heading */}
        <h1 className="text-3xl font-semibold text-[#5a3e36] mb-2">
          Your Skin Analysis
        </h1>

        <p className="text-gray-500 mb-6">
          Personalized insights for your skin
        </p>

        {/* Skin Info Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
          <p className="text-lg">
            <b>Skin Type:</b> {result.skinType}
          </p>
          <p>
            <b>Concern:</b> {result.concern}
          </p>
        </div>

        {/* Tips */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
          <h2 className="text-lg font-semibold mb-3 text-[#5a3e36]">
            Skincare Tips
          </h2>

          <ul className="space-y-2 text-gray-600">
            {result.tips?.map((tip: string, i: number) => (
              <li key={i}>• {tip}</li>
            ))}
          </ul>
        </div>

        {/* Acne Tips */}
        {result.acneTips && (
          <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
            <h2 className="text-lg font-semibold mb-3 text-[#5a3e36]">
              Acne Care Tips
            </h2>

            <ul className="space-y-2 text-gray-600">
              {result.acneTips.map((tip: string, i: number) => (
                <li key={i}>• {tip}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Products */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-[#5a3e36]">
            Recommended Products
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {result.products?.map((p: any, i: number) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition"
              >
                <img
                  src={p.image}
                  className="w-full h-40 object-cover rounded"
                />

                <h3 className="text-sm font-medium mt-3 line-clamp-2">
                  {p.name}
                </h3>

                <p className="text-gray-500 text-sm mt-1">{p.price}</p>
                <p className="text-sm">⭐ {p.rating}</p>

                <a
                  href={p.url}
                  target="_blank"
                  className="inline-block mt-3 text-sm text-[#d8a48f] underline"
                >
                  Buy Now →
                </a>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-1/4 relative flex flex-col items-center justify-center px-6 text-center bg-gradient-to-b from-[#f7e9e4] to-[#fdf6f3]">

        {/* Glow */}
        <div className="absolute w-40 h-40 bg-[#e8cfc6] opacity-30 rounded-full blur-3xl top-20"></div>

        <h2 className="text-lg font-semibold text-[#5a3e36] mb-2">
          Your Skin Story
        </h2>

        <p className="text-sm text-gray-400 mb-6">
          Care begins with understanding
        </p>

        {/* Quote */}
        <p className="text-sm italic text-[#5a3e36] mb-10">
          “Healthy skin is a reflection of overall wellness.”
        </p>

        {/* 🔥 ANALYZE AGAIN BUTTON */}
        <a
          href="/analyze"
          className="bg-[#d8a48f] hover:bg-[#c68c78] text-white px-6 py-3 rounded-full transition"
        >
          Analyze Again
        </a>

      </div>
    </div>
  );
}