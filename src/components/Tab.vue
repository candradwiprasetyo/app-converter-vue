<template>
  <div class="mb-6 flex">
    <button
      :class="[
        'text-white p-4 rounded-l-2xl transition w-1/2 font-bold',
        activeTab === 'weight' ? 'bg-blue-500' : 'bg-blue-300',
      ]"
      @click="$emit('update:activeTab', 'weight')"
    >
      Konverter Berat
    </button>
    <button
      :class="[
        'text-white px-4 py-2 rounded-r-2xl transition w-1/2 font-bold',
        activeTab === 'temperature' ? 'bg-blue-500' : 'bg-blue-300',
      ]"
      @click="$emit('update:activeTab', 'temperature')"
    >
      Konverter Suhu
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  activeTab: "weight" | "temperature";
}>();
defineEmits<{
  (e: "update:activeTab", value: "weight" | "temperature"): void;
}>();
</script>
