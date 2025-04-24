<template>
  <button
    @click="$emit('click')"
    :class="`px-3 text-white w-2/12 text-xl ${customClass}`"
  >
    ⇄
  </button>
</template>

<script setup lang="ts">
defineProps<{
  customClass?: string;
}>();

defineEmits(["click"]);
</script>
