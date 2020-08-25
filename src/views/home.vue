<template>
  <div class="main-content">
    <div>
      <img class="icon" src="../assets/tesso.jpg" />
      <!--アイコンの代わり-->
    </div>
    <div class="links">
      <img
        @click="clickTwitter"
        class="icon-small"
        src="../assets/Twitter_Social_Icon_Circle_Color.svg"
      />
      <img
        @click="clickGithub"
        class="icon-small"
        src="../assets/GitHub-Mark-120px-plus.png"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "home",
  components: {},
  setup() {
    const clickTwitter = () => {
      location.href = "https://twitter.com/home";
    };

    const clickGithub = () => {
      location.href = "https://github.com/tesso57";
    };
    return { clickTwitter, clickGithub };
  }
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

.links {
  margin-top: 300px;
}
</style>
