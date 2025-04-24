<template>
  <div
    v-if="formula"
    class="mt-4 text-black bg-yellow-100 p-4 font-bold rounded-2xl"
  >
    Hasil: {{ formula }}
  </div>
</template>

<script setup lang="ts">
defineProps<{
  formula: string;
}>();
</script>
