<template>
  <div>
    <span :class="$style.hero">
      {{ msg }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "hero",
  props: {
    msg: String
  }
});
</script>

<style lang="scss" module>
@import "../assets/scss/common";
.hero {
  font-family: "Do Hyeon", sans-serif;
  font-size: $fontsize-hero;
  color: $color-primary;
  position: relative;
}

.hero::after {
  background-color: $color-primary; /* 線色 */
  content: "";

  position: absolute;
  bottom: -5px;
  left: -10%;
  height: 8px; /* 線幅 */
  width: 120%;
  border-radius: 4px; /* 線幅の半分 */
}
</style>
