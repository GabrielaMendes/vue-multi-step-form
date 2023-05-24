<script setup>
import { storeToRefs } from 'pinia'
import { usePlanStore } from "../stores/plan"
import { plans } from "../data/plans-data";
import BaseFormStep from "./BaseFormStep.vue";

const planStore = usePlanStore()
const { monthlyPlan: isMonthly, planTypeSelected } = storeToRefs(planStore)
</script>

<template>
  <BaseFormStep>
    <template v-slot:title>Select Your Plan</template>
    <template v-slot:description>
      You have the option of monthly or yearly billing.
    </template>

    <template v-slot:main>
      <div class="grid grid-cols-3 gap-4">
        <!-- Arcade -->
        <label
          v-for="plan in plans"
          :key="plan.name"
          tabindex="0"
          :for="plan.name"
          @keypress.enter="e => e.target.click()"
          class="my-plan-option"
          :class="
            planTypeSelected === plan.name
              ? ' bg-alabaster border-purplish-blue'
              : ' border-light-gray'
          "
        >
          <VeeField
            type="radio"
            name="plan"
            :id="plan.name"
            :value="plan.name"
            class="hidden"
            v-model="planTypeSelected"
          />
          <img
            :src="plan.icon"
            alt="plan icon"
            class="w-11 mt-2"
          />
          <div class="mt-9">
            <h3 class="capitalize font-medium text-marine-blue mt-auto">{{ plan.name }}</h3>
            <p>
              {{
                isMonthly ? `$${plan.mo}/mo` : `$${plan.yr}/yr`
              }}
            </p>
            <transition
              enter-from-class="opacity-0 scale-y-0"
              enter-active-class="transition-all origin-top duration-[400ms] ease-in-out"
              leave-active-class="transition-all origin-top duration-[400ms] ease-in-out"
              leave-to-class="opacity-0 scale-y-0"
            >
              <p v-show="!isMonthly" class="text-sm text-marine-blue">
                2 months free
              </p>
            </transition>
          </div>
        </label>
      </div>

      <!-- Plan Type -->
      <div
        class="mt-8 p-4 flex justify-center gap-6 w-full bg-alabaster rounded-lg font-medium"
      >
        <h3
          class="font-medium"
          :class="isMonthly ? ' text-marine-blue' : ' text-cool-gray'"
        >
          Monthly
        </h3>
        <label for="checkbox" class="hidden">Select plan type (monthly or yearly):</label>
        <input
          type="checkbox"
          id="checkbox"
          checked="true"
          @keypress.enter="(e) => e.target.click()"
          v-model="isMonthly"
          class="appearance-none relative h-6 w-12 rounded-full bg-marine-blue cursor-pointer after:h-4 after:w-4 focus:outline-none focus-visible:ring-offset-2 focus-visible:ring-2 focus-visible:ring-marine-blue after:rounded-full after:bg-alabaster after:absolute after:top-1 after:right-1 after:transition after:duration-300 checked:after:translate-x-[-150%]"
        />
        <h3
          class="font-medium"
          :class="!isMonthly ? ' text-marine-blue' : ' text-cool-gray'"
        >
          Yearly
        </h3>
      </div>
    </template>
  </BaseFormStep>
</template>
