<script setup>
import PersonalInfo from "./components/PersonalInfo.vue"
import PickAddOns from "./components/PickAddOns.vue";
import SelectPlan from "./components/SelectPlan.vue";
</script>

<template>
  <div class="px-4">
    <div class="mx-auto mt-[12svh] h-[76svh] max-w-[1200px] p-4 rounded-xl bg-white grid grid-flow-col gird-cols-3 gap-4">

      <div class="h-full"></div>
      
      <main class="h-full">
        <VeeForm class="h-full">
          <PickAddOns />
        </VeeForm>
      </main>
    </div>
  </div>
</template>

