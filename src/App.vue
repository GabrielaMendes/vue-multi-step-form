<script setup>
import { computed, ref } from "vue";
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";
import { usePlanStore } from "./stores/plan";
import FinishingUp from "./components/FinishingUp.vue";
import PersonalInfo from "./components/PersonalInfo.vue";
import PickAddOns from "./components/PickAddOns.vue";
import SelectPlan from "./components/SelectPlan.vue";
import MenuItem from "./components/MenuItem.vue";

const breakpoints = useBreakpoints(breakpointsTailwind);
const isDesktop = breakpoints.greaterOrEqual("md");

const formActive = ref(true);

const currentStep = ref(1);

const isFirst = computed(() => currentStep.value === 1);
const isLast = computed(() => currentStep.value === stepList.length);

const nextStep = () => {
  currentStep.value += 1;
};

const prevStep = () => {
  currentStep.value -= 1;
};

const currentStepComponent = computed(
  () => stepList.find((step) => step.number === currentStep.value).component
);

const onEditForm = () => {
  currentStep.value = 2;
};

const onFormSubmit = (values) => {
  const { monthlyPlan, totalPrice: total } = usePlanStore();

  console.log({
    id: crypto.randomUUID(),
    ...values,
    billingType: monthlyPlan ? "monthly" : "yearly",
    totalPrice: total,
  });

  formActive.value = false;
};

const stepList = [
  {
    number: 1,
    title: "your info",
    component: PersonalInfo,
  },
  {
    number: 2,
    title: "select plan",
    component: SelectPlan,
  },
  {
    number: 3,
    title: "add-ons",
    component: PickAddOns,
  },
  {
    number: 4,
    title: "summary",
    component: FinishingUp,
  },
];
</script>

<template>
  <div class="md:container-width md:container-height p-4">
    <div
      class="mt-24 h-fit rounded-xl bg-white p-4 shadow-custom max-[375px]:mt-16 md:mt-0 md:grid md:h-[100%] md:grid-cols-3 md:gap-6"
    >
      <!-- Side/Top Menu -->
      <teleport to="body" :disabled="isDesktop">
        <div class="top-menu md:side-menu">
          <MenuItem
            v-for="step in stepList"
            :key="step.number"
            :step="step"
            :currentStep="currentStep"
            :isDesktop="isDesktop"
          />
        </div>
      </teleport>
      <!-- Main Form -->
      <main class="col-span-2 h-full">
        <!-- Form -->
        <transition mode="out-in" name="fade">
          <VeeForm
            name="veeForm"
            @submit="onFormSubmit"
            v-slot="{ validate }"
            class="h-full md:flex md:flex-col md:justify-between"
            v-if="formActive"
          >
            <transition mode="out-in" :name="isDesktop ? 'slide' : 'fade'">
              <KeepAlive>
                <component
                  :is="currentStepComponent"
                  :isDesktop="isDesktop"
                  @edit-form="onEditForm"
                ></component>
              </KeepAlive>
            </transition>

            <!-- Buttons -->
            <section
              class="absolute bottom-0 left-0 mt-auto flex w-full justify-between bg-white p-4 max-[375px]:p-3 md:static md:bg-transparent md:px-[15%] md:pb-5"
            >
              <button
                v-show="!isFirst"
                type="button"
                @click="prevStep"
                class="rounded-lg bg-white py-3 font-medium text-cool-gray hover:text-marine-blue focus-visible:text-marine-blue focus-visible:underline focus-visible:decoration-marine-blue focus-visible:decoration-2 focus-visible:outline-none"
              >
                Go Back
              </button>
              <button
                v-if="!isLast"
                @click="
                  validate().then((result) => {
                    if (result.valid) {
                      nextStep();
                    }
                  })
                "
                type="button"
                class="ml-auto w-32 rounded bg-marine-blue py-3 font-medium text-white hover:bg-opacity-[0.85] focus-visible:bg-opacity-[0.85] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-marine-blue focus-visible:ring-offset-2 md:rounded-lg"
              >
                Next Step
              </button>
              <button
                v-else
                type="submit"
                class="w-32 rounded bg-purplish-blue py-3 font-medium text-white hover:bg-opacity-70 focus-visible:bg-opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-marine-blue focus-visible:ring-offset-2 md:rounded-lg"
              >
                Confirm
              </button>
            </section>
          </VeeForm>
          <!-- Thank you -->

          <div
            v-else
            class="h-full flex flex-col items-center justify-center px-6 py-16 text-center md:px-24"
          >
            <img src="src/assets/images/icon-thank-you.svg" alt="success" />
            <h1 class="mb-4 mt-6 text-[34px] font-bold text-marine-blue">
              Thank you!
            </h1>
            <p>
              Thanks for confirming your subscription! We hope you have fun
              using our platform. If you ever need support, please feel free to
              email us at support@loremgaming.com
            </p>
          </div>
        </transition>
      </main>
    </div>
  </div>
</template>
