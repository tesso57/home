<template>
  <div class="content">
    <img class="content" :src="src" :alt="alt"/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "WorkItem",
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
    }

  }
})
</script>

<style lang="scss" scoped>
.content {
  max-width: 400px;
  max-height: 300px;
  object-fit: cover;
  margin: 10px;
}
img {
  width: inherit;
  height: inherit;
  object-fit: cover;
  cursor: pointer;
}
</style>