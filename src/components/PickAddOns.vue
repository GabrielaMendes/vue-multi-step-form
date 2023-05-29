<script setup>
import { addOns } from "../data/plans-data";
import { usePlanStore } from "../stores/plan";
import BaseFormStep from "./BaseFormStep.vue";
import { storeToRefs } from "pinia";

const toggleCheck = (name) => {
  const idx = pickedAddOns.value.indexOf(name);

  if (idx < 0) {
    pickedAddOns.value.push(name);
    return;
  }

  pickedAddOns.value.splice(idx, 1);
};

const planStore = usePlanStore();
const { selectedAddOns: pickedAddOns, monthlyPlan: isMonthly } =
  storeToRefs(planStore);
</script>

<template>
  <BaseFormStep>
    <template v-slot:title>Pick add-ons</template>
    <template v-slot:description>
      Add-ons help enhance your gaming experience.
    </template>

    <template v-slot:main>
      <label
        v-for="addOn in addOns"
        :key="addOn.name"
        :for="addOn.name"
        tabindex="0"
        @keyup.enter="toggleCheck(addOn.name)"
        class="mb-4 cursor-pointer flex items-center rounded-lg border border-light-gray px-6 py-4 transition-all duration-[400ms] hover:border-purplish-blue focus:outline-none focus-visible:border-purplish-blue focus-visible:ring-2 focus-visible:ring-marine-blue focus-visible:ring-offset-2 max-[375px]:px-4"
        :class="
          pickedAddOns.includes(addOn.name)
            ? 'border-purplish-blue bg-alabaster'
            : ''
        "
      >
        <VeeField
          name="addOns"
          type="checkbox"
          tabindex="-1"
          :id="addOn.name"
          :value="addOn.name"
          v-model="pickedAddOns"
          class="relative h-5 w-5 cursor-pointer appearance-none rounded-[4px] border border-light-gray transition-colors duration-200 checked:border-purplish-blue checked:bg-purplish-blue checked:before:absolute checked:before:left-[3px] checked:before:top-[-4px] checked:before:content-[url('src/assets/images/icon-checkmark.svg')] focus:outline-none"
        />
        <div class="ml-6 max-[375px]:ml-4">
          <h3 class="mt-auto font-medium text-marine-blue">{{ addOn.name }}</h3>
          <p class="text-sm">{{ addOn.description }}</p>
        </div>
        <p class="ml-auto text-sm text-purplish-blue">
          {{ isMonthly ? `$${addOn.mo}/mo` : `$${addOn.yr}/yr` }}
        </p>
      </label>
    </template>
  </BaseFormStep>
</template>
