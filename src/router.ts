import Login from "@/components/Login.vue"
import { messageService } from "@/main"
import Vue from "vue"
import Router from "vue-router"
import Main from "@/components/Main.vue"

Vue.use(Router)

export default new Router({
	routes: [
		{path: "", component: Login},
		{path: "/main", component: Main, beforeEnter: checkAuthentication},
		{path: "*", redirect: "/"}
	]
})

function checkAuthentication(to: any, from: any, next: any) {
	if (messageService.isConnected()) {
		next()
	} else {
		next("/")
	}
}
