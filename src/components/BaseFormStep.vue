<template>
  <div
    class="h-fit flex flex-col p-4 max-[375px]:p-3 md:pt-10 md:pb-5 md:px-[15%]"
  >
    <section>
      <h1
        class="font-bold mb-2 max-[375px]:mb-0 text-[26px] md:text-[34px] text-marine-blue"
      >
        <slot name="title"></slot>
      </h1>
      <p><slot name="description"></slot></p>
    </section>

    <section class="mt-8 max-[375px]:mt-6 md:mt-10">
      <slot name="main"></slot>
    </section>
  </div>
</template>
