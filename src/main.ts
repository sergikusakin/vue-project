import { createApp } from "vue";
import App from "./App.vue";
import Router from "./router/router";
import VIntersection from "./directives/VIntersection";
import directives from "./directives";

import components from "@/components/UI";

console.log(components);

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

directives.forEach((directive) => {
  app.directive(directive.name, directive);
});

// app.directive("intersection", VIntersection);

app.use(Router).mount("#app");
