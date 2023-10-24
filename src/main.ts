import { createApp } from "vue";
import App from "./App.vue";

import Router from "./router/router";
import directives from "./directives";
import store from "./store";

import components from "@/components/UI";

console.log(components);

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

directives.forEach((directive) => {
  app.directive(directive.name, directive);
});

app.use(Router).use(store).mount("#app");
