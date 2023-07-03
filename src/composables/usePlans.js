import { plans, addOns } from "@/data/plans";

export const usePlans = () => {
  const getPlanPrice = (planName, billingType) => {
    const selectedPlan = plans.find((plan) => plan.name === planName);
    return selectedPlan[billingType];
  };

  const getAddOnPrice = (addOnName, billingType) => {
    const selectedAddOn = addOns.find((addOn) => addOn.name === addOnName);
    return selectedAddOn[billingType];
  };
  
  return {
    plans,
    addOns,
    getPlanPrice,
    getAddOnPrice,
  };
};
