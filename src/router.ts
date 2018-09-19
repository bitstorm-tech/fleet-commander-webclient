import Vue from "vue"
import Router from "vue-router"
import Login from "@/components/Login.vue"
import Overview from "@/components/Overview.vue"
import { MessageService } from "@/shared/services/message-service"

Vue.use(Router)

export default new Router({
	routes: [
		{path: "", component: Login},
		{path: "/overview", component: Overview, beforeEnter: checkAuthentication},
		{path: "*", redirect: "/"}
	]
})

function checkAuthentication(to: any, from: any, next: any) {
	if (MessageService.isConnected()) {
		next()
	} else {
		next("/")
	}
}
