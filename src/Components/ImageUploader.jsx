import React, { useState } from 'react';
import './ImageUploader.css'; // Create a separate CSS file for styling
import { encrypt } from 'n-krypta';
const ImageUploader = () => {
  const [imageData, setImageData] = useState('');
  const [imageFile, setImageFile] = useState(null);

  const [password, setPassword] = useState('');


  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageData(encrypt(reader.result, password));
      };
      reader.readAsDataURL(file);
      setImageFile(file);
    }

  


  };


    
  const handleCopy = ()=>{
    navigator.clipboard.writeText(imageData);
  }
  return (
    <div className="image-uploader">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
      />  
       <input  
        type="password"
        value={password}
        name="secret"
        placeholder="Password"
        className="input"
        onChange={(e) => setPassword(e.target.value)}
      />



      {imageData && (
        <div className="image-preview"><p>

          {imageData}
        </p>

        <button onClick={handleCopy}> Copy</button>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;