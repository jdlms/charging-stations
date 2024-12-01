import { useState } from "react";
import Inputs from "./components/Inputs";
import "./App.css";

function App() {
  const [menuState, setMenuState] = useState(true);
  const [formState, setFormState] = useState({
    charging: { value: 10 },
    arrival: { value: 50 },
    consumption: { value: 18 },
    power: { value: 10 },
  });

  type FormStateKeys = keyof typeof formState;

  const menuClick = () => {
    setMenuState(!menuState);
  };

  const handleInputChange = (name: FormStateKeys, value: number) => {
    setFormState((prev) => ({
      ...prev,
      [name]: {
        value,
      },
    }));
  };

  return (
    <>
      <h1 className="text-3xl font-bold ">Charging Station Tool</h1>
      {!menuState ? (
        <div>
          <span className="cursor-pointer" onClick={menuClick}>
            Open menu
          </span>
        </div>
      ) : (
        <div>
          <span className="cursor-pointer" onClick={menuClick}>
            Open menu
          </span>
          <Inputs formState={formState} onInputChange={handleInputChange} />
        </div>
      )}

      <p>Charging: {formState.charging.value}</p>
      <p>Arrival: {formState.arrival.value}</p>
      <p>Consumption: {formState.consumption.value}</p>
      <p>Power: {formState.power.value}</p>
    </>
  );
}

export default App;
