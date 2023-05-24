<script setup>
import { addOns } from "../data/plans-data";
import { usePlanStore } from "../stores/plan"
import BaseFormStep from "./BaseFormStep.vue";
import { storeToRefs } from 'pinia';

const toggleCheck = (name) => {
  const idx = pickedAddOns.value.indexOf(name)

  if (idx < 0) {
    pickedAddOns.value.push(name)
    return
  }

  pickedAddOns.value.splice(idx, 1)
}

const planStore = usePlanStore()
const { selectedAddOns: pickedAddOns, monthlyPlan: isMonthly } = storeToRefs(planStore)
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
        class="flex items-center px-6 py-4 mb-4 rounded-lg border border-light-gray transition-all duration-[400ms] cursor-pointer hover:border-purplish-blue focus:outline-none focus-visible:border-purplish-blue focus-visible:ring-offset-2 focus-visible:ring-2 focus-visible:ring-marine-blue"
        :class="
          pickedAddOns.includes(addOn.name)
            ? 'bg-alabaster border-purplish-blue'
            : ''
        "
      >
        <input
          type="checkbox"
          tabindex="-1"
          :id="addOn.name"
          :value="addOn.name"
          v-model="pickedAddOns"
          class="appearance-none relative cursor-pointer h-5 w-5 border border-light-gray rounded-[4px] transition-colors duration-200 focus:outline-none checked:border-purplish-blue checked:bg-purplish-blue checked:before:absolute checked:before:content-[url('src/assets/images/icon-checkmark.svg')] checked:before:left-[3px] checked:before:top-[-4px]"
        />
        <div class="ml-6">
          <h3 class="font-medium text-marine-blue mt-auto">{{ addOn.name }}</h3>
          <p class="text-sm">{{ addOn.description }}</p>
        </div>
        <p class="text-purplish-blue text-sm ml-auto">
          {{ isMonthly ? `$${addOn.mo}/mo` : `$${addOn.yr}/yr`}}
        </p>
      </label>
    </template>
  </BaseFormStep>
</template>
