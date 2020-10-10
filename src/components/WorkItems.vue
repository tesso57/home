<template>
  <div class="grid">
    <work-item v-for="item in items"
               :key="item.name"
               :src="item.src"
               :alt="item.alt"
               @click="openModal"/>
  </div>
  <Modal :name="items[0].name"
         :date="items[0].date"
         :url="items[0].url"
         :src="items[0].src"
         :alt="items[0].alt"
         @close="closeModal"
         v-if="modal"/>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import Modal from "@/components/Modal.vue";
import WorkItem from "@/components/WorkItem.vue";

interface Item {
  name: string;
  date: string;
  url: string;
  src: string;
  alt: string;
}

export default defineComponent({
  name: "WorkItems",
  components: {
    Modal,
    WorkItem
  },
  props: {}, setup() {
    const items: Item[] = [
      {
        name: "自己紹介サイト",
        date: "2020/10/10",
        url: "https://github.com/tesso57/home",
        src: "/img/HOME.png",
        alt: "自己紹介サイト"
      }
    ];
    const modal = ref<boolean>(false);
    const openModal = () => {
      modal.value = true;
    }
    const closeModal = () => {
      modal.value = false;
    }
    return {openModal, closeModal, modal, items}
  }
})

</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
</style>