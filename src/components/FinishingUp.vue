<script setup>
import { usePlanStore } from "../stores/plan";
import { getPlanPrice, getAddOnPrice } from "../data/plans-data";
import BaseFormStep from "./BaseFormStep.vue";
import { storeToRefs } from "pinia";

const {
  monthlyPlan: isMonthly,
  billingType,
  planTypeSelected,
  selectedAddOns,
  totalPrice,
} = storeToRefs(usePlanStore());

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
            <h3 class="text-marine-blue text-lg font-bold capitalize">
              {{ planTypeSelected }}({{ isMonthly ? "Monthly" : "Yearly" }})
            </h3>
            <button
              @click="$emit('editForm')"
              type="button"
              class="text-inherit underline decoration-2 hover:text-purplish-blue focus:outline-none focus-visible:text-purplish-blue"
            >
              Change
            </button>
          </div>
          <p class="text-marine-blue font-bold">
            ${{ getPlanPrice(planTypeSelected, billingType) }} /
            {{ billingType }}
          </p>
        </div>

        <hr class="my-4" />

        <div
          v-for="addOn in selectedAddOns"
          :key="addOn"
          class="flex justify-between"
        >
          <p>{{ addOn }}</p>
          <p class="text-marine-blue">
            +{{ getAddOnPrice(addOn, billingType) }} / {{ billingType }}
          </p>
        </div>
      </div>

      <div class="flex justify-between p-6">
        <p>Total (per {{ isMonthly ? "month" : "year" }})</p>
        <p class="text-xl text-purplish-blue font-bold">
          +${{ totalPrice }} / {{ billingType }}
        </p>
      </div>
    </template>
  </BaseFormStep>
</template>
