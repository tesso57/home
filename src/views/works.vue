<template>
  <div class="main-content">
    <div>
      <span class="title">
        Works
      </span>
      <!--そのうち線を引く-->
    </div>
    ここにものが来る
    <div>
      <!--      <img src="../assets/logo.png" />-->
      <!--アイコンの代わり-->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "works",
  components: {},
  props: {}
});
</script>
<style scoped>
.main-content {
  text-align: center;
  margin: 50px auto 0;
  display: block;
}

.title {
  font-family: "Do Hyeon", sans-serif;
  font-size: 45px;
  color: #e7981c;
  position: relative;
}

.title:after {
  background-color: #e7981c; /* 線色 */
  content: "";

  position: absolute;
  bottom: -5px;
  left: -10%;

  height: 8px; /* 線幅 */
  width: 120%;
  border-radius: 4px; /* 線幅の半分 */
}
</style>
