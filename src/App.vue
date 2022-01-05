<!--全体の整形-->
<template>
  <div class="container" :width="width">
    <Menu class="navigation" />
    <main class="content">
      <HamburgerMenu v-show="width" />
      <transition appear>
        <router-view />
      </transition>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted, ref } from "vue";
import Menu from "@/components/Menu.vue";
import HamburgerMenu from "@/components/HamburgerMenu.vue";

export default defineComponent({
  name: "App",
  components: {
    Menu,
    HamburgerMenu,
  },
  setup() {
    const width = ref<boolean>(window.innerWidth < 950);
    const handleResize = () => {
      width.value = window.innerWidth < 950;
    };
    onMounted(() => window.addEventListener("resize", handleResize));
    onBeforeUnmount(() => window.removeEventListener("resize", handleResize));
    return { width };
  },
});
</script>

<style lang="scss" scoped>
@import "assets/scss/common";

.container {
  display: grid;
  height: 100%;
  width: 100%;
  min-width: 300px;
  color: $color-font;
  grid-template-areas: "nav content";
  grid-template-columns: 286px 1fr;

  &[width="true"] {
    grid-template-areas: "content";
    grid-template-columns: 100%;
    grid-template-rows: 100%;
  }
}

.navigation {
  grid-area: nav;
  overflow: auto;
}

.content {
  grid-area: content;
  overflow-x: hidden;
  overflow-y: scroll;
}

.v-enter-active {
  animation: show 1.5s;
}

@keyframes show {
  0% {
    opacity: 0.1;
  }
  100% {
    opacity: 1;
  }
}
</style>
