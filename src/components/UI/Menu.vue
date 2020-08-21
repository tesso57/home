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
  height: 100%;
  color: #3a3a3a;
  width: 286px;
  background: #e7981c;
  margin: 0;
  padding: 0;
}
</style>
