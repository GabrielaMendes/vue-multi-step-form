import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import VeeValidatePlugin from "./plugins/validation";

const app = createApp(App);

app.use(createPinia());
app.use(VeeValidatePlugin);

app.mount("#app");
