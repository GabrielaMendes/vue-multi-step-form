<script setup>
import { computed, ref } from "vue";
import FinishingUp from "./components/FinishingUp.vue";
import PersonalInfo from "./components/PersonalInfo.vue";
import PickAddOns from "./components/PickAddOns.vue";
import SelectPlan from "./components/SelectPlan.vue";
import MenuItem from "./components/MenuItem.vue";

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
  <div
    class="container-height container-width p-4 rounded-xl bg-white grid grid-cols-3 gap-6"
  >
    <!-- Side/Top Menu -->
    <div
      class="h-full px-6 py-12 rounded-2xl bg-[url('src/assets/images/bg-sidebar-desktop.svg')] bg-cover bg-bottom z-50"
    >
      <MenuItem
        v-for="step in stepList"
        :key="step.number"
        :step="step"
        :currentStep="currentStep"
      />
    </div>

    <!-- Main Form -->
    <main class="col-span-2 h-full">
      <!-- Form -->
      <VeeForm
        @submit="onFormSubmit"
        v-slot="{ validate }"
        class="h-full"
        v-if="formActive"
      >
        <transition
          mode="out-in"
          enter-from-class="opacity-0 translate-x-[-50%]"
          leave-to-class="opacity-0 translate-x-[-50%]"
          enter-active-class="transition-all duration-[500ms] ease-out"
          leave-active-class="transition-all duration-[500ms] ease-in"
        >
          <KeepAlive>
            <component
              :is="currentStepComponent"
              :isFirst="currentStep === 1"
              :isLast="currentStep === stepList.length"
              :validate="validate"
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
        class="h-full flex flex-col items-center justify-center text-center px-24"
      >
        <img src="src/assets/images/icon-thank-you.svg" alt="success" />
        <h1 class="font-bold text-[34px] text-marine-blue mt-6 mb-4">
          Thank you!
        </h1>
        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com
        </p>
      </div>
    </main>
  </div>
</template>
