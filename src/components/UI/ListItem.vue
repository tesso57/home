<template>
  <li @click="onClick">
    <div class="item">{{ name }}</div>
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

<style scoped>
li {
  margin: 0;
  padding-left: 36px;
  list-style: none;
}
.item {
  font-size: 34px;
  cursor: pointer;
  text-align: right;
  padding-right: 20px;
  border: none;
  border-radius: 50px 0 0 50px/100% 0 0 100%;
}
.item:hover {
  background: rgba(103, 56, 103, 0.99);
}
</style>
