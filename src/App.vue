<!--全体の整形-->
<template>
  <div :class="$style.container">
    <Menu :class="$style.navigation"/>
    <main :class="$style.content">
      <transition appear>
        <router-view/>
      </transition>
    </main>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Menu from "@/components/Menu.vue";

export default defineComponent({
  name: "App",
  components: {
    Menu
  }
});
</script>

<style lang="scss" module>
@import url("https://fonts.googleapis.com/css2?family=Do+Hyeon&family=Noto+Sans+JP:wght@400;700&display=swap");
@import "assets/scss/common";
.container {
  display: grid;
  height: 100%;
  width: 100%;
  color: $color-font;

  grid-template-areas: "nav content";
  grid-template-columns: 286px 1fr;
}

.navigation {
  grid-area: nav;
  overflow-y: hidden;
  overflow-x: hidden;
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
