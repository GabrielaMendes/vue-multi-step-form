<script setup>
import FinishingUp from "./components/FinishingUp.vue";
import PersonalInfo from "./components/PersonalInfo.vue";
import PickAddOns from "./components/PickAddOns.vue";
import SelectPlan from "./components/SelectPlan.vue";
</script>

<template>
  <div class="px-4">
    <div
      class="mx-auto mt-[12svh] h-[76svh] max-w-[1200px] p-4 rounded-xl bg-white grid grid-cols-3 gap-6"
    >
      <div class="h-full px-6 py-12 rounded-2xl  bg-[url('src/assets/images/bg-sidebar-desktop.svg')] bg-cover bg-bottom">
        <div v-for="step in stepList" :key="step.number" class="flex items-center gap-4 mb-10">
          <div class="w-10 h-10 border-2 border-pastel-blue rounded-full font-bold flex items-center justify-center">
            <span class="text-alabaster">{{ step.number }}</span>
          </div>
          <div>
            <p class="uppercase text-sm text-pastel-blue">step {{ step.number }}</p>
            <h3 class="uppercase font-bold tracking-widest text-alabaster">{{ step.title }}</h3>
          </div>
        </div>
      </div>

      <main class="col-span-2 h-full">
        <!-- <VeeForm class="h-full">
        </VeeForm> -->

        <!-- Thank you -->
        <div class="h-full flex flex-col items-center justify-center text-center px-24">
          <img src="src/assets/images/icon-thank-you.svg" alt="success" />
          <h1 class="font-bold text-[34px] text-marine-blue mt-6 mb-4">
            Thank you!
          </h1>
          <p>
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com
          </p>
        </div>
      </main>
    </div>
  </div>
</template>
