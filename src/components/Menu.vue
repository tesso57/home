<template>
  <nav :class="$style.menu">
    <list :class="$style.list"/>
  </nav>
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
  width: 286px;
  background: $color-secondary;
}
.list {
  margin-top: 20%;
}
</style>
