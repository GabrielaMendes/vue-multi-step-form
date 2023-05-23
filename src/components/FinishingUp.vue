<script setup>
import BaseFormStep from "./BaseFormStep.vue";
</script>

<template>
  <BaseFormStep>
    <template v-slot:title>Finishing up</template>
    <template v-slot:description>
      Double-check everythin looks OK before confirming.
    </template>

    <template v-slot:main>
      <div class="bg-alabaster p-6 rounded-lg">
        <div class="flex items-center justify-between">
          <div>
            <h3 class="text-marine-blue text-lg font-bold">
              Arcade(Monthly)
            </h3>
            <a href="#" class="text-inherit underline decoration-2">
              Change
            </a>
          </div>
          <p class="text-marine-blue font-bold">$9/mo</p>
        </div>
        
        <hr class="my-4">

        <div class="flex justify-between">
          <p>Online service</p>
          <p class="text-marine-blue">+1/mo</p>
        </div>
        <div class="flex justify-between mt-4">
          <p>Larger storage</p>
          <p class="text-marine-blue">+2/mo</p>
        </div>
      </div>
      
      <div class="flex justify-between p-6">
        <p>Total (per month)</p>
        <p  class="text-xl text-purplish-blue font-bold">+$12/mo</p>
      </div>
    </template>
  </BaseFormStep>
</template>
