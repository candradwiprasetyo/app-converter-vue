<template>
  <div class="bg-blue-50 w-full rounded-xl p-8">
    <QuestionTitle :text="questions[3]" />
    <div class="text-gray-600">
      Parameter path dan component memiliki fungsi yang sangat penting dalam
      menentukan bagaimana aplikasi menangani navigasi antar halaman. Path
      digunakan untuk menentukan url yang akan dipetakan ke rute tertentu.
      Singkatnya, path adalah url yang akan diakses oleh user. Sedangkan
      component adalah tampilan atau halaman yang akan ditampilkan kepada user
      saat mereka mengunjungi url yang sesuai dengan path yang telah ditentukan.
    </div>
    <div class="mt-5 font-bold">Contoh penggunaan:</div>
    <div class="text-sm font-mono">
      <CodeBlock :code="code[12]" customClass="mt-2" />
    </div>
    <div class="text-gray-600 mt-4">
      Di sini, ketika user mengunjungi /about, komponen bernama About akan
      dirender dan ditampilkan
    </div>
  </div>
</template>

<script setup lang="ts">
import { code } from "@/constants/codeSnippets";
import { questions } from "@/constants/questions";
import QuestionTitle from "@/components/QuestionTitle.vue";
import CodeBlock from "@/components/CodeBlock.vue";
</script>
