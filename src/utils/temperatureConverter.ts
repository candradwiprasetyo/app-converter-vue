import { temperatureConfig } from "@/constants/temperatureConfig";

const temperatureUnits = temperatureConfig.units;

export function getLabel(code: string): string {
  const unit = temperatureUnits.find((u) => u.value === code);
  return unit ? unit.label : code;
}

export function toCelsius(value: number, from: string): number {
  switch (from) {
    case "C":
      return value;
    case "F":
      return (value - 32) * (5 / 9);
    case "K":
      return value - 273.15;
    case "R":
      return (value - 491.67) * (5 / 9);
    case "Re":
      return value * (5 / 4);
    default:
      return value;
  }
}

export function fromCelsius(value: number, to: string): number {
  switch (to) {
    case "C":
      return value;
    case "F":
      return (value * 9) / 5 + 32;
    case "K":
      return value + 273.15;
    case "R":
      return (value + 273.15) * (9 / 5);
    case "Re":
      return value * (4 / 5);
    default:
      return value;
  }
}

export function calculateTemperatureConversion(
  input: number,
  from: string,
  to: string
): { result: number; formula: string } {
  const celsius = toCelsius(input, from);
  const converted = fromCelsius(celsius, to);
  const result = +converted.toFixed(2);

  let formula = "";
  switch (`${from}->${to}`) {
    case "F->C":
      formula = `(${input} °F − 32) × 5/9 = ${result} °C`;
      break;
    case "C->F":
      formula = `(${input} °C × 9/5) + 32 = ${result} °F`;
      break;
    case "C->K":
      formula = `${input} °C + 273.15 = ${result} K`;
      break;
    case "K->C":
      formula = `${input} K − 273.15 = ${result} °C`;
      break;
    case "F->K":
      formula = `(${input} °F − 32) × 5/9 + 273.15 = ${result} K`;
      break;
    case "K->F":
      formula = `(${input} K − 273.15) × 9/5 + 32 = ${result} °F`;
      break;
    case "R->C":
      formula = `(${input} °R − 491.67) × 5/9 = ${result} °C`;
      break;
    case "C->R":
      formula = `(${input} °C + 273.15) × 9/5 = ${result} °R`;
      break;
    case "Re->C":
      formula = `${input} °Re × 5/4 = ${result} °C`;
      break;
    case "C->Re":
      formula = `${input} °C × 4/5 = ${result} °Re`;
      break;
    default:
      formula = `${input} °${getLabel(from)} = ${result} °${getLabel(to)}`;
  }

  return { result, formula };
}
