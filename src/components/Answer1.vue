<template>
  <div class="bg-blue-50 w-full rounded-xl p-8">
    <QuestionTitle :text="questions[0]" />
    <div class="text-sm md:text-base text-gray-600">
      Perbedaan antara v-if dan v-show ada pada cara mengatur tampilan elemen.
      v-if hanya akan merender elemen ke DOM jika kondisi yang diberikan
      bernilai true, dan akan benar-benar menghapus elemen dari DOM saat kondisi
      false. Sedangkan, v-show akan selalu merender elemen ke DOM, tetapi hanya
      mengontrol visibilitasnya menggunakan properti CSS display: none. v-if
      lebih cocok digunakan ketika elemen jarang hide/show, karena prosesnya
      memerlukan resource lebih. Sedangkan v-show lebih efisien digunakan untuk
      elemen yang sering hide/show secara dinamis, seperti dropdown atau tab
      navigasi.
    </div>
    <div class="mt-5 font-bold">Contoh penggunaan v-if:</div>
    <div class="text-sm font-mono">
      <CodeBlock :code="code[0]" customClass="mt-4" />
      <CodeBlock :code="code[1]" :dark="true" />
      <CodeBlock :code="code[2]" customClass="mt-4" />
      <CodeBlock :code="code[3]" :dark="true" />
    </div>
    <div class="mt-5 font-bold">Contoh penggunaan v-show:</div>
    <div class="text-sm">
      <CodeBlock :code="code[4]" customClass="mt-4" />
      <CodeBlock :code="code[5]" :dark="true" />
      <CodeBlock :code="code[6]" customClass="mt-4" />
      <CodeBlock :code="code[7]" :dark="true" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { code } from "@/constants/codeSnippets";
import { questions } from "@/constants/questions";
import QuestionTitle from "@/components/QuestionTitle.vue";
import CodeBlock from "@/components/CodeBlock.vue";
</script>
