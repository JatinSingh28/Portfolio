import react from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

function App() {
  return (
    // <video className="bg-video absolute top-0 left-0 h-screen w-screen -z-10" autoPlay loop muted>
    //     <source src="src\assets\gradient-video.mov" type="video/mp4" />
    //   </video>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
