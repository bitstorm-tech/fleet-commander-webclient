<template>
  <div id="root" class="fc-panel">
    <button @click="signOut">Sign out</button>
  </div>
</template>

<script lang="ts">
import { UserService } from "@/shared/user-service";
import { Vue } from "vue-property-decorator";

export default class Menu extends Vue {
  signOut() {
    UserService.signOut();
    this.$router.push("/");
  }
}
</script>

<style scoped>
#root {
  display: flex;
  flex-direction: column;
  padding: 10px;
}
</style>
