<template>
  <h1 class="app-title">Test Component 9</h1>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
export default defineComponent({
  name: "TestView",
});
</script>

<style lang="scss">
:root {
  --text-xxl: 20px;
}

.app-title {
  font-family: "Segoe UI", sans-serif;
  font-stretch: condensed;
  font-weight: 400;
  font-size: var(--text-xxl);
}
</style>
