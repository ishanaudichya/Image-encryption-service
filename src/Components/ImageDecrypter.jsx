import React, { useState } from 'react'
import { encrypt, decrypt, compare } from 'n-krypta'; 
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
function ImageDecrypter() {
    const navigate =useNavigate();
    const [imgUrl, setImgUrl] = useState('');
    const [basetext, setBasetext] = useState('');
    const [password, setPassword] = useState('');
    const [isConverted, setIsConverted] = useState(false);

    const handleSubmit = (e) =>{
        setImgUrl( decrypt(basetext, password));
        setIsConverted(true);
    }

    
  return (

<div>
<Navbar/>
<input
        value={basetext}
        type="text"
        name="basetext"
        placeholder="Basetext"
        className="input"
        onChange={(e) => setBasetext(e.target.value)}
      />
      <input  
        type="password"
        value={password}
        name="secret"
        placeholder="Password"
        className="input"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit} className="button">Convert</button>
    
      {isConverted &&
        <img src={imgUrl} />
      }
        
      <button onClick={()=>{navigate('/')}} >encrypt</button>
</div>
  )
}

export default ImageDecrypter