<template>
  <div class="main-content">
    <hero msg="Works"/>
    <button @click="openModal"> ここを押すとモーダルウィンドウが現れる</button>
    <Modal @close="closeModal" v-if="modal"/>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import hero from "@/components/hero.vue";
import Modal from "@/components/Modal.vue";


type Props = {}

export default defineComponent({
  name: "works",
  components: {
    hero,
    Modal
  },
  props: {},
  setup(props: Props) {
    const modal = ref<boolean>(false);
    const openModal = () => {
      modal.value = true;
    }
    const closeModal = () => {
      modal.value = false;
    }
    return {openModal, closeModal, modal}
  }
});
</script>
<style lang="scss" scoped>
.main-content {
  text-align: center;
  margin: 50px auto 0;
  display: block;
}


</style>
