import Vue from "vue"
import App from "@/App.vue"
import router from "@/router"
import store from "@/store"
import axios from "axios"
import { ResourcesManager } from "@/shared/services/resources-manager"

Vue.config.productionTip = false

axios.defaults.baseURL = "http://localhost:8080"

new Vue({
	router,
	store,
	render: (h) => h(App)
}).$mount("#app")

ResourcesManager.init(store, 2)
ResourcesManager.startCounting()
