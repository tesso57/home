<template>
<!--  <Menu />-->
  <div class="contents">
    <p>{{ title }}</p>
    ここにものが来る
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "vue";
import Menu from "@/components/UI/Menu.vue";
type RouteName = "home" | "about" | "works" | "contact";

export default defineComponent({
  name: "Main",
  components: {
    // Menu
  },
  props: {
    type: {
      type: String as PropType<RouteName>,
      required: true
    }
  },
  setup(props) {
    const title = computed(() => {
      if (props.type === "home") return "HOME";
      if (props.type === "about") return "ABOUT";
      if (props.type === "works") return "WORKS";
      if (props.type === "contact") return "CONTACT";
      return "HOME";
    });
    return { title };
  }
});
</script>

<style scoped>
html,
body {
  padding: 0;
  margin: 0;
  height: 100%;
}
.contents {
  text-align: center;
}
</style>
