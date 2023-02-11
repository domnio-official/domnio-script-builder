/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

// import { BootstrapVue } from 'bootstrap-vue';
import "bootstrap-vue/dist/bootstrap-vue.css"
import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
/*import VueToast from 'vue-toast-notification';
import VueTour from 'vue-tour'; */

const app = createApp(App);

app.use(VueSweetalert2);

app.mount("#app");

/* import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vue-toast-notification/dist/theme-default.css';
import 'vue-tour/dist/vue-tour.css'; */