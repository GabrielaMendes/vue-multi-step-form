<script setup>
const props = defineProps(["isFirst", "isLast", "validate", "isDesktop"]);

const emit = defineEmits(["goBack", "goNext"]);

const goBack = () => {
  emit("goBack");
};

const goNext = () => {
  props.validate().then((result) => {
    if (result.valid) {
      emit("goNext");
    }
  });
};
</script>

<template>
  <div class="h-full flex flex-col pt-10 pb-5 px-[15%]">
    <section>
      <h1 class="font-bold text-[34px] text-marine-blue">
        <slot name="title"></slot>
      </h1>
      <p><slot name="description"></slot></p>
    </section>

    <section class="mt-10">
      <slot name="main"></slot>
    </section>

    <teleport to="body" :disabled="isDesktop">
      <section class="absolute bottom-0 left-0 w-full flex justify-between mt-auto bg-white p-5 md:p-0 md:static">
        <button
          v-show="!isFirst"
          type="button"
          @click="goBack"
          class="py-3 bg-white text-cool-gray rounded-lg font-medium hover:text-marine-blue focus-visible:outline-none focus-visible:text-marine-blue focus-visible:underline focus-visible:decoration-marine-blue focus-visible:decoration-2"
        >
          Go Back
        </button>
        <button
          v-if="!isLast"
          @click="goNext"
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
    </teleport>
  </div>
</template>
