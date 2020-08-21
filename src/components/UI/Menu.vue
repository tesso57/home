<template>
  <div class="container">
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
.container {
  height: 100%;
}
</style>
