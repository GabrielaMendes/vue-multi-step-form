<template>
  <div
    class="h-fit flex flex-col p-4 max-[375px]:p-3 md:px-[15%] md:pb-5 md:pt-10"
  >
    <section>
      <h1
        class="mb-2 text-[26px] font-bold text-marine-blue max-[375px]:mb-0 md:text-[34px]"
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
