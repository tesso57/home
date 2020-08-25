<template>
  <div class="main-content">
    <div>
      works
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
  name: "works",
  components: {},
  props: {}
});
</script>
<style scoped>
.main-content {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  display: block;
}
</style>
