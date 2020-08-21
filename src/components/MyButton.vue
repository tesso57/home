<template>
  <button @click="onClick">{{ buttonName }}</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Mybutton",
  props: {
    buttonName: String
  },
  setup(props) {
    const onClick = () => {
      alert(props.buttonName);
    };

    return { onClick };
  }
});
</script>

<style scoped></style>
