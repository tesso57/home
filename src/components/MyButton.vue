<template>
  <!--  <button @click="onClick">{{ buttonName }}</button>-->
  <div>
    <h2>{{ state.greet }}</h2>
    <button @click="changeMessage('引数')">おして</button>
    <button @click="onClick">alert</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, SetupContext } from "vue";

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
  setup(props: Props, context: SetupContext) {
    const state = reactive<{ greet: string }>({
      greet: "Hello World"
    });

    const changeMessage = (message: string) => {
      state.greet = message;
    };

    const onClick = () => {
      alert(state.greet);
      // props.buttonName = "こんにちは世界";
    };

    return {
      state,
      onClick,
      changeMessage
    };
  }
});
</script>

<style scoped></style>
