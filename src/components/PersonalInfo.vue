<script setup>
import { useIsFieldValid } from "vee-validate";
import BaseFormStep from "./BaseFormStep.vue";

const isNameValid = useIsFieldValid('name');
const isEmailValid = useIsFieldValid('email');
const isPhoneValid = useIsFieldValid('phone');
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
          <label for="name" class="inline-block mb-1 text-sm text-marine-blue"
            >Name</label
          >
          <ErrorMessage
            class="text-strawberry-red text-sm font-medium"
            name="name"
          />
        </div>
        <VeeField
          type="text"
          id="name"
          name="name"
          class="block w-full p-3 rounded-md text-marine-blue font-medium border border-light-gray transition duration-500 focus:outline-none focus:border-purplish-blue"
          :class="!isNameValid ? ' border-strawberry-red' : ''"
          placeholder="e.g. Stephen King"
          :rules="'required|alpha_spaces|min:3|max:100'"
        />
      </div>
      <!-- Email -->
      <div class="mb-3">
        <div class="flex justify-between">
          <label
            for="email"
            class="inline-block mb-1 mt-2 text-sm text-marine-blue"
            >Email Adress</label
          >
          <ErrorMessage
            class="text-strawberry-red text-sm font-medium"
            name="email"
          />
        </div>
        <VeeField
          type="email"
          id="email"
          name="email"
          class="block w-full p-3 rounded-md text-marine-blue font-medium border border-light-gray transition duration-500 focus:outline-none focus:border-purplish-blue"
          :class="!isEmailValid ? ' border-strawberry-red' : ''"
          placeholder="e.g. stephenking@lorem.com"
          :rules="'required|email|min:3|max:100'"
        />
      </div>
      <!-- Phone Number -->
      <div class="mb-3">
        <div class="flex justify-between">
          <label
            for="phone"
            class="inline-block mb-1 mt-2 text-sm text-marine-blue"
            >Phone Number</label
          >
          <ErrorMessage
            class="text-strawberry-red text-sm font-medium"
            name="phone"
          />
        </div>
        <VeeField
          type="text"
          id="phone"
          name="phone"
          class="block w-full p-3 rounded-md text-marine-blue font-medium border border-light-gray transition duration-500 focus:outline-none focus:border-purplish-blue"
          :class="!isPhoneValid ? ' border-strawberry-red' : ''"
          placeholder="e.g. +1 234 567 890"
          :rules="'required|phone'"
        />
      </div>
    </template>
  </BaseFormStep>
</template>

<style>
</style>
