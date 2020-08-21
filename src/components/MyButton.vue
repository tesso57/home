<template>
  <button>{{ buttonName }}</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Mybutton",
  props: {
    buttonName: String
  }
});
</script>

<style scoped></style>
