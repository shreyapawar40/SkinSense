import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-[#f3eae7]">

      <h1 className="text-2xl font-semibold text-[#c48c8c]">
        SkinSense
      </h1>

      <div className="flex gap-6 text-[#6f5e5e]">
        <Link to="/">Home</Link>
        <Link to="/analyze">Analyze</Link>
        <Link to="/about">About</Link>
        <Link to="/signup-login">SignUp/Login</Link>
      </div>

    </nav>
  );
}