export default function Footer() {
  return (
    <footer className="bg-[#f3eae7] text-[#6f5e5e] mt-10">

      <div className="max-w-6xl mx-auto px-8 py-10 grid md:grid-cols-3 gap-8">

        {/* LEFT - BRAND */}
        <div>
          <h2 className="text-xl font-semibold text-[#c48c8c] mb-2">
            SkinSense
          </h2>
          <p className="text-sm">
            Your AI-powered skincare companion helping you understand and care for your skin better.
          </p>
        </div>

        {/* CENTER - LINKS */}
        <div>
          <h3 className="font-medium mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li>Home</li>
            <li>Analyze</li>
            <li>About</li>
            <li>SignUp / Login</li>
          </ul>
        </div>

        {/* RIGHT - EXTRA */}
        <div>
          <h3 className="font-medium mb-2">Self Care Reminder </h3>
          <p className="text-sm">
            Hydrate, rest, and be kind to your skin. You deserve it ✨
          </p>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="text-center py-4 border-t border-[#e5d6d2] text-sm">
        © 2026 SkinSense • Made with 💖 for better skincare
      </div>

    </footer>
  );
}