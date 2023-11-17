import ImageUploader from "./Components/ImageUploader";
import ImageDecrypter from "./Components/ImageDecrypter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import { gsap } from "gsap";

function App() {
  const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
  useEffect(() => {
    tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
    tl.to(".slider", { y: "-100%", duration: 1, delay: 0.5 });
    tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
    tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ImageUploader />} />
        <Route path="/decrypt" element={<ImageDecrypter />} />
      </Routes>

      <div className="intro">
        <div className="intro-text">
          <h1 className="hide">
            <span className="text">Secure</span>
          </h1>
          <h1 className="hide">
            <span className="text">and Easy to use</span>
          </h1>
          <h1 className="hide">
            <span className="text">Encryption</span>
          </h1>
        </div>
      </div>
      <div className="slider"></div>
    </BrowserRouter>
  );
}

export default App;
