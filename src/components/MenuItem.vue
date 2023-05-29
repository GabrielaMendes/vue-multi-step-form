<script setup>
defineProps(["step", "currentStep", "isDesktop"]);
</script>

<template>
  <div class="mt-10 flex gap-4 max-[375px]:mt-6 md:mb-10 md:mt-0">
    <div
      class="h-10 w-10 flex items-center justify-center rounded-full border-2 border-pastel-blue font-bold transition-color duration-300 ease-out"
      :class="{ 'bg-light-blue': step.number === currentStep }"
    >
      <span
        class="text-alabaster"
        :class="{ 'text-marine-blue': step.number === currentStep }"
        >{{ step.number }}</span
      >
    </div>
    <div v-if="isDesktop">
      <p class="text-sm uppercase text-pastel-blue">step {{ step.number }}</p>
      <h3 class="font-bold uppercase tracking-widest text-alabaster">
        {{ step.title }}
      </h3>
    </div>
  </div>
</template>
