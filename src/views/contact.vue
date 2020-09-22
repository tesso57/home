<template>
  <div class="main-content">
    <hero msg="Contact" />
    <p class="body">連絡は、メールかtwitterまで</p>
    <div class="link-box">
      <ul>
        <li>
          <a href="https://twitter.com/tesso38545202">
            <img
              class="icon"
              src="../assets/Twitter_Social_Icon_Circle_Color.svg"
            />
          </a>
          <a class="body" href="https://twitter.com/tesso38545202"
            >twitter : @tesso38545202</a
          >
        </li>
        <li>
            <svg class="icon mail">
              <use xlink:href="../assets/mail.svg#Capa_1"></use>
            </svg>
          <p class="body">mail : tesso1729</p>
          <img class="at" src="../assets/at.svg" />
          <p class="body">gmail.com</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import hero from "@/components/hero.vue";
export default defineComponent({
  name: "contact",
  components: { hero },
  props: {}
});
</script>
<style scoped>
.main-content {
  text-align: center;
  margin: 50px auto 0;
  display: block;
}

.body {
  font-family: "Noto Sans JP", sans-serif;
  font-size: 14px;
  margin: auto 0 auto;
  height: auto;
}

li {
  list-style: none;
  display: flex;
  width: 50%;
  margin: 24px auto 0;
}
a {
  text-decoration: none;
  height: 40px;
}
a:link {
  color: #3a3a3a;
}
a:visited {
  color: #3a3a3a;
}
a:hover {
  color: #00acee;
}

.icon {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin: auto 50px auto;
}

.mail {
  border-radius: 0;
  fill: #e7981c;
}

.at {
  width: 12px;
  height: 12px;
  margin: auto 0 auto;
}

.link-box {
  margin-top: 80px;
}
</style>
