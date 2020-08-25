<template>
  <ul>
    <list-item
      v-for="item in items"
      :key="item.name"
      :name="item.name"
      :path="item.path"
    />
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ListItem from "@/components/UI/ListItem.vue";

interface Item {
  name: string;
  path: string;
}
export default defineComponent({
  name: "List",
  components: {
    ListItem
  },
  setup() {
    const items: Item[] = [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Works", path: "/works" },
      { name: "Contact", path: "/contact" }
    ];
    return { items };
  }
});
</script>

<style scoped>
ul {
  height: 700px;
  margin: 100px 0 0 0;
  padding: 0;
}
</style>
