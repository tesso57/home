<template>
  <!--  <Menu />-->
  <div class="main-content">
    <div>
      {{ title }} <!--そのうち線を引く-->
    </div>
    ここにものが来る
    <div>
      <img src="../assets/logo.png" /> <!--アイコンの代わり-->
    </div>
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
.main-content {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  display: block;
}
</style>
