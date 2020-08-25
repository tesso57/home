<template>
  <div>
    <span class="hero">
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

<style scoped>
.hero {
  font-family: "Do Hyeon", sans-serif;
  font-size: 45px;
  color: #e7981c;
  position: relative;
}

.hero::after {
  transition: 1s ease-in-out;

  background-color: #e7981c; /* 線色 */
  content: "";

  position: absolute;
  bottom: -5px;
  left: -10%;
  height: 8px; /* 線幅 */
  width: 120%;
  border-radius: 4px; /* 線幅の半分 */
}
</style>
