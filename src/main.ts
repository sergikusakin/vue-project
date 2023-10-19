import { createApp } from "vue";
import App from "./App.vue";
import Router from "./router/router";
import VIntersection from "./directives/VIntersection";

import components from "@/components/UI";

console.log(components);

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

app.directive("intersection", VIntersection);

app.use(Router).mount("#app");
