<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>{{ test }}</h1>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
// import { testString, TestView } from "rollup-link";
import { testString } from "@melenaos/vue-shopify";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
    // TestView,
  },
  setup() {
    var test = testString();
    return { test };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
