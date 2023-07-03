<script setup>
import { storeToRefs } from "pinia";
import { usePlanStore } from "../stores/plan";
import { usePlans } from "../composables/usePlans";
import BaseFormStep from "./BaseFormStep.vue";

const { plans } = usePlans()

const planStore = usePlanStore();
const { monthlyPlan: isMonthly, planTypeSelected } = storeToRefs(planStore);
</script>

<template>
  <BaseFormStep>
    <template v-slot:title>Select Your Plan</template>
    <template v-slot:description>
      You have the option of monthly or yearly billing.
    </template>

    <template v-slot:main>
      <div class="md:grid md:grid-cols-3 md:gap-4">
        <!-- Arcade -->
        <label
          v-for="plan in plans"
          :key="plan.name"
          tabindex="0"
          :for="plan.name"
          @keypress.enter="(e) => e.target.click()"
          class="my-plan-option"
          :class="
            planTypeSelected === plan.name
              ? ' border-purplish-blue bg-alabaster'
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
          <img :src="plan.icon" alt="plan icon" class="w-11 md:mt-2" />
          <div class="md:mt-9">
            <h3 class="mt-auto font-medium capitalize text-marine-blue">
              {{ plan.name }}
            </h3>
            <p>
              {{ isMonthly ? `$${plan.mo}/mo` : `$${plan.yr}/yr` }}
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

      <!-- Plan Billing Type -->
      <div
        class="mt-8 w-full flex justify-center gap-6 rounded-lg bg-alabaster p-4 font-medium max-[375px]:mt-5 max-[375px]:p-3"
      >
        <h3
          class="font-medium"
          :class="isMonthly ? ' text-marine-blue' : ' text-cool-gray'"
        >
          Monthly
        </h3>
        <label for="checkbox" class="hidden"
          >Select plan type (monthly or yearly):</label
        >
        <input
          type="checkbox"
          id="checkbox"
          checked="true"
          @keypress.enter="(e) => e.target.click()"
          v-model="isMonthly"
          class="appearance-none relative h-6 w-12 cursor-pointer rounded-full bg-marine-blue after:absolute after:right-1 after:top-1 after:h-4 after:w-4 after:rounded-full after:bg-alabaster after:transition after:duration-300 checked:after:translate-x-[-150%] focus:outline-none focus-visible:ring-2 focus-visible:ring-marine-blue focus-visible:ring-offset-2"
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
