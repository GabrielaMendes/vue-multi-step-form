<script setup>
import { computed, ref } from "vue";
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";
import { useIsFormDirty } from "vee-validate";
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

const isFormDirty = useIsFormDirty();

window.onbeforeunload = () => {
  if (isFormDirty.value) {
    return "Are you sure you want to leave?";
  }

  return null;
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
      class="mt-24 max-[375px]:mt-16 md:mt-0 h-fit md:h-full p-4 rounded-xl bg-white md:grid md:grid-cols-3 md:gap-6 shadow-custom"
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
            id="formId"
            @submit="onFormSubmit"
            v-slot="{ validate }"
            class="h-full"
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

            <section
              class="absolute bottom-0 left-0 w-full flex justify-between mt-auto bg-white p-5 max-[375px]:p-3 md:p-0 md:static"
            >
              <button
                v-show="!isFirst"
                type="button"
                @click="prevStep"
                class="py-3 bg-white text-cool-gray rounded-lg font-medium hover:text-marine-blue focus-visible:outline-none focus-visible:text-marine-blue focus-visible:underline focus-visible:decoration-marine-blue focus-visible:decoration-2"
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
                class="w-32 py-3 ml-auto bg-marine-blue text-white rounded md:rounded-lg font-medium hover:bg-opacity-[0.85] focus-visible:outline-none focus-visible:bg-opacity-[0.85] focus-visible:ring-offset-2 focus-visible:ring-2 focus-visible:ring-marine-blue"
              >
                Next Step
              </button>
              <button
                v-else
                type="submit"
                class="w-32 py-3 bg-purplish-blue text-white rounded md:rounded-lg font-medium hover:bg-opacity-70 focus-visible:outline-none focus-visible:bg-opacity-70 focus-visible:ring-offset-2 focus-visible:ring-2 focus-visible:ring-marine-blue"
              >
                Confirm
              </button>
            </section>
          </VeeForm>
          <!-- Thank you -->

          <div
            v-else
            class="h-full flex flex-col items-center justify-center text-center py-16 px-6 md:px-24"
          >
            <img src="src/assets/images/icon-thank-you.svg" alt="success" />
            <h1 class="font-bold text-[34px] text-marine-blue mt-6 mb-4">
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
