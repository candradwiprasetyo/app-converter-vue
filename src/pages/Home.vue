<template>
  <div class="p-4 md:p-6 mx-auto w-full md:w-[600px] min-h-[300px]">
    <Tab v-model:activeTab="active" />
    <WeightConverter v-show="active === 'weight'" />
    <TemperatureConverter v-show="active === 'temperature'" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Tab from "@/components/Tab.vue";
import WeightConverter from "@/components/WeightConverter.vue";
import TemperatureConverter from "@/components/TemperatureConverter.vue";

const active = ref<"weight" | "temperature">("weight");
</script>
