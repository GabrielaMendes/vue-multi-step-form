<script setup>
import FinishingUp from "./components/FinishingUp.vue";
import PersonalInfo from "./components/PersonalInfo.vue";
import PickAddOns from "./components/PickAddOns.vue";
import SelectPlan from "./components/SelectPlan.vue";
</script>

<template>
  <div class="px-4">
    <div
      class="mx-auto mt-[12svh] h-[76svh] max-w-[1200px] p-4 rounded-xl bg-white grid grid-flow-col gird-cols-3 gap-4"
    >
      <div class="h-full"></div>

      <main class="h-full">
        <!-- <VeeForm class="h-full">
        </VeeForm> -->

        <!-- Thank you -->
        <div class="h-full flex flex-col items-center justify-center px-24">
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
