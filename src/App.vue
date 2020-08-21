<!--全体の整形-->

<template>
  <div class="container">
    <Menu class="navigation" />
    <main class="content"><router-view /></main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Menu from "@/components/UI/Menu.vue";
export default defineComponent({
  name: "App",
  components: {
    Menu
  }
});
</script>

<style scoped>
.container {
  display: grid;
  height: 100%;
  width: 100%;

  grid-template-areas: "nav content";
  grid-template-rows: min-content 1fr;
  grid-template-columns: 286px 1fr;
}

.navigation {
  grid-area: nav;
}

.content {
  grid-area: content;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
