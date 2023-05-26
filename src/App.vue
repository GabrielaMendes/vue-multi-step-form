<script setup>
import { computed, ref } from "vue";
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";
import FinishingUp from "./components/FinishingUp.vue";
import PersonalInfo from "./components/PersonalInfo.vue";
import PickAddOns from "./components/PickAddOns.vue";
import SelectPlan from "./components/SelectPlan.vue";
import MenuItem from "./components/MenuItem.vue";

const breakpoints = useBreakpoints(breakpointsTailwind);
const isDesktop = breakpoints.greaterOrEqual("md");

const formActive = ref(true);

const currentStep = ref(1);

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

const onFormSubmit = () => {
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
      class="mt-24 max-[375px]:mt-16 md:mt-0 h-fit md:h-full p-4 rounded-xl bg-white md:grid md:grid-cols-3 md:gap-6"
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
        <transition
          mode="out-in"
          name="fade"
        >
          <VeeForm
            @submit="onFormSubmit"
            v-slot="{ validate }"
            class="h-full"
            v-if="formActive"
          >
            <transition
              mode="out-in"
              :name="isDesktop ? 'slide' : 'fade'"
            >
              <KeepAlive>
                <component
                  :is="currentStepComponent"
                  :isFirst="currentStep === 1"
                  :isLast="currentStep === stepList.length"
                  :validate="validate"
                  :isDesktop="isDesktop"
                  @go-back="prevStep"
                  @go-next="nextStep"
                  @edit-form="onEditForm"
                ></component>
              </KeepAlive>
            </transition>
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
