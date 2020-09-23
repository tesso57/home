<template>
  <div id="nav-drawer">
    <input id="nav-input" type="checkbox" class="nav-unshown">
    <label id="nav-open" for="nav-input"><span></span></label>
    <label class="nav-unshown" id="nav-close" for="nav-input"></label>
    <div id="nav-content">
      <Menu/>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "vue";
import Menu from "@/components/Menu.vue";
export default defineComponent({
  name: "HanburgerMenu",
  components : {
    Menu
  }
})
</script>

<style lang="scss" scoped>
@import "src/assets/scss/common";
#nav-drawer {
  position: relative;
  margin-left: 5%;
  margin-top: 5%;
}

/*チェックボックス等は非表示に*/
.nav-unshown {
  display: none;
}

/*アイコンのスペース*/
#nav-open {
  display: inline-block;
  width: 60px;
  height: 44px;
  vertical-align: middle;
}

/*ハンバーガーアイコンをCSSだけで表現*/
#nav-open span, #nav-open span:before, #nav-open span:after {
  position: absolute;
  height: 5px; /*線の太さ*/
  width: 50px; /*長さ*/
  border-radius: 5px;
  background: $color-primary;
  display: block;
  content: '';
  cursor: pointer;
}

#nav-open span:before {
  bottom: -14px;
}

#nav-open span:after {
  bottom: -28px;
}

/*閉じる用の薄黒カバー*/
#nav-close {
  display: none; /*はじめは隠しておく*/
  position: fixed;
  z-index: 99;
  top: 0; /*全体に広がるように*/
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0;
  transition: .3s ease-in-out;
}

/*中身*/
#nav-content {
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 90%;
  max-width: 286px;
  height: 100%;
  transition: .3s ease-in-out;
  -webkit-transform: translateX(-105%);
  transform: translateX(-105%);
  padding: 0;
  margin: 0;
}


#nav-input:checked ~ #nav-close {
  display: block; /*カバーを表示*/
  opacity: .5;
}

#nav-input:checked ~ #nav-content {
  -webkit-transform: translateX(0%);
  transform: translateX(0%);
  box-shadow: 6px 0 25px rgba(0, 0, 0, .15);
}
</style>