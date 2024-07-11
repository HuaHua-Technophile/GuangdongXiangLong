<template>
  <swiper-slide
    class="vw-100 vh-100 d-flex align-items-center justify-content-center"
    :style="{
      background: 'url(../../src/assets/image/' + props.bg + ')',
    }"
    style="backgroude-position: center; background-size: cover">
    <!-- 左侧英文标题 -->
    <div
      :ref="(el) => removeClass.push(el)"
      class="Capitalized animate__animated animate__fadeInUp"
      style="font-family: cinzel; font-size: 4rem; text-shadow: 0 0 3px white"
      data-swiper-parallax="-600"
      v-html="props.title"></div>
    <!-- 绿色滚动背景 -->
    <div class="ms-3 h-100" style="--width: 380px">
      <div
        :ref="(el) => removeClass.push(el)"
        class="h-100 bg-xlxl bg-opacity-50 rounded-3 shadow position-absolute h-100 animate__animated animate__fadeInUp animate__delay-2s"
        style="width: var(--width); backdrop-filter: blur(10px)"
        data-swiper-parallax="-2500"></div>
      <!-- 右侧文案 -->
      <div
        :ref="(el) => removeClass.push(el)"
        class="text-white ps-4 pe-3 h-100 d-flex align-items-center animate__animated animate__fadeInUp animate__delay-1s"
        style="
          width: var(--width);
          font-size: 2rem;
          text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
          z-index: 2;
        "
        data-swiper-parallax="-400">
        {{ props.content }}
      </div>
    </div>
  </swiper-slide>
</template>

<script lang="ts" setup>
  import { onMounted, onUnmounted, ref } from "vue";

  const props = defineProps<{ content: string; title: string; bg?: string }>();

  const removeClass = ref<any>([]);
  let timeOut: number;
  onMounted(() => {
    timeOut = setTimeout(() => {
      for (let item of removeClass.value) {
        item.classList.remove("animate__animated");
      }
    }, 2400);
  });

  onUnmounted(() => {
    clearTimeout(timeOut);
  });
</script>
<style lang="scss" scoped>
  .Capitalized span {
    font-size: 5rem;
  }

  .animate__animated {
    --animate-delay: 600ms;
  }
</style>
