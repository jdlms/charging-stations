import { useState } from "react";
import Inputs from "./components/Inputs";
import "./App.css";

function App() {
  const [formState, setFormState] = useState({
    charging: { value: 50, calculated: 100 },
  });

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
      <Inputs formState={formState} onInputChange={handleInputChange} />
      <p>Selected Value: {formState.value}</p>
      <p>Calculated Value: {formState.calculated}</p>
    </>
  );
}

export default App;
