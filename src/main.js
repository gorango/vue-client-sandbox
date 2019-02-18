import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

import "./styles/quasar.styl";
import iconSet from "quasar-framework/icons/mdi";
import "quasar-extras/animate";
import "quasar-extras/roboto-font";
import "quasar-extras/mdi";
import Quasar from "quasar";

Vue.use(Quasar, {
  config: {},
  iconSet: iconSet
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
