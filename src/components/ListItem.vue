<template>
  <li :class="$style.list">
    <div @click="onClick" :class="$style.item" :data-is-selected="isSelected">
      {{ name }}
    </div>
  </li>
</template>

<script lang="ts">
import {defineComponent, computed} from "vue";
import {useRoute, useRouter} from "vue-router";

export default defineComponent({
  name: "ListItem",
  props: {
    name: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const router = useRouter();
    const route = useRoute();

    const isSelected = computed(() => route.path === props.path);
    const onClick = () => {
      router.push(props.path);
    };

    return {isSelected, onClick};
  }
});
</script>

<style lang="scss" module>
@import "../assets/scss/common";

.item {
  width: 50%;
  margin-left: 45%;
  font-family: "Do Hyeon", sans-serif;
  text-align: right;

  padding-right: 5%;
  padding-top: 10px;
  padding-bottom: 10px;

  cursor: pointer;
  border: none;
  border-radius: 50px 0 0 50px/100% 0 0 100%;

  font-size: $fontsize-Display1;

  &[data-is-selected='true'] {
    font-size: $fontsize-Display1;
    background: $color-primary;
  }
}

.item:hover {
  &[data-is-selected='false'] {
    background: $color-hoverBackground;
    font-size: $fontsize-Display1;
  }
}

.list {
  height: 8rem;
}
</style>
