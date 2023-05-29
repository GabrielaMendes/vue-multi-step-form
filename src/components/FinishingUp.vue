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
      <div class="rounded-lg bg-alabaster p-6">
        <div class="flex items-center justify-between">
          <div>
            <h3 class="text-lg font-bold capitalize text-marine-blue">
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
          <p class="font-bold text-marine-blue">
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
        <p class="text-xl font-bold text-purplish-blue">
          +${{ totalPrice }} / {{ billingType }}
        </p>
      </div>
    </template>
  </BaseFormStep>
</template>
