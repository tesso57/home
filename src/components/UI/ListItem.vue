<template>
  <li @click="onClick">
    <div v-show="isSelected" class="item-share item-selected">{{ name }}</div>
    <div v-show="!isSelected" class="item-share item">{{ name }}</div>
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
  padding-left: 76px;
  list-style: none;
  height: 20%;
}
.item-share {
  font-family: "Do Hyeon", sans-serif;
  color: #3a3a3a;
  text-align: right;

  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;

  cursor: pointer;
  border: none;
  border-radius: 80px 0 0 80px/100% 0 0 100%;
}

.item {
  font-size: 34px;
  color: #3a3a3a;
}
.item-selected {
  font-size: 45px;
  background: #e7981c;
}
.item:hover {
  background: #b39f78;
  font-size: 45px;
  //padding-right: 40px;
}
</style>
