<script setup>
import { computed } from "vue";
import { usePlanStore } from "../stores/plan";

import BaseFormStep from "./BaseFormStep.vue";

const { monsthlyPlan: isMonthly } = usePlanStore();

const billingType = computed(() => (isMonthly ? "mo" : "yr"));

defineEmits(["editForm"]);
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
              Arcade({{ isMonthly ? "Monthly" : "Yearly" }})
            </h3>
            <button
              @click="$emit('editForm')"
              type="button"
              class="text-inherit underline decoration-2 hover:text-purplish-blue focus:outline-none focus-visible:text-purplish-blue"
            >
              Change
            </button>
          </div>
          <p class="text-marine-blue font-bold">$9/{{ billingType }}</p>
        </div>

        <hr class="my-4" />

        <div class="flex justify-between">
          <p>Online service</p>
          <p class="text-marine-blue">+1/{{ billingType }}</p>
        </div>
        <div class="flex justify-between mt-4">
          <p>Larger storage</p>
          <p class="text-marine-blue">+2/{{ billingType }}</p>
        </div>
      </div>

      <div class="flex justify-between p-6">
        <p>Total (per {{ isMonthly ? "month" : "year" }})</p>
        <p class="text-xl text-purplish-blue font-bold">
          +$12/{{ billingType }}
        </p>
      </div>
    </template>
  </BaseFormStep>
</template>
