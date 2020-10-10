<template>
  <transition>
    <div class="modal-overlay" @click.self="$emit('close')">
      <div class="modal-window">
        <div class="modal-content">
          <div class="modal-body">
            <img class="img" src="../assets/works/HOME.png" alt="画像"/>
          </div>
          <div class="modal-footer">
            <div class="modal-title">
              自己紹介ページ
            </div>
            <div class="modal-date">
              2020/10/10
            </div>
            <div class="modal-links">
              <a href="#"><img class="modal-icon" src="../assets/logo_symbol.svg" alt="note"/></a>
              <a href="#"><img class="modal-icon" src="../assets/GitHub-Mark-120px-plus.png" alt="github"/></a>
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

  display: grid;
  grid-template-areas:
      'title links'
      'date  links';
  grid-template-columns: 3fr 1fr;

}

.modal-title {
  grid-area: title;
  font-size: 22px;
  padding: 10px;
}

.modal-date {
  grid-area: date;
  font-size: 14px;
  padding: 10px;
}

.modal-links {
  grid-area: links;

  display: flex;
  justify-content: space-around;
  align-items: center;
}

.modal-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}


.img {
  width: inherit;
  height: inherit;
  object-fit: cover;
  border-bottom: 2px solid black;
}
</style>