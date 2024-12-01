export interface InputsProps {
    formState: {
        [key in "charging" | "arrival" | "consumption" | "power"]: { value: number };
    };
    onInputChange: (
        name: "charging" | "arrival" | "consumption" | "power",
        value: number
    ) => void;
}


export interface Data {
    chargingStations: number;
    arrivalProbability: number;
    carConsumption: number;
    chargingPower: number;
    totalEnergyCharged: number;
    peakPowerLoad: number;
    energyConsumption: {
        daily: number[];
    };
    chargingEvents: {
        daily: number;
        weekly: number;
    };
}
