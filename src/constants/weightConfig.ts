export const weightConfig = {
  units: [
    { label: "Kilogram", value: "kg" },
    { label: "Gram", value: "g" },
    { label: "Miligram", value: "mg" },
    { label: "Ton", value: "ton" },
    { label: "Pound", value: "lb" },
    { label: "Ounce", value: "oz" },
  ],
  factors: {
    kg: 1000,
    g: 1,
    mg: 0.001,
    ton: 1000000,
    lb: 453.592,
    oz: 28.3495,
  },
};
