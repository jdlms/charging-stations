export type InputsProps = {
    formState: {
        charging: {
            value: number;
            calculated: number;
        };
        arrival: {
            value: number;
            calculated: number;
        };
        consumption: {
            value: number;
            calculated: number;
        };
        power: { value: number; calculated: number };
    };
    onInputChange: (value: number) => void;
};
