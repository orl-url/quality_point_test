<script setup>
import {ref} from "vue";

const uploadInput = ref()
const emits = defineEmits(['addData'])

function openUploadWindow() {
  uploadInput.value.click()
}

</script>

<template>
  <button class="upload-btn" @click="openUploadWindow">
    Upload excel doc
  </button>

  <input
      ref="uploadInput"
      class="upload-input"
      type="file"
      @change="emits('addData', uploadInput.files[0]) "
  >
</template>

<style scoped>
.upload-btn {
  width: 200px;
  height: 40px;

  border-radius: 10px;
  border: 1px solid black;

  background-color: green;
}

.upload-input {
  display: none;
}
</style>