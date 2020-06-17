import Vue from "vue";
import { VuePlugin } from "vuera";
import App from "./App.vue";
import router from "./router";

Vue.use(VuePlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
