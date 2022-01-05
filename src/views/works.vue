<template>
  <div class="main-content">
    <hero msg="Works" />
    <WorkItems />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import hero from "@/components/hero.vue";
import WorkItems from "@/components/WorkItems.vue";

export default defineComponent({
  name: "works",
  components: {
    hero,
    WorkItems,
  },
});
</script>
<style lang="scss" scoped>
.main-content {
  text-align: center;
  margin: 50px auto 0;
  display: block;
}
</style>
