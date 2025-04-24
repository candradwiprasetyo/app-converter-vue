import { weightConfig } from "@/constants/weightConfig";

const { units: weightUnits, factors: weightFactors } = weightConfig;

type WeightUnit = keyof typeof weightFactors;

export function convertWeight(
  value: number,
  from: WeightUnit,
  to: WeightUnit
): number {
  const converted = value * (weightFactors[from] / weightFactors[to]);
  return +converted.toFixed(4);
}

export function getWeightLabel(value: string): string {
  return weightUnits.find((u) => u.value === value)?.label || value;
}
