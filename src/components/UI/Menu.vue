<template>
  <div class="menu">
    <list />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import List from "./List";

export default defineComponent({
  name: "Menu",
  components: {
    List
  }
});
</script>

<style scoped>
.menu {
  position: static;
  height: 100%;
  width: 286px;
  background: #eedba6;
  margin: 0;
  padding: 0;
}
</style>
