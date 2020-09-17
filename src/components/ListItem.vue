<template>
  <li @click="onClick">
    <div v-show="isSelected" :class="[$style.item_share, $style.item_selected]">
      {{ name }}
    </div>
    <div v-show="!isSelected" :class="[$style.item_share, $style.item]">
      {{ name }}
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRoute, useRouter } from "vue-router";

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

    return { isSelected, onClick };
  }
});
</script>

<style lang="scss" module>
@import "../assets/scss/common";
.item_share {
  width: 60%;
  margin-left: 35%;
  font-family: "Do Hyeon", sans-serif;
  text-align: right;

  padding-right: 5%;
  padding-top: 10px;
  padding-bottom: 10px;

  cursor: pointer;
  border: none;
  border-radius: 80px 0 0 80px/100% 0 0 100%;
}

.item {
  font-size: $fontsize-Display1;
}

.item_selected {
  font-size: $fontsize-Display2;
  background: $color-primary;
}

.item:hover {
  background: $color-hoverBackground;
  font-size: $fontsize-Display2;
}
</style>
