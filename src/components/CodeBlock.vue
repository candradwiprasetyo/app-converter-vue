<template>
  <div :class="[computedClass, customClass]">
    <pre>{{ code }}</pre>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  code: string;
  dark?: boolean;
  customClass?: string;
}>();

const computedClass = computed(
  () =>
    `${
      props.dark ? "bg-gray-900" : "bg-gray-700"
    } px-6 py-4 text-xs md:text-sm text-yellow-200 overflow-x-auto`
);
</script>
