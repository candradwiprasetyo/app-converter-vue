<template>
  <div class="text-center">
    <Title text="Konverter Berat" />
    <div class="flex items-center text-black">
      <div class="w-5/12">
        <Input
          v-model="value1"
          @input="() => convert('left')"
          :customClass="'rounded-tl-2xl border-white'"
        />
        <Select
          v-model="unit1"
          :options="weightUnits"
          :customClass="'border-t p-4 rounded-bl-2xl w-full'"
        />
      </div>
      <SwitchButton
        @click="switchUnits"
        customClass="bg-green-400 py-11 border-4 border-green-400 w-2/12"
      />
      <div class="w-5/12">
        <Input
          v-model="value2"
          @input="() => convert('right')"
          :customClass="'rounded-tr-2xl border-white'"
        />
        <Select
          v-model="unit2"
          :options="weightUnits"
          :customClass="'border-t p-4 rounded-br-2xl w-full'"
        />
      </div>
    </div>
    <Result
      v-if="hasInteracted"
      :formula="`${value1} ${getLabel(unit1)} = ${value2} ${getLabel(unit2)}`"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import Title from "@/components/Title.vue";
import Input from "@/components/Input.vue";
import Select from "@/components/Select.vue";
import SwitchButton from "@/components/SwitchButton.vue";
import Result from "@/components/Result.vue";
import { weightConfig } from "@/constants/weightConfig";
import { convertWeight, getWeightLabel } from "@/utils/weightConverter";

const { units: weightUnits } = weightConfig;
const unit1 = ref<keyof typeof weightConfig.factors>("kg");
const unit2 = ref<keyof typeof weightConfig.factors>("g");
const value1 = ref<number>(1);
const value2 = ref<number>(1000);
const hasInteracted = ref(false);

function convert(source: "left" | "right") {
  hasInteracted.value = true;

  if (source === "left") {
    value2.value = convertWeight(value1.value, unit1.value, unit2.value);
  } else {
    value1.value = convertWeight(value2.value, unit2.value, unit1.value);
  }
}

function switchUnits() {
  hasInteracted.value = true;
  [unit1.value, unit2.value] = [unit2.value, unit1.value];
  [value1.value, value2.value] = [value2.value, value1.value];
  convert("left");
}

watch([unit1, unit2], () => {
  hasInteracted.value = true;
  convert("left");
});

function getLabel(value: keyof typeof weightConfig.factors) {
  return getWeightLabel(value);
}
</script>
