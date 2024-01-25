import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState("");

  useEffect( async () => {
    const response = await fetch("http://localhost:4000/home", {
      method: "GET"

    })
    const data = await response.json();
    if(data.success){
      setMessage(data.message);
    }
  }, [])

  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

export default App;
