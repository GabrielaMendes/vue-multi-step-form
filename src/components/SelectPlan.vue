<script setup>
import { ref } from "vue";
import BaseFormStep from "./BaseFormStep.vue";

defineProps(["isMonthly"]);

const emit = defineEmits(["changePlan"]);

const changePlanBilling = () => {
  emit("changePlan");
};

const planSelected = ref("arcade");

const plans = {
  arcade: {
    mo: 9,
    yr: 90,
  },
  advanced: {
    mo: 12,
    yr: 120,
  },
  pro: {
    mo: 15,
    yr: 150,
  },
};
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
          tabindex="0"
          for="arcade"
          @keypress.enter="planSelected = 'arcade'"
          class="plan-option"
          :class="
            planSelected === 'arcade'
              ? ' bg-alabaster border-purplish-blue'
              : ' border-light-gray'
          "
        >
          <VeeField
            type="radio"
            name="plan"
            id="arcade"
            value="arcade"
            class="hidden"
            v-model="planSelected"
          />
          <img
            src="src/assets/images/icon-arcade.svg"
            alt="arcade icon"
            class="w-11 mt-2"
          />
          <div class="mt-9">
            <h3 class="font-medium text-marine-blue mt-auto">Arcade</h3>
            <p>
              {{
                isMonthly ? `$${plans.arcade.mo}/mo` : `$${plans.arcade.yr}/yr`
              }}
            </p>
            <transition name="slide">
              <p v-show="!isMonthly" class="text-sm text-marine-blue">
                2 months free
              </p>
            </transition>
          </div>
        </label>
        <!-- Advanced -->
        <label
          tabindex="0"
          for="advanced"
          @keypress.enter="planSelected = 'advanced'"
          class="plan-option"
          :class="
            planSelected === 'advanced'
              ? ' bg-alabaster border-purplish-blue'
              : ' border-light-gray'
          "
        >
          <VeeField
            type="radio"
            name="plan"
            id="advanced"
            value="advanced"
            class="hidden"
            v-model="planSelected"
          />
          <img
            src="src/assets/images/icon-advanced.svg"
            alt="advanced icon"
            class="w-11 mt-2"
          />
          <div class="mt-9">
            <h3 class="font-medium text-marine-blue">Advanced</h3>
            <p>
              {{
                isMonthly
                  ? `$${plans.advanced.mo}/mo`
                  : `$${plans.advanced.yr}/yr`
              }}
            </p>
            <transition name="slide">
              <p v-show="!isMonthly" class="text-sm text-marine-blue">
                2 months free
              </p>
            </transition>
          </div>
        </label>
        <!-- Pro -->
        <label
          tabindex="0"
          for="pro"
          @keypress.enter="planSelected = 'pro'"
          class="plan-option"
          :class="
            planSelected === 'pro'
              ? ' bg-alabaster border-purplish-blue'
              : ' border-light-gray'
          "
        >
          <VeeField
            type="radio"
            name="plan"
            id="pro"
            value="pro"
            class="hidden"
            v-model="planSelected"
          />
          <img
            src="src/assets/images/icon-pro.svg"
            alt="pro icon"
            class="w-12 mt-2"
          />
          <div class="mt-9">
            <h3 class="font-medium text-marine-blue">Pro</h3>
            <p>
              {{ isMonthly ? `$${plans.pro.mo}/mo` : `$${plans.pro.yr}/yr` }}
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
