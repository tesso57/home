<template>
  <div class="main-content">
    <hero msg="About" />
    <div class="box name-box">
      <img class="icon" src="../assets/tesso.jpg" />
      <div class="tesso">TESSO</div>
    </div>
    <div class="box">
      <div class="title">
        Profile
      </div>
      <div class="body">
        <ul>
          <li>
            ハンドルネーム：TESSO(てっそ)
          </li>
          <li>
            誕生日：2001/09/12
          </li>
          <li>
            学歴：大学1年生
          </li>
        </ul>
      </div>
    </div>
    <div class="box">
      <div>
        <div class="title">About</div>
        <div class="body">
          <ul>
            <li>
              暗号理論が大好きな大学生。CTFやったり、ゲーム作ったりしてます。
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="box ">
      <div class="title">Links</div>
      <div class="links-box">
        <a href="https://twitter.com/tesso38545202"
          ><img
            class="link-icon"
            src="../assets/Twitter_Social_Icon_Circle_Color.svg"
        /></a>
        <a href="https://github.com/tesso57"
          ><img class="link-icon" src="../assets/GitHub-Mark-120px-plus.png"
        /></a>
        <a href="https://note.com/tesso57"
          ><img class="link-icon" src="../assets/logo_symbol.svg"
        /></a>
        <a href="https://qiita.com/tesso"
          ><img class="link-icon" src="../assets/qiita.png"
        /></a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import hero from "@/components/hero.vue";

export default defineComponent({
  name: "about",
  components: { hero },
  props: {}
});
</script>
<style scoped>
.box {
  width: 50%;
  margin: 80px auto 0;
}
.name-box {
  display: flex;
  justify-content: space-around;
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

.title {
  text-align: left;
  font-family: "Do Hyeon", sans-serif;
  font-size: 22px;
}

.body {
  font-family: "Noto Sans JP", sans-serif;
  font-size: 14px;
  text-align: left;
}

li {
  list-style: none;
  margin-top: 8px;
}

.links-box {
  display: flex;
  justify-content: space-around;

  margin-top: 20px;
}

.link-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.main-content {
  text-align: center;
  margin: 50px auto 0;
  display: block;
  animation: show 1.5s forwards;
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
