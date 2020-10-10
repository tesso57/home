<template>
  <transition>
    <div class="modal-overlay" @click.self="$emit('close')">
      <div class="modal-window">
        <div class="modal-content">
          <slot name="body"/>
        </div>
        <footer class="modal-footer">
          <slot name="footer"/>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import {defineComponent} from"vue";


export default defineComponent({
  name:"Modal"
})

</script>

<style lang="scss" scoped>
@import "../assets/scss/common";

.modal-overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.modal-window {
  background: $color-primary;
  border-radius: 4px;
  overflow: hidden;
}

.modal-content {
  padding: 10px 20px;
}

.modal-footer {
  background: $color-background;
  text-align: right;
}
</style>