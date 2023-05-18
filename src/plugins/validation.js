import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure,
} from "vee-validate";
import {
  required,
  min,
  max,
  alpha_spaces as alphaSpaces,
  email,
} from "@vee-validate/rules";

export default {
  install(app) {
    app.component("VeeForm", VeeForm);
    app.component("VeeField", VeeField);
    app.component("ErrorMessage", ErrorMessage);

    defineRule("required", required);
    defineRule("min", min);
    defineRule("max", max);
    defineRule("alpha_spaces", alphaSpaces);
    defineRule("email", email);
    defineRule("phone", (value) =>
      /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]{8,14}$/g.test(value)
    );

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: "This field is required",
          min: "This field is too short",
          max: "This field is too long",
          alpha_spaces: "You must enter a valid name",
          email: "You must enter a valid email",
          phone: "You must enter a valid phone number",
        };

        const message = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : "Thid field is invalid.";

        return message;
      },

      // default values
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true,
    });
  },
};
