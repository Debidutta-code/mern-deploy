import './App.css';
import { useState } from 'react';

function App() {
  const [message, setMessage] = useState("hello");

  const fetchPath = "https://mern-demo-ojek.onrender.com/home" || "http://localhost:3000/"
  
  const handleClick = async () => {
    const response = await fetch(fetchPath, {
      method: "GET"
    })
    const data = await response.json();
    if(data.success){
      setMessage(data.message);
    }
  }

  return (
    <div className="App">
      <h1>{message}</h1>
      <button className='btn' onClick={handleClick}>BUTTON</button>
    </div>
  );
}

export default App;
