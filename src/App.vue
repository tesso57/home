<!--全体の整形-->

<template>
  <div class="container">
    <Menu class="navigation" />
    <main class="content"><router-view /></main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Menu from "@/components/Menu.vue";
export default defineComponent({
  name: "App",
  components: {
    Menu
  }
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Do+Hyeon&family=Noto+Sans+JP:wght@400;700&display=swap");

html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}

.container {
  display: grid;
  height: 100%;
  width: 100%;

  color: #3a3a3a;

  grid-template-areas: "nav content";
  grid-template-columns: 286px 1fr;
}

.navigation {
  grid-area: nav;
}

.content {
  height: 100%;
  grid-area: content;
  overflow-x: hidden;
  overflow-y: scroll; /*下手な空白をいれない*/
}

#app {
  height: 100%;
}
</style>
