import { writeFileSync } from "fs";

function generateDummyData() {
  const chargingStations = [5, 10, 15, 20];
  const arrivalProbabilities = [20, 50, 100, 200]; // %
  const carConsumptions = [12, 16, 18, 20]; // kWh
  const chargingPowers = [7, 11, 15, 20]; // kW

  const dummyData = [];

  function generateDailyEnergy(totalEnergy) {
    let daily = Array(7)
      .fill(0)
      .map(() => Math.random() * 0.2 * totalEnergy);
    const scaleFactor = totalEnergy / daily.reduce((a, b) => a + b, 0);
    return daily.map((day) => parseFloat((day * scaleFactor).toFixed(2)));
  }

  // nested forEach loops....
  chargingStations.forEach((stations) => {
    arrivalProbabilities.forEach((prob) => {
      carConsumptions.forEach((consumption) => {
        chargingPowers.forEach((power) => {
          const probFactor = prob / 100;
          const totalEnergy = parseFloat(
            (
              stations *
              probFactor *
              consumption *
              (0.8 + Math.random() * 0.4)
            ).toFixed(2)
          );

          const peakPower = parseFloat(
            (
              stations *
              power *
              probFactor *
              (0.8 + Math.random() * 0.4)
            ).toFixed(2)
          );

          const dailyEnergy = generateDailyEnergy(totalEnergy);

          const dailyEvents = Math.round(
            stations * probFactor * (0.5 + Math.random() * 0.5)
          );
          const weeklyEvents = dailyEvents * 7;

          dummyData.push({
            chargingStations: stations,
            arrivalProbability: prob,
            carConsumption: consumption,
            chargingPower: power,
            totalEnergyCharged: totalEnergy,
            peakPowerLoad: peakPower,
            energyConsumption: { daily: dailyEnergy },
            chargingEvents: { daily: dailyEvents, weekly: weeklyEvents },
          });
        });
      });
    });
  });

  return dummyData;
}

const data = generateDummyData();

function saveDataToFile(filename, data) {
  const jsonData = JSON.stringify(data, null, 2);
  writeFileSync(filename, jsonData, "utf-8");
}

saveDataToFile("dummyData.json", data);
console.log("Data saved to dummyData.json");
