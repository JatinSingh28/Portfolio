import { Link } from "react-router-dom";
import "./navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar absolute">
      <div className="glassContainer text-white text-2xl">
        <Link to="/">Home</Link>
        {/* <Link to="/projects">Work</Link> */}
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link>Resume</Link>
        <Link>Contact</Link>
      </div>
    </div>
  );
}
