import { ref } from "vue";
import { defineStore } from "pinia";

export const usePlanStore = defineStore("plan", () => {
  const monthlyPlan = ref(true);

  const planTypeSelected = ref("arcade");

  const selectedAddOns = ref([]);

  return {
    monthlyPlan,
    planTypeSelected,
    selectedAddOns,
  };
});
