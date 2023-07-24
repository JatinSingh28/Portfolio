import react from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/main/Main";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
