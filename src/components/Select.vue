<template>
  <select
    :value="modelValue"
    @change="$emit('update:modelValue', $event.target.value)"
    :class="['p-4 font-bold text-lg cursor-pointer', customClass]"
  >
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string | number;
  options: { label: string; value: string | number }[];
  customClass?: string;
}>();

defineEmits(["update:modelValue"]);
</script>
