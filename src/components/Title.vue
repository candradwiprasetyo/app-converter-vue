<template>
  <h1 class="text-2xl font-bold my-8 text-gray-600">
    {{ text }}
  </h1>
</template>

<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>
