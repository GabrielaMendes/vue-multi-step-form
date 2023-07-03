import { computed, ref } from "vue";
import { defineStore } from "pinia";
import { usePlans } from "../composables/usePlans";

const { getPlanPrice, getAddOnPrice } = usePlans();

export const usePlanStore = defineStore("plan", () => {
  const monthlyPlan = ref(true);
  const billingType = computed(() => (monthlyPlan.value ? "mo" : "yr"));

  const planTypeSelected = ref("arcade");

  const selectedAddOns = ref([]);

  const totalPrice = computed(() => {
    let total = 0;

    total += getPlanPrice(planTypeSelected.value, billingType.value);
    selectedAddOns.value.forEach((addOn) => {
      total += getAddOnPrice(addOn, billingType.value);
    });

    return total;
  });

  return {
    monthlyPlan,
    billingType,
    planTypeSelected,
    selectedAddOns,
    totalPrice,
  };
});
