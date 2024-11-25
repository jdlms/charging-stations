import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

interface HandleChangeEvent extends React.ChangeEvent<HTMLInputElement> {}

function App() {
  const [value, setValue] = useState(50);
  const [calculated, setCalculated] = useState(0);

  const handleChange = (e: HandleChangeEvent): void => {
    const selectedValue = Number(e.target.value);
    setValue(selectedValue);

    setCalculated(selectedValue * 2);
  };

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Charging Stations</h1>
      <div>
        <label htmlFor="temp">Choose a comfortable temperature:</label>
        <br />
        <div style={{ position: "relative", width: "fit-content" }}>
          <input
            type="range"
            id="temp"
            name="temp"
            list="markers"
            style={{ width: "100%" }}
            min="0"
            max="100"
            step="25"
            value={value}
            onChange={handleChange}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              position: "absolute",
              top: "30px",
              width: "100%",
              fontSize: "0.8em",
            }}
          >
            <span>0</span>
            <span>25</span>
            <span>50</span>
            <span>75</span>
            <span>100</span>
          </div>
        </div>
        <p>Selected Value: {value}</p>
        <p>Calculated Value: {calculated}</p>
      </div>
    </>
  );
}

export default App;
