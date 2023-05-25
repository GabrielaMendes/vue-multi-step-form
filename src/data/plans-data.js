export const plans = [
  {
    name: "arcade",
    icon: "src/assets/images/icon-arcade.svg",
    mo: 9,
    yr: 90,
  },
  {
    name: "advanced",
    icon: "src/assets/images/icon-advanced.svg",
    mo: 12,
    yr: 120,
  },
  {
    name: "pro",
    icon: "src/assets/images/icon-pro.svg",
    mo: 15,
    yr: 150,
  },
];

export const getPlanPrice = (planName, billingType) => {
  const selectedPlan = plans.find((plan) => plan.name === planName);
  return selectedPlan[billingType];
};

export const addOns = [
  {
    name: "Online service",
    description: "Access to multiplayer games",
    mo: 1,
    yr: 10,
  },
  {
    name: "Larger storage",
    description: "Extra 1TB of cloud save",
    mo: 2,
    yr: 20,
  },
  {
    name: "Customizable profile",
    description: "Custom theme on your phone",
    mo: 2,
    yr: 20,
  },
];

export const getAddOnPrice = (addOnName, billingType) => {
  const selectedAddOn = addOns.find((addOn) => addOn.name === addOnName);
  return selectedAddOn[billingType];
};
