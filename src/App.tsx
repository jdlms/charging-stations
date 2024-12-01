import { useState } from "react";
import Inputs from "./components/Inputs";
import "./App.css";

function App() {
  const [menuState, setMenuState] = useState(false);
  const [formState, setFormState] = useState({
    charging: { value: 50, calculated: 100 },
  });

  const menuClick = () => {
    setMenuState(!menuState);
  };

  const handleInputChange = (value: number) => {
    setFormState((prev) => ({
      ...prev,
      value,
      calculated: value * 2,
    }));
  };

  return (
    <>
      <h1 className="text-3xl font-bold ">Charging Station Tool</h1>
      {!menuState ? (
        <div>
          <span onClick={menuClick}>Open menu</span>
        </div>
      ) : (
        <div>
          <span onClick={menuClick}>Open menu</span>
          <Inputs formState={formState} onInputChange={handleInputChange} />
        </div>
      )}

      <p>Selected Value: {formState.charging.value}</p>
      <p>Calculated Value: {formState.charging.calculated}</p>
    </>
  );
}

export default App;
