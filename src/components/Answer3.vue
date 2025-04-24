<template>
  <div class="bg-blue-50 w-full rounded-xl p-8">
    <QuestionTitle :text="questions[2]" />
    <div class="text-gray-600">
      Fungsi routing pada vue.js adalah untuk mengatur navigasi antar halaman
      dalam aplikasi web tanpa perlu reload seluruh halaman. Dengan routing,
      kita bisa berpindah dari satu page ke page lain hanya dengan mengubah url.
      Dengan routing, aplikasi terasa seperti aplikasi multi page meski
      sebenarnya hanya ada 1 halaman yang terus berubah kontennya.
    </div>
    <div class="mt-5 font-bold">Contoh penggunaan routing:</div>
    <div class="text-sm font-mono">
      <CodeBlock :code="code[11]" customClass="mt-2" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { code } from "@/constants/codeSnippets";
import { questions } from "@/constants/questions";
import QuestionTitle from "@/components/QuestionTitle.vue";
import CodeBlock from "@/components/CodeBlock.vue";
</script>
