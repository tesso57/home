<template>
  <div class="main-content">
    <hero msg="Contact"/>

  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import hero from "@/components/hero.vue";
export default defineComponent({
  name: "contact",
  components: {hero},
  props: {}
});
</script>
<style scoped>
.main-content {
  text-align: center;
  margin: 50px auto 0;
  display: block;
  animation: show 1.5s forwards;
}

@keyframes show {
  0% {
    opacity: 10%;
  }
  100% {
    opacity: 100%;
  }
}
</style>
