import './App.css';
import { useState } from 'react';

function App() {
  const [message, setMessage] = useState("");
  
  const handleClick = async () => {
    const response = await fetch("http://localhost:4000/home", {
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
      <button onClick={handleClick}>BUTTON</button>
    </div>
  );
}

export default App;
