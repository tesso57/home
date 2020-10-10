<template>
  <transition>
    <div class="modal-overlay" @click.self="$emit('close')">
      <div class="modal-window">
        <div class="modal-content">
          <div class="modal-body">
            <img src="../assets/works/HOME.png" alt="画像" />
          </div>
          <div class="modal-footer">
            <div class="modal-title">
              自己紹介ページ
            </div>
            <div class="modal-date">
              2020/10/10
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import {defineComponent} from "vue";


export default defineComponent({
  name: "Modal"
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
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}

.modal-window {
  background: $color-primary;
  border-radius: 20px;
  overflow: hidden;
  max-width: 50%;
}
.modal-content {
  background: $color-background;
  margin: 20px 0 20px 0;
}

.modal-body {
  width: 100%;
}

.modal-footer {
  font-weight: bold;
  text-align: left;
}

.modal-title {
  font-size: 32px;
  padding: 10px;
}

.modal-date {
  font-size: 22px;
  padding: 10px;
}

img {
  width: inherit;
  height: inherit;
  object-fit: cover;
  border-bottom: 2px solid black;
}
</style>