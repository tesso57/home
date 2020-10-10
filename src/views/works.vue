<template>
  <div class="main-content">
    <hero msg="Works"/>
    <button @click="openModal"> ここを押すとモーダルウィンドウが現れる</button>
    <Modal @close="closeModal" v-if="modal">
      <template v-slot:body>
        <p>Vue.js Modal Window</p>
      </template>
      <template v-slot:footer>
        <p>footer</p>
      </template>
    </Modal>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import hero from "@/components/hero.vue";
import Modal from "@/components/Modal.vue";


type Props = {
}

export default defineComponent({
  name: "works",
  components: {
    hero,
    Modal
  },
  props: {
  },
  setup(props: Props) {
    const modal = ref<boolean>(false);
    const openModal = () => {
      modal.value = true;
    }
    const closeModal = () => {
      modal.value = false;
    }
    return {openModal,closeModal,modal}
  }
});
</script>
<style scoped>
.main-content {
  text-align: center;
  margin: 50px auto 0;
  display: block;
}
</style>
