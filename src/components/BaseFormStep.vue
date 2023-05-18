<template>
  <div class="h-full flex flex-col pt-10 pb-5 px-20">
    <section>
      <h1 class="font-bold text-[34px] text-marine-blue"><slot name="title"></slot></h1>
      <p><slot name="description"></slot></p>
    </section>
    
    <section>
      <slot name="main"></slot>
    </section>
    
    <section class="flex justify-between mt-auto">
      <button
        type="button"
        class="py-3 bg-white text-cool-gray rounded-lg font-medium hover:text-marine-blue focus-visible:outline-none focus-visible:text-marine-blue"
      >
        Go Back
      </button>
      <button
        v-if="true"
        type="submit"
        class="w-32 py-3 bg-marine-blue text-white rounded-lg font-medium hover:bg-opacity-[0.85] focus-visible:outline-none focus-visible:bg-opacity-[0.85]"
      >
        Next Step
      </button>
      <button
        v-else
        type="submit"
        class="w-32 py-3 bg-purplish-blue text-white rounded-lg font-medium hover:bg-opacity-70 focus-visible:outline-none focus-visible:bg-opacity-70"
      >
        Confirm
      </button>
    </section>
  </div>
</template>
