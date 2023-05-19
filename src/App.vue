<script setup>
import PersonalInfo from "./components/PersonalInfo.vue"
</script>

<template>
  <div class="px-4">
    <div class="mx-auto mt-[10svh] h-[80svh] max-w-[1200px] p-4 rounded-xl bg-white grid grid-flow-col gird-cols-3 gap-4">

      <div class="h-full"></div>
      
      <main class="h-full">
        <VeeForm class="h-full">
          <PersonalInfo />
        </VeeForm>
      </main>
    </div>
  </div>
</template>

