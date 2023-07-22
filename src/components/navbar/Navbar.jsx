import { Link } from "react-router-dom";
import "./navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar absolute">
      <div className="glassContainer text-white text-2xl" >
        <Link >Work</Link>
        <Link>About</Link>
        <Link>Projects</Link>
        <Link>Resume</Link>
        <Link>Contact</Link>
      </div>
    </div>
  );
}
