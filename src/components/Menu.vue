<template>
  <nav :class="$style.menu" :width="width">
    <list :class="$style.list"/>
  </nav>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import List from "./List.vue";

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
  height: 100%;
  width: 100%;
  box-shadow: 6px 0 25px rgba(0, 0, 0, .15);
}

.list {
  padding-top: 20%;
}
</style>
