import React, { useEffect, useState } from 'react';
import './ImageUploader.css'; // Create a separate CSS file for styling
import { encrypt } from 'n-krypta';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { gsap } from "gsap";


const ImageUploader = () => {

  const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
  const navigate = useNavigate();
  const [imageData, setImageData] = useState('');

  const [password, setPassword] = useState('');
  const [encryptImageData, setEncryptImageData] = useState('');

  useEffect(() => {
    tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
    tl.to(".slider", { y: "-100%", duration: 1, delay: 0.5 });
    tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
    tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });

  }, []);


  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageData(reader.result);
      };
      reader.readAsDataURL(file);
    }

  };

  const downloadFile = () => {
    const link = document.createElement("a");
  const file = new Blob([encryptImageData], { type: 'text/plain' });
  link.href = URL.createObjectURL(file);
  link.download = "encrypt.txt";
  link.click();
  URL.revokeObjectURL(link.href);
 }
  

const handleConvert =  ()=>{
  setEncryptImageData(encrypt(imageData, password));
}
    
  const handleCopy = ()=>{
    navigator.clipboard.writeText(encryptImageData);
  }

  return (
    <>
    <main>
      <Navbar/>
      <div className="container">
  <input
    className="image-upload"
    type="file"
    accept="image/*"
    onChange={handleImageUpload}
  />


  <div className="password-input">
    <input
      type="password"
      value={password}
      name="secret"
      placeholder="Password"
      className="input"
      onChange={(e) => setPassword(e.target.value)}
    />
  </div>
  <button className="big-button" onClick={handleConvert}>
    Convert
  </button>

 

  {encryptImageData && (
    <div className="buttons-container">
      <button className="download-button" onClick={downloadFile}>
        Download
      </button>
      <button className="copy-button" onClick={handleCopy}>
        Copy
      </button>
    </div>



    
  )}

  <button className="convert-button" onClick={() => navigate("/decrypt")}>
    Decrypt
  </button>



  
</div>
</main>
<div class="intro">
      <div class="intro-text">
        <h1 class="hide">
          <span class="text">Secure</span>
        </h1>
        <h1 class="hide">
          <span class="text">and Easy to use</span>
        </h1>
        <h1 class="hide">
          <span class="text">Encryption</span>
        </h1>
      </div>
    </div>
    <div class="slider"></div>
    </>
  );
};

export default ImageUploader;