export interface InputsProps {
    formState: {
        [key in "charging" | "arrival" | "consumption" | "power"]: { value: number };
    };
    onInputChange: (
        name: "charging" | "arrival" | "consumption" | "power",
        value: number
    ) => void;
}
