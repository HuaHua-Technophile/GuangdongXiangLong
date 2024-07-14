<template>
  <div
    class="d-inline-flex justify-content-center fw-bold FTFT"
    style="font-size: 6rem; height: 15rem; letter-spacing: 1rem">
    <RouterLink
      to="/Food_Flavoring"
      :class="{ active: props.food }"
      class="text-xlxl text-decoration-none border-3 h-100 d-flex align-items-center position-relative overflow-hidden border-end">
      <!-- 背景图 -->
      <img
        loading="lazy"
        v-lazy="`/images/Food_Flavoring/Food_Flavoring2.webp`"
        style="
          height: 80%;
          border-radius: 9999px;
          aspect-ratio: 1 / 1;
          z-index: -1;
          object-position: center;
        "
        class="position-absolute shadow transition1000 opacity-25 end-50 object-fit-cover" />
      <span
        class="transition1000 opacity-50 me-2"
        style="transform: translate(40%, 0); text-shadow: 0 0 5px white"
        >食用香精</span
      >
    </RouterLink>
    <RouterLink
      to="/Tobacco_Flavoring"
      :class="{ active: !props.food }"
      class="text-xlxl text-decoration-none border-3 h-100 d-flex align-items-center position-relative overflow-hidden border-start">
      <!-- 背景图 -->
      <img
        loading="lazy"
        v-lazy="`/images/outdoorLabs/outdoorLabs2.webp`"
        style="
          height: 80%;
          border-radius: 9999px;
          aspect-ratio: 1 / 1;
          z-index: -1;
          object-position: center;
        "
        class="position-absolute shadow transition1000 opacity-25 start-50 object-fit-cover" />
      <span
        class="transition1000 opacity-50 ms-3"
        style="transform: translate(-38%, 0); text-shadow: 0 0 5px white"
        >烟用香精</span
      >
    </RouterLink>
  </div>
</template>
<script lang="ts" setup>
  import { RouterLink } from "vue-router";

  const props = defineProps<{ food: boolean }>();
</script>
<style lang="scss" scoped>
  .FTFT {
    // 鼠标未进入元素内 按照默认active进行展示,移入后样式即被取消,由内层定义的hover取代
    &:not(:hover) .active {
      img {
        opacity: 1 !important;
      }
      span {
        transform: translate(0, 0) !important;
        opacity: 1 !important;
      }
    }
    > a:hover {
      img {
        opacity: 1 !important;
      }
      span {
        transform: translate(0, 0) !important;
        opacity: 1 !important;
      }
    }
  }
</style>
