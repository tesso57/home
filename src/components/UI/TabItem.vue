<template>
  <button>{{ label }}</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TabItem",
  props: {
    label: String
  }
});
</script>

<style scoped></style>
