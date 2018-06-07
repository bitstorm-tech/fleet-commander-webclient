<template>
  <div class="root">
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
        <input placeholder="Username" v-model="username"/>
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
          Greetings {{username}},
          <br> you should have received an e-mail with a confirmation code. Enter your username and the confirmation
          code in here.
          If you have not received this e-mail, you have either entered a wrong e-mail address in the account creation
          or you can
          get a new confirmation code by entering your username and click the 'Resend Code' button below.
        </div>
        <input placeholder="Username" v-model="username">
        <input placeholder="Verification Code" v-model="confirmationCode">
        <button :disabled="!canConfirm()" @click="confirm()">Confirm</button>
        <!--<button @click="resendConfirmationCode()">Resend Code</button>-->
        <button @click="state = LoginState.LOGIN">Cancel</button>
      </div>
    </transition>

    <!-- Error Message Section -->
    <p class="error-msg font-big">{{errorMessage}}</p>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import MessageService from '@/shared/message-service';

  @Component
  export default class Login extends Vue {
    state = 1;
    username = '';
    password = '';
    passwordRepeat = '';
    email = '';
    confirmationCode = '';

    LoginState = {
      LOGIN: 1,
      CREATE: 2,
      CONFIRM: 3
    };

    isValid() {
      return true;
    }

    canSignIn() {
      return this.email.length > 0 && this.password.length > 0;
    }

    canSignUp() {
      return (
        this.username.length > 0 &&
        this.email.length > 0 &&
        this.password.length > 0 &&
        this.password === this.passwordRepeat
      );
    }

    canConfirm() {
      return this.username.length > 0 && this.confirmationCode.length > 0;
    }

    signIn() {
      if (this.canSignIn()) {
        MessageService.sendSignIn(this.email, this.password);
      }
    }

    signUp() {
      if (this.canSignUp()) {
        MessageService.sendSignUp(this.username, this.email, this.password);
      }
    }

    beforeRouteEnter(to: any, from: any, next: any) {
      if (MessageService.isConnected()) {
        next('overview');
      } else {
        next();
      }
    }

    get errorMessage() {
      return this.$store.state.errorText;
    }
  }
</script>

<style scoped lang="scss">
  $transition-time: 0.3s;
  $transition-effect: linear;

  .root {
    display: flex;
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

  .error-msg {
    position: absolute;
    top: calc(50% + 230px);
    left: calc(50% - 230px);
    width: 400px;
    margin: 0;
    color: red;
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
