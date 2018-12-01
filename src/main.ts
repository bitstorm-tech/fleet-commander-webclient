import Vue from "vue"
import axios from "axios"
import * as THREE from "three"
import { Camera, Mesh, Scene, WebGLRenderer } from "three"
import Login from "@/components/Login.vue"

Vue.config.productionTip = false

axios.defaults.baseURL = "http://localhost:8080"

// new Vue({
// 	router,
// 	store,
// 	render: (h) => h(App)
// }).$mount("#app")

// ResourcesManager.init(store, 2)
// ResourcesManager.startCounting()

let camera: Camera, renderer: WebGLRenderer, mesh: Mesh, scene: Scene

function init() {
	camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10)
	camera.position.z = 1

	scene = new THREE.Scene()
	const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2)
	const material = new THREE.MeshNormalMaterial()
	mesh = new THREE.Mesh(geometry, material)

	scene.add(mesh)

	renderer = new THREE.WebGLRenderer({antialias: true})
	renderer.setSize(window.innerWidth, window.innerHeight)
	document.body.appendChild(renderer.domElement)

	const login = new Login()
	login.$mount(document.body)
}

function animate() {
	requestAnimationFrame(animate)

	mesh.rotation.x += 0.01
	mesh.rotation.y += 0.02

	renderer.render(scene, camera)
}

init()
animate()
