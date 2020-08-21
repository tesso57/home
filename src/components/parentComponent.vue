<template>
  <div>
    <h1>{{ state.message }}</h1>
    <child-component
      :message="state.message"
      @change-message="changeMessage"
    ></child-component>
  </div>
</template>

<script lang="ts">
import childComponent from "@/components/childComponent.vue";
import { defineComponent, reactive } from "vue";
export default defineComponent({
  components: {
    childComponent
  },
  setup() {
    const state = reactive({
      message: "Hello"
    });

    const changeMessage = (message: string) => {
      state.message = message;
    };

    return {
      state,
      changeMessage
    };
  }
});
</script>

<style scoped></style>
