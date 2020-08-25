<template>
  <div class="main-content">
    <div class="title">
      Home
      <!--そのうち線を引く-->
    </div>
    ここにものが来る
    <div>
      <img src="../assets/logo.png" />
      <!--アイコンの代わり-->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "home",
  components: {},
  props: {}
});
</script>
<style scoped>
.main-content {
  text-align: center;
  margin: 20px auto 0;
  display: block;
}
.title {
  font-family: "Do Hyeon", sans-serif;
  font-size: 34px;
}
</style>
