import './App.css';
import { useState } from 'react';

function App() {
  const [message, setMessage] = useState("hello");
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);

    try {
      const response = await fetch("https://mern-demo-ojek.onrender.com/", {
        method: "GET"
      });

      const data = await response.json();

      if (data.success) {
        setMessage(data.message);
      } else {
        setMessage("Error fetching data from the backend");
      }
    } catch (error) {
      setMessage("An error occurred while fetching data");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="App">
      <h1>{loading ? "Loading..." : message}</h1>
      <button className='btn' onClick={handleClick} disabled={loading}>
        BUTTON
      </button>
    </div>
  );
}

export default App;
