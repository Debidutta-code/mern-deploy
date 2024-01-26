import './App.css';
import { useState } from 'react';

function App() {
  const [message, setMessage] = useState("hello");

  const fetchPath = "https://mern-deploy-frontend-gatl.onrender.com/" || "http://localhost:3000/"
  
  const handleClick = async () => {
    const response = await fetch("http://localhost:4000/", {
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
