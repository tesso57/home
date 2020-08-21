<template>
  <!--  <button @click="onClick">{{ buttonName }}</button>-->
  <div>
    <h2>{{ state.greet }}</h2>
    <h2>{{ greetref }}</h2>
    <button @click="onClick">おして</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";

type Props = {
  message: string;
};

export default defineComponent({
  name: "Mybutton",
  props: {
    message: {
      type: String,
      default: "default Value"
    }
  },
  setup(props: Props) {
    props.message;
    const state = reactive<{ greet: string }>({
      greet: "Hello World"
    });
    const greetref = ref<string>("こんにちは");
    const onClick = () => {
      alert(state.greet);
      // props.buttonName = "こんにちは世界";
    };

    return { state, greetref, onClick };
  }
});
</script>

<style scoped></style>
