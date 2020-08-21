<template>
  <ul class="menu">
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

<style scoped>
.menu {
  margin: 0;
  padding: 0;
  background: #e7981c;
  color: #3a3a3a;
  height: 100%;
  width: 286px;
  white-space: nowrap;
  position: absolute;
  overflow: hidden;
}

</style>
