<template>
  <div class="main-content">
    <div>
      <span class="title">
        About
      </span>
      <!--そのうち線を引く-->
    </div>
    <div class="name">
      <img class="icon" src="../assets/tesso.jpg" />
      <div class="tesso">TESSO</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "about",
  components: {},
  props: {}
});
</script>
<style scoped>
.main-content {
  text-align: center;
  margin: 50px auto 0;
  display: block;
  animation: show 1.5s forwards;
}

.title {
  font-family: "Do Hyeon", sans-serif;
  font-size: 45px;
  color: #e7981c;
  position: relative;
}

.title::after {
  transition: 1s ease-in-out;

  background-color: #e7981c; /* 線色 */
  content: "";

  position: absolute;
  bottom: -5px;
  left: -10%;
  height: 8px; /* 線幅 */
  width: 120%;
  border-radius: 4px; /* 線幅の半分 */
}

.name {
  display: flex;
  justify-content: space-around;
  width: 50%;
  margin: 80px auto 0;
}

.icon {
  border-radius: 50%;
  width: 100px;
  height: 100px;
}

.tesso {
  margin: auto 0 auto 0;
  height: 100%;

  font-family: "Do Hyeon", sans-serif;
  font-size: 22px;
}

@keyframes show {
  0% {
    opacity: 10%;
  }
  100% {
    opacity: 100%;
  }
}
</style>
