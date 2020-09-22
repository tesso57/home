<template>
  <nav :class="$style.menu" :width="width">
    <list :class="$style.list"/>
  </nav>
</template>

<script lang="ts">
import {defineComponent} from "vue";
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
  background: $color-secondary;
}

.list {
  margin-top: 20%;
}
</style>
