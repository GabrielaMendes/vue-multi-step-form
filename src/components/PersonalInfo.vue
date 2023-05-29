<script setup>
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
</script>

<template>
  <BaseFormStep>
    <template v-slot:title>Personal Info</template>
    <template v-slot:description>
      Please provide your name, email address, and phone number.
    </template>

    <template v-slot:main>
      <!-- Name -->
      <div class="mb-3">
        <div class="flex justify-between">
          <label for="name" class="mb-1 inline-block text-sm text-marine-blue"
            >Name</label
          >
          <ErrorMessage
            class="text-sm font-medium text-strawberry-red"
            name="name"
          />
        </div>
        <VeeField
          type="text"
          id="name"
          name="name"
          class="text-input"
          :class="
            !isNameValid && isNameTouched
              ? ' border-strawberry-red'
              : ' border-light-gray'
          "
          placeholder="e.g. Stephen King"
          :rules="'required|alpha_spaces|min:3|max:100'"
          @input="updateUnsaved"
        />
      </div>
      <!-- Email -->
      <div class="mb-3">
        <div class="flex justify-between">
          <label
            for="email"
            class="mb-1 mt-2 inline-block text-sm text-marine-blue"
            >Email Adress</label
          >
          <ErrorMessage
            class="text-sm font-medium text-strawberry-red"
            name="email"
          />
        </div>
        <VeeField
          type="email"
          id="email"
          name="email"
          class="text-input"
          :class="
            !isEmailValid && isEmailTouched
              ? ' border-strawberry-red'
              : ' border-light-gray'
          "
          placeholder="e.g. stephenking@lorem.com"
          :rules="'required|email|min:3|max:100'"
          @input="updateUnsaved"
        />
      </div>
      <!-- Phone Number -->
      <div class="mb-3">
        <div class="flex justify-between">
          <label
            for="phone"
            class="mb-1 mt-2 inline-block text-sm text-marine-blue"
            >Phone Number</label
          >
          <ErrorMessage
            class="text-sm font-medium text-strawberry-red"
            name="phone"
          />
        </div>
        <VeeField
          type="text"
          id="phone"
          name="phone"
          class="text-input"
          :class="
            !isPhoneValid && isPhoneTouched
              ? ' border-strawberry-red'
              : ' border-light-gray'
          "
          placeholder="e.g. +1 234 567 890"
          :rules="'required|phone'"
          @input="updateUnsaved"
        />
      </div>
    </template>
  </BaseFormStep>
</template>

<style scoped></style>
