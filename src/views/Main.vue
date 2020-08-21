<template>
  <div>
    <p>HOME</p>
    <p>{{ title }}</p>
    <ul>
      <li><router-link to="/">HOME</router-link></li>
      <li><router-link to="/about">ABOUT</router-link></li>
      <li><router-link to="/works">WORKS</router-link></li>
      <li><router-link to="/contact">CONTACT</router-link></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "vue";

type RouteName = "home" | "about" | "works" | "contact";

export default defineComponent({
  name: "Main",
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

<style scoped></style>
