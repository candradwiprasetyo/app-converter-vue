<template>
  <input
    :value="modelValue"
    @input="onInputHandler"
    :class="['p-4 w-full border font-bold text-lg', customClass]"
    type="number"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: number;
  customClass?: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: number): void;
  (e: "input"): void;
}>();

function onInputHandler(event: Event) {
  const value = +(event.target as HTMLInputElement).value;
  emit("update:modelValue", value);
  emit("input");
}
</script>
