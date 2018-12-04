<template>
	<div class="root">
		<fc-popup v-if="errorMessage.length > 0" @ok="clearErrorMessage()"
				  :message="'Sorry, login failed: ' + errorMessage" header="ERROR">
		</fc-popup>

		<!-- Sign In Dialog -->
		<transition>
			<div class="fc-panel" v-if="state === LoginState.LOGIN">
				<input placeholder="Email" v-model="email" :class="{'input-error' : !isValid()}"/>
				<input placeholder="Password" @keypress.enter="signIn()" type="password" v-model="password"
					   :class="{'input-error' : !isValid()}"/>
				<button @click="signIn()" :disabled="!canSignIn()">Sign in</button>
				<br>
				<br>
				<br>
				<a class="fc-link font-very-big" @click="state = LoginState.CREATE">No account? Sign up now!</a>
				<br>
				<br>
				<a class="fc-link font-big" @click="state = LoginState.CONFIRM">Confirm new account</a>
			</div>
		</transition>

		<!-- Sign Up Dialog -->
		<transition>
			<div class="fc-panel" v-if="state === LoginState.CREATE">
				<input placeholder="Name" v-model="name"/>
				<input placeholder="Email" type="email" v-model="email"/>
				<input placeholder="Password" type="password" v-model="password"/>
				<input placeholder="Confirm Password" type="password" v-model="passwordRepeat"/>
				<button :disabled="!canSignUp()" @click="signUp()">Create</button>
				<button @click="state = LoginState.LOGIN">Cancel</button>
			</div>
		</transition>

		<!-- Confirmation Dialog -->
		<transition>
			<div class="fc-panel" v-if="state === LoginState.CONFIRM">
				<div class="greetings font-big">
					Greetings {{name}},
					<br> you should have received an e-mail with a confirmation code. Enter your name and the
					confirmation code in here. If you have not received this e-mail, you have either entered a wrong
					e-mail address in the account creation or you can get a new confirmation code by entering your
					username and click the 'Resend Code' button below.
				</div>
				<input placeholder="Name" v-model="name">
				<input placeholder="Verification Code" v-model="confirmationCode">
				<button :disabled="!canConfirm()" @click="confirm()">Confirm</button>
				<!--<button @click="resendConfirmationCode()">Resend Code</button>-->
				<button @click="state = LoginState.LOGIN">Cancel</button>
			</div>
		</transition>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from "vue-property-decorator"
	import fcPopup from "@/components/Popup.vue"
	import { messageService } from "@/main"
	import { createSignInMessage, createSignUpMessage } from "@/shared/messages"

	@Component({
		components: {
			fcPopup
		}
	})
	export default class Login extends Vue {
		state = 1
		name = ""
		password = ""
		passwordRepeat = ""
		email = ""
		confirmationCode = ""

		LoginState = {
			LOGIN: 1,
			CREATE: 2,
			CONFIRM: 3
		}

		isValid() {
			return true
		}

		canSignIn() {
			return this.email.length > 0 && this.password.length > 0
		}

		canSignUp() {
			return (
				this.name.length > 0 &&
				this.email.length > 0 &&
				this.password.length > 0 &&
				this.password === this.passwordRepeat
			)
		}

		canConfirm() {
			return this.name.length > 0 && this.confirmationCode.length > 0
		}

		signIn() {
			if (this.canSignIn()) {
				const signInMessage = createSignInMessage(
					this.email,
					this.password
				)
				messageService.send(signInMessage)
			}
		}

		signUp() {
			if (this.canSignUp()) {
				const signUpMessage = createSignUpMessage(
					this.name,
					this.email,
					this.password
				)
				messageService.send(signUpMessage)
			}
		}

		get errorMessage() {
			return this.$store.state.errorMessage
		}

		clearErrorMessage() {
			this.$store.commit("updateErrorMessage", "")
		}
	}
</script>

<style scoped lang="scss">
	$transition-time: 0.3s;
	$transition-effect: linear;

	.root {
		display: flex;
		position: absolute;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;

		.fc-panel {
			display: flex;
			flex-direction: column;
			align-items: center;
			padding: 40px 25px 0;
			width: 400px;
			height: 400px;

			input {
				margin-bottom: 15px;
				width: 350px;
			}

			button {
				width: 200px;
				margin-bottom: 15px;
			}
		}
	}

	.greetings {
		margin-bottom: 15px;
	}

	.v-enter {
		opacity: 0;
	}

	.v-enter-active {
		transition: opacity $transition-time $transition-effect;
	}

	.v-leave-active {
		transition: opacity $transition-time $transition-effect;
		opacity: 0;
	}
</style>
