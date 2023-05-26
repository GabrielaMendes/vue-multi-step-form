<script setup>
defineProps(["step", "currentStep", "isDesktop"]);
</script>

<template>
  <div class="mt-10 max-[375px]:mt-6 md:mt-0 flex gap-4 md:mb-10">
    <div
      class="w-10 h-10 border-2 border-pastel-blue rounded-full font-bold flex items-center justify-center transition-color duration-300 ease-out"
      :class="{ 'bg-light-blue': step.number === currentStep }"
    >
      <span
        class="text-alabaster"
        :class="{ 'text-marine-blue': step.number === currentStep }"
        >{{ step.number }}</span
      >
    </div>
    <div v-if="isDesktop">
      <p class="uppercase text-sm text-pastel-blue">step {{ step.number }}</p>
      <h3 class="uppercase font-bold tracking-widest text-alabaster">
        {{ step.title }}
      </h3>
    </div>
  </div>
</template>
