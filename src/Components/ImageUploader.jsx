import React, { useState } from 'react';
import './ImageUploader.css'; // Create a separate CSS file for styling
import { encrypt } from 'n-krypta';
import { useNavigate } from 'react-router-dom';
const ImageUploader = () => {
  const navigate = useNavigate();
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
    <button onClick={()=>{navigate("/decrypt")}}>decrypt</button>


      {imageData && (
        
        <div className="image-preview">
        
        <button onClick={handleCopy}> Copy</button><p>

          {imageData}
        </p>

        </div>
      )}
    </div>
  );
};

export default ImageUploader;