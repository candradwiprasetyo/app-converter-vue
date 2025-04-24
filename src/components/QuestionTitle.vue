<template>
  <div class="font-bold text-base md:text-xl mb-4">
    {{ text }}
  </div>
</template>

<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>
