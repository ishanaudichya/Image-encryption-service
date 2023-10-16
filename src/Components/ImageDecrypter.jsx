import React, { useState } from 'react'
import { encrypt, decrypt, compare } from 'n-krypta'; 

function ImageDecrypter() {
    
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
        
    
</div>
  )
}

export default ImageDecrypter