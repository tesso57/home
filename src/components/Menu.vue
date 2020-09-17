<template>
  <div :class="$style.menu">
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

<style lang="scss" module>
@import "../assets/scss/common";
.menu {
  position: static;
  width: 286px;
  background: $color-secondary;
}
</style>
