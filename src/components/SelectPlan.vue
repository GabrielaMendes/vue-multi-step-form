<script setup>
import { ref } from "vue";
import BaseFormStep from "./BaseFormStep.vue";

defineProps(["isMonthly"]);

const emit = defineEmits(["changePlan"]);

const changePlanBilling = () => {
  emit("changePlan");
};

const planSelected = ref("arcade");

const plans = [
  {
    name: "arcade",
    icon: "src/assets/images/icon-arcade.svg",
    mo: 9,
    yr: 90,
  },
  {
    name: "advanced",
    icon: "src/assets/images/icon-advanced.svg",
    mo: 12,
    yr: 120,
  },
  {
    name: "pro",
    icon: "src/assets/images/icon-pro.svg",
    mo: 15,
    yr: 150,
  },
];
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
          @keypress.enter="planSelected = plan.name"
          class="plan-option"
          :class="
            planSelected === plan.name
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
            v-model="planSelected"
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
            <transition name="slide">
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
          @change="changePlanBilling"
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

<style scoped>
.plan-option {
  @apply flex-1 flex flex-col justify-between p-4 rounded-lg border transition duration-[400ms] cursor-pointer hover:border-purplish-blue focus:outline-none focus-visible:border-purplish-blue focus-visible:ring-offset-2 focus-visible:ring-2  focus-visible:ring-marine-blue;
}

.slide-enter-active,
.slide-leave-active {
  transform-origin: top;
  transition: all 0.4s ease-in-out;
}

.slide-enter-to,
.slide-leave-from {
  transform: scaleY(1);
  opacity: 1;
}

.slide-enter-from,
.slide-leave-to {
  transform: scaleY(0);
  opacity: 0;
}
</style>
