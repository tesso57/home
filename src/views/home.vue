<template>
  <div class="main-content">
    <div>
      <img class="icon" src="../assets/tesso.jpg" />
      <!--アイコンの代わり-->
    </div>
    <div class="links">
      <a href="https://twitter.com/home">
        <img
          class="icon-small"
          src="../assets/Twitter_Social_Icon_Circle_Color.svg"
        />
      </a>

      <a href="https://github.com/tesso57">
        <img class="icon-small" src="../assets/GitHub-Mark-120px-plus.png" />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "home"
});
</script>

<style scoped>
.main-content {
  text-align: center;
  margin: 0 auto 0;
  display: block;
  height: 100%;
}

.icon {
  margin-top: 80px;
  border-radius: 50%;
  width: 200px;
  height: 200px;
}

.icon-small {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  cursor: pointer;
  margin: 50px;
}
.icon-small:hover {
  opacity: 0.5;
}

.links {
  margin-top: 300px;
}
</style>
