<template>
  <div class="w-full md:flex min-h-screen">
    <div class="lg:w-1/2 bg-white w-full p-4 md:p-10 text-black space-y-10">
      <Answer1 />
      <Answer2 />
      <Answer3 />
      <Answer4 />
    </div>
    <div
      class="p-4 md:p-6 mx-auto md:w-1/2 md:h-screen lg:fixed right-0 top-0 flex items-center justify-center"
    >
      <div class="p-4 md:p-6 mx-auto w-full max-w-[600px]">
        <Tab v-model:activeTab="active" />
        <WeightConverter v-show="active === 'weight'" />
        <TemperatureConverter v-show="active === 'temperature'" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import Tab from "@/components/Tab.vue";
import WeightConverter from "@/components/WeightConverter.vue";
import TemperatureConverter from "@/components/TemperatureConverter.vue";
import { code } from "@/constants/codeSnippets";
import Answer1 from "@/components/Answer1.vue";
import Answer2 from "@/components/Answer2.vue";
import Answer3 from "@/components/Answer3.vue";
import Answer4 from "@/components/Answer4.vue";

const active = ref<"weight" | "temperature">("weight");
</script>
