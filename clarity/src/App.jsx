import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MouseTracker from "./MouseTracker";

function App() {
  const [count, setCount] = useState(0);
  function handleGetInsights() {
    fetch("https://api.clarity.microsoft.com/v1/data", {
      method: "GET",
      headers: {
        Authorization:
          "eyJhbGciOiJSUzI1NiIsImtpZCI6IjAzNWI5N2UxMjIyMDRkNTM5ZmQ2ZGQ5OGJhYzQyMmYxIiwidHlwIjoiSldUIn0.eyJqdGkiOiJiZDEwYzczZC05YjMyLTQwZTgtOTc1Ni1hNGQ5NDkxZWFmZDYiLCJzdWIiOiIyMTQ2MzI3MTM3MzI5MzIyIiwic2NvcGUiOiJEYXRhLkV4cG9ydCIsIm5iZiI6MTcwODQ4NTkwMywiZXhwIjo0ODYyMDg1OTAzLCJpYXQiOjE3MDg0ODU5MDMsImlzcyI6ImNsYXJpdHkiLCJhdWQiOiJjbGFyaXR5LmRhdGEtZXhwb3J0ZXIifQ.CEYdbApIt6kT3Y4VfO_relaevm9EkPeKO-_HGdf78nr0z3dRV16FqJXO0nAmPTFPisDMSY504BJ32aL7Yfji5agj0XlcblNdjvWLXQvr-KNPjFH5x_WctdXbpaD8mrIArKEuO2q2QEaRZJnOys5FEly5vbvSfiuC6DFge-OeHv0Ikhn1jUcwqv-ZEE6LqjgiaoME9aA2vdbwVZOQWUiRGqcDzP0cSDbnuImRJG35938T0UCRmY-F19JGbf4fHNjXGEaMn5taKNHaEUQLfxCjjK4sM-xvfvdruCoCdpowIKyXSVgcNlfCPRuaOlHdvJ0iTrBTtw691HyZLyZvCJuLUA",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  useEffect(() => {
    // getInsights();
  }, []);
  return (
    <>
    
      <MouseTracker />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={handleGetInsights}></button>
    </>
  );
}

export default App;
