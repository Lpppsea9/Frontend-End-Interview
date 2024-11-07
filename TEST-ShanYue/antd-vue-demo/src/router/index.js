import { createWebHashHistory, createRouter } from "vue-router";

import App from "../App.vue";
import Parent from "../components/Partent.vue";
import AntdVue from "../components/AntdVue.vue";

const routes = [
	{ path: "/", component: App },
	{ path: "/parent", component: Parent },
	{ path: "/antd", component: AntdVue },
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
