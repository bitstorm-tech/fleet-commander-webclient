<template>
  <div id="root">
    <div class="fc-panel">
      <h1 v-if="header.length > 0">
        {{header}}
      </h1>
      <div v-if="message.length > 0" class="font-big">
        {{message}}
      </div>
      <div class="button-bar">
        <button @click="okClicked()">OK</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";

@Component
export default class Popup extends Vue {
  @Prop({ type: String, default: "" })
  header!: string;

  @Prop({ type: String, default: "" })
  message!: string;

  @Emit("ok")
  okClicked() {}
}
</script>

<style lang="scss" scoped>
@import "../styles.scss";

#root {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(100, 100, 100, 0.65);
}

.fc-panel {
  @include panel-background-color(1);
  padding: 10px;
}

.button-bar {
  display: flex;
  justify-content: flex-end;
  margin-top: 25px;
}
</style>
