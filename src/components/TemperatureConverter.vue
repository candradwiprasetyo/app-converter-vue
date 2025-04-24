<template>
  <div class="text-black text-center">
    <Title text="Konverter Suhu" />
    <Input
      v-model.number="temperatureInput"
      class="border border-white p-4 rounded-t-2xl w-full"
    />
    <div class="flex items-center">
      <Select
        v-model="unitFrom"
        :options="temperatureUnits"
        class="border-t p-4 w-5/12 rounded-bl-2xl"
      />
      <SwitchButton
        @click="switchUnits"
        customClass="bg-green-400 py-4 w-2/12"
      />
      <Select
        v-model="unitTo"
        :options="temperatureUnits"
        class="border-t p-4 w-5/12 rounded-br-2xl"
      />
    </div>
    <Result :formula="formula" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import Title from "@/components/Title.vue";
import Input from "./Input.vue";
import Select from "./Select.vue";
import SwitchButton from "./SwitchButton.vue";
import Result from "./Result.vue";
import { temperatureConfig } from "@/constants/temperatureConfig";
import { calculateTemperatureConversion } from "@/utils/temperatureConverter";

const { units: temperatureUnits } = temperatureConfig;

const temperatureInput = ref(0);
const unitFrom = ref("C");
const unitTo = ref("F");
const result = ref<number | null>(null);
const formula = ref("");

function updateFormula() {
  const { result: res, formula: f } = calculateTemperatureConversion(
    temperatureInput.value,
    unitFrom.value,
    unitTo.value
  );
  result.value = res;
  formula.value = f;
}

watch([temperatureInput, unitFrom, unitTo], () => {
  updateFormula();
});

function switchUnits() {
  [unitFrom.value, unitTo.value] = [unitTo.value, unitFrom.value];
  updateFormula();
}
</script>
