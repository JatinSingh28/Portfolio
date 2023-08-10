import { Link } from "react-router-dom";
import "./navbar.scss";

export default function Navbar() {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="navbar absolute w-screen pb-3 shadow-[0_10px_20px_rgba(8,_112,_184,_0.7)]">
      <div className="glassContainer flex gap-5 px-5 lg:gap-14 md:px-10 lg:px-16 mt-6 text-white text-2xl font-bold">
        <Link
          to="/"
          className="hover:bg-gradient-to-r hover:from-purple-500 hover:to-red-500 hover:bg-clip-text hover:text-transparent transition-colors duration-400"
        >
          Home
        </Link>
        {/* <Link to="/projects">Work</Link> */}
        <Link
          to="/about"
          className="hover:bg-gradient-to-r hover:from-purple-500 hover:to-red-500 hover:bg-clip-text hover:text-transparent transition-colors duration-400"
        >
          About
        </Link>
        {/* <Link to="/projects">Projects</Link> */}
        {/* <Link to="https://drive.google.com/file/d/1lkPzVzonaLlzcMb9EwhNIorVJkhKyMKz/view" target="_blank" rel="noopener noreferrer">
          Resume
        </Link> */}
        <Link
          onClick={scrollToBottom}
          className="hover:bg-gradient-to-r hover:from-purple-500 hover:to-red-500 hover:bg-clip-text hover:text-transparent transition-colors duration-400"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
