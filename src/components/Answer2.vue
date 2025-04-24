<template>
  <div class="bg-blue-50 w-full rounded-xl p-8">
    <QuestionTitle :text="questions[1]" />
    <div class="text-gray-600 pl-10">
      <ul class="list-disc">
        <li>
          <strong>Template -></strong> digunakan untuk mendefinisikan struktur
          tampilan atau UI dari komponen yang akan dirender di browser.

          <CodeBlock :code="code[8]" customClass="mt-2 mb-4" />
        </li>
        <li>
          <strong>Script -></strong> digunakan untuk mengatur logika komponen,
          seperti mendefinisikan data, method, computed property, dan lifecycle
          hook
          <CodeBlock :code="code[9]" customClass="mt-2 mb-4" />
        </li>
        <li>
          <strong>Style -></strong> berisi aturan css yang digunakan untuk
          mengatur tampilan visual dari komponen.
          <CodeBlock :code="code[10]" customClass="mt-2" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { code } from "@/constants/codeSnippets";
import { questions } from "@/constants/questions";
import QuestionTitle from "@/components/QuestionTitle.vue";
import CodeBlock from "@/components/CodeBlock.vue";
</script>
