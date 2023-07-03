<script setup>
import { computed } from "vue";
import { useIsFieldValid, useIsFieldTouched } from "vee-validate";
import BaseFormStep from "./BaseFormStep.vue";

const isNameValid = useIsFieldValid("name");
const isEmailValid = useIsFieldValid("email");
const isPhoneValid = useIsFieldValid("phone");

const isNameTouched = useIsFieldTouched("name");
const isEmailTouched = useIsFieldTouched("email");
const isPhoneTouched = useIsFieldTouched("phone");

const updateUnsaved = () => {
  window.onbeforeunload = () => {
    return "Are you sure you want to leave?";
  };
};

const inputs = [
  {
    label: "Name",
    type: "text",
    id: "name",
    placeholder: "e.g. Stephen King",
    errorCondition: computed(() => !isNameValid.value && isNameTouched.value),
    rules: "required|alpha_spaces|min:3|max:100"
  },
  {
    label: "Email Adress",
    type: "email",
    id: "email",
    placeholder: "e.g. stephenking@lorem.com",
    errorCondition: computed(() => !isEmailValid.value && isEmailTouched.value),
    rules: "required|email|min:3|max:100"
  },
  {
    label: "Phone Number",
    type: "text",
    id: "phone",
    placeholder: "e.g. +1 234 567 890",
    errorCondition: computed(() => !isPhoneValid.value && isPhoneTouched.value),
    rules: "required|phone"
  },
]
</script>

<template>
  <BaseFormStep>
    <template v-slot:title>Personal Info</template>
    <template v-slot:description>
      Please provide your name, email address, and phone number.
    </template>

    <template v-slot:main>
      <!-- Name -->
      <div v-for="input in inputs" :key="input.id" class="mb-5">
        <div class="flex justify-between">
          <label :for="input.id" class="mb-1 inline-block text-sm text-marine-blue"
            >{{ input.label }}</label
          >
          <ErrorMessage
            class="text-sm font-medium text-strawberry-red"
            :name="input.id"
          />
        </div>
        <VeeField
          :type="input.type"
          :id="input.id"
          :name="input.id"
          class="text-input"
          :class="
            input.errorCondition.value
              ? ' border-strawberry-red'
              : ' border-light-gray'
          "
          :placeholder="input.placeholder"
          :rules="input.rules"
          @input="updateUnsaved"
        />
      </div>
    </template>
  </BaseFormStep>
</template>

