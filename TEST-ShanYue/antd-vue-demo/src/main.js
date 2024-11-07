import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "ant-design-vue/dist/reset.css";
import router from "./router";

createApp(App).use(router).mount("#app");