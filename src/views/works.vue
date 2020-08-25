<template>
  <div class="main-content">
    <hero msg="Works" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import hero from "@/components/hero.vue";

export default defineComponent({
  name: "works",
  components: { hero }
});
</script>
<style scoped>
.main-content {
  text-align: center;
  margin: 50px auto 0;
  display: block;
}
</style>
