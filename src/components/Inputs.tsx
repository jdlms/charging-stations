type InputsProps = {
  formState: {
    value: number;
    calculated: number;
  };
  onInputChange: (value: number) => void;
};

//   chargingStations: number;
//   arrivalProbability: number;
//   carConsumption: number;
//   chargingPower: number;

const toggles = [
  { title: "Charging stations", id: "charging", amounts: [0, 25, 50, 75, 100] },
  {
    title: "Arrival probability",
    id: "arrival",
    amounts: [0, 25, 50, 75, 100],
  },
  {
    title: "Car consumption",
    id: "consumption",
    amounts: [0, 25, 50, 75, 100],
  },
  { title: "Charging power", id: "power", amounts: [0, 25, 50, 75, 100] },
];

export default function Inputs({ formState, onInputChange }: InputsProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const selectedValue = Number(e.target.value);
    onInputChange(selectedValue);
  };

  return (
    <>
      <div className="flex flex-col w-56">
        {toggles.map((toggle) => (
          <div className="gap-8 mb-6">
            <label htmlFor="temp" className="text-xs whitespace-nowrap">
              {toggle.title}
            </label>
            <div className="relative flex-grow">
              <input
                type="range"
                id={toggle.id}
                name={toggle.id}
                list="markers"
                className="w-full focus:ring-1 focus:ring-[#ecd67e]"
                min="0"
                max="100"
                step="25"
                value={formState.value}
                onChange={handleChange}
              />
              <div className="flex justify-between absolute top-7 w-full ml-1 text-xs">
                <span>0</span>
                <span>25</span>
                <span>50</span>
                <span>75</span>
                <span>100</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
