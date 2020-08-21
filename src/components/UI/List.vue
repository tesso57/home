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
      { name: "home", path: "/" },
      { name: "about", path: "/about" },
      { name: "works", path: "/works" },
      { name: "contact", path: "/contact" }
    ];
    return { items };
  }
});
</script>

<style scoped></style>
