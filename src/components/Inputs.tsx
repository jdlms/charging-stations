import { InputsProps } from "../types";

const ranges = [
  {
    title: "Charging stations",
    id: "charging",
    metric: "number",
    scale: [5, 10, 15, 20],
    step: 5,
  },
  {
    title: "Arrival probability",
    id: "arrival",
    metric: "percent",
    scale: [25, 50, 75, 100, 125],
    step: 25,
  },
  {
    title: "Car consumption",
    id: "consumption",
    metric: "kwh",
    scale: [14, 16, 18, 20],
    step: 2,
  },
  {
    title: "Charging power",
    id: "power",
    metric: "kw",
    scale: [5, 10, 15, 20],
    step: 5,
  },
] as const;

export default function Inputs({ formState, onInputChange }: InputsProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    onInputChange(
      name as "charging" | "arrival" | "consumption" | "power",
      Number(value)
    );
  };

  return (
    <>
      <div className="flex flex-col w-64 p-5 rounded-md bg-gray-800">
        {ranges.map((range) => (
          <div className="gap-8 mb-6">
            <label htmlFor={range.id} className="text-xs whitespace-nowrap">
              {range.title}
            </label>
            <div className="relative flex-grow">
              <input
                type="range"
                id={range.id}
                name={range.id}
                list="markers"
                className="w-full"
                min={`${range.scale[0]}`}
                max={range.scale.at(-1)}
                step={range.scale[1] - range.scale[0]}
                value={formState[range.id].value}
                onChange={handleChange}
              />
              <div className="flex justify-between absolute top-7 w-full ml-1 text-xs">
                {range.scale.map((num) => (
                  <span>{num}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
