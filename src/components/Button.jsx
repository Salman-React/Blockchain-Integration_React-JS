import React, { useState } from 'react'
import '../Styles/Buttoon.css'
import axios from 'axios';
const Button = () => {

    const [connectionStatus, setConnectionStatus] = useState("");

    const handleClick = async () => {
      try {
        const result = await axios.get(
          "http://localhost:5000/api/testConnection"
        ); // Replace with your backend URL
        setConnectionStatus(result.data);
      } catch (error) {
        console.error("Error connecting to blockchain:", error);
        setConnectionStatus("Connection failed");
      }
    };

  return (
    <div>
       <div
        
        >
          <div style={{ textAlign: "center" }}>
            <h1 className='text-4xl font-bold text-white/70 pb-3'>Test Your Blockchain Connection</h1>
            <button className='button1' onClick={handleClick}>Connect to TestNet</button>
            {connectionStatus && <p style={{marginTop:'15px'}}>{connectionStatus}</p>}
          </div>
        </div>
    </div>
  )
}

export default Button
