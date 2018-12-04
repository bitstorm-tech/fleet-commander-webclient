import Vue from "vue"
import axios from "axios"
import * as THREE from "three"
import { Mesh, PerspectiveCamera, Scene, WebGLRenderer } from "three"
import store from "@/store"
import router from "@/router"
import App from "@/App.vue"
import { MessageServiceMock } from "@/shared/services/MessageServiceMock"
import { MessageService } from "@/shared/services/MessageService"

Vue.config.productionTip = false

axios.defaults.baseURL = "http://localhost:8080"

new Vue({
	router,
	store,
	render: (h) => h(App)
}).$mount("#app")

export const messageService: MessageService = new MessageServiceMock()

// ResourcesManager.init(store, 2)
// ResourcesManager.startCounting()

let camera: PerspectiveCamera, renderer: WebGLRenderer, mesh: Mesh, scene: Scene

function init() {
	const windowSize = getWindowSize()
	camera = new THREE.PerspectiveCamera(70, windowSize.width / windowSize.height, 0.01, 10)
	camera.position.z = 1

	scene = new THREE.Scene()
	const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2)
	const material = new THREE.MeshNormalMaterial()
	mesh = new THREE.Mesh(geometry, material)

	scene.add(mesh)


	renderer = new THREE.WebGLRenderer({antialias: true})
	renderer.setSize(windowSize.width, windowSize.height)
	document.body.appendChild(renderer.domElement)


	window.addEventListener("resize", () => {
		const windowSize = getWindowSize()
		renderer.setSize(windowSize.width, windowSize.height)
		camera.aspect = windowSize.width / windowSize.height
		camera.updateProjectionMatrix()
	})
}

function getWindowSize(): WindowSize {
	return {
		width: window.innerWidth,
		height: window.innerHeight
	}
}

interface WindowSize {
	width: number
	height: number
}

function animate() {
	requestAnimationFrame(animate)

	mesh.rotation.x += 0.01
	mesh.rotation.y += 0.02

	renderer.render(scene, camera)
}

init()
animate()
