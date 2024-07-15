<template>
  <swiper-slide class="position-relative overflow-hidden">
    <!-- 背景 -->
    <swiper-container
      ref="swiperInside"
      :init="false"
      :loop="true"
      :loopedSlides="1"
      :keyboard="false"
      :mousewheel="false"
      :allowTouchMove="false"
      :autoplay-delay="3000"
      :autoplay-disable-on-interaction="false"
      :speed="8000"
      effect="creative"
      :creativeEffect="{
        prev: {
          opacity: 0.8,
          // scale: 1.2,
        },
        next: {
          opacity: 0,
          scale: 1.3,
        },
      }"
      class="position-absolute w-100 h-100 swiper-liner"
      style="z-index: 1">
      <swiper-slide v-for="j in props.bg">
        <img
          loading="lazy"
          v-lazy="`/images/${j}`"
          class="w-100 h-100 object-fit-cover"
          style="filter: brightness(0.4); object-position: center" />
      </swiper-slide>
    </swiper-container>
    <!-- 其他相关装饰 -->
    <UseElementVisibility
      v-slot="{ isVisible }"
      class="position-absolute w-100 h-100"
      style="z-index: 2">
      <div :class="{ AniStart: isVisible }">
        <!-- 左上角空心 -->
        <div class="decorative decorative-line position-absolute ani1"></div>
        <!-- 左上角三角形 -->
        <div
          class="decorative bg-xlxl position-absolute shadow ani2"
          style="
            width: var(--decorative-size);
            height: var(--decorative-size);
          "></div>
        <!-- 右上角四个三角形 -->
        <div
          class="decorative decorative-line position-absolute end-0 ani3"></div>
        <div
          class="decorative decorative-line position-absolute end-0 ani4"></div>
        <div
          class="decorative decorative-line position-absolute end-0 ani5"></div>
        <div
          class="decorative decorative-line position-absolute end-0 ani6"></div>
        <!-- 右下角不规则装饰 -->
        <svg
          width="350"
          height="175"
          xmlns="http://www.w3.org/2000/svg"
          version="2"
          class="position-absolute end-0 bottom-0 ani7">
          <path
            id="svg_1"
            d="m2.28498,174.78549c83,-67 87,-84 186.99999,-46c100,38 133.99999,36 159.99999,-123.99999c26,-159.99999 16,187.99999 15.71504,187.2145c0.28496,0.78549 -373.71502,-8.21451 -373,-9c-0.71502,0.78549 10.28498,-8.21451 10.28498,-8.21451z"
            fill="#006D3F" />
        </svg>
        <svg
          width="350"
          height="175"
          xmlns="http://www.w3.org/2000/svg"
          version="2"
          class="position-absolute bottom-0 end-0 ani8">
          <path
            id="svg_1"
            d="m2.28498,174.78549c83,-67 87,-84 186.99999,-46c100,38 133.99999,36 159.99999,-123.99999c26,-159.99999 16,187.99999 15.71504,187.2145c0.28496,0.78549 -373.71502,-8.21451 -373,-9c-0.71502,0.78549 10.28498,-8.21451 10.28498,-8.21451z"
            stroke-opacity="0.7"
            stroke="#ffffff"
            stroke-width="1.3"
            fill="#00000000" />
        </svg>
      </div>
    </UseElementVisibility>
    <!-- 内容 -->
    <div
      class="position-absolute w-100 h-100 d-flex align-items-center justify-content-center"
      style="z-index: 999; padding-top: 4rem">
      <div class="container" style="padding: 0 8rem">
        <div
          class="fs-4 text-white d-flex align-items-center text-uppercase"
          style="
            letter-spacing: 0.08rem;
            word-spacing: 0.12rem;
            font-family: 'Kumbh Sans';
            font-weight: 500;
            text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
          "
          data-swiper-parallax="-600">
          <div
            class="border rounded-5 me-2"
            style="height: 16px; width: 40px; --bs-border-width: 1.5px">
            <div
              class="bg-white h-100 rounded-5 float-end"
              style="width: 66.6%"></div>
          </div>
          {{ props.enTitle }}
        </div>
        <div
          class="text-white fw-bold mt-4"
          style="
            text-shadow: 1px 1px 4px black;
            font-size: 3.5rem;
            letter-spacing: 0.5rem;
          "
          data-swiper-parallax="-450">
          {{ props.title }}
        </div>
        <div
          class="text-white opacity-75 mt-4"
          style="font-size: 1.2rem; text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5)"
          data-swiper-parallax="-300">
          {{ props.content }}
        </div>
        <RouterLink
          to="/Corporate_Culture"
          class="rounded shadow text-white ps-4 pe-2 py-3 mt-5 text-decoration-none d-inline-flex align-items-center"
          style="
            background: linear-gradient(
              90deg,
              rgb(40, 149, 103),
              var(--bs-xlxl)
            );
            font-family: 'Kumbh Sans';
            font-weight: 600;
          "
          data-swiper-parallax="-150">
          Explore More
          <i
            class="bi bi-arrow-right fs-5 ms-4 animate__animated animate__slideInLeft animate__infinite"></i>
        </RouterLink>
      </div>
    </div>
  </swiper-slide>
</template>
<script lang="ts" setup>
  import { UseElementVisibility } from "@vueuse/components";
  import type { SwiperContainer } from "swiper/element";
  import { onUnmounted, ref } from "vue";

  const swiperInside = ref<SwiperContainer>();

  const props = defineProps<{
    enTitle: string;
    title: string;
    bg: string[];
    content: string;
  }>();

  // 暴露实例
  defineExpose({ swiperContainer: swiperInside });

  onUnmounted(() => {
    swiperInside.value?.swiper.destroy();
    swiperInside.value = undefined;
  });
</script>
<style lang="scss" scoped>
  .swiper-liner {
    -webkit-transition-timing-function: linear; /*之前是ease-out*/
    -moz-transition-timing-function: linear;
    -ms-transition-timing-function: linear;
    -o-transition-timing-function: linear;
    transition-timing-function: linear;
  }

  .decorative {
    --decorative-size: 350px;
  }
  .decorative-line {
    width: var(--decorative-size);
    height: var(--decorative-size);
    border: 2px solid rgba(255, 255, 255, 0.75);
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.5), inset 0 0 7px rgba(0, 0, 0, 0.5);
  }
  .ani1 {
    transform: translate(-50%, 20%) rotate(45deg);
  }
  @keyframes a1 {
    0% {
      transform: translate(-100%, 20%) rotate(45deg);
    }
  }
  .ani2 {
    transform: translate(-50%, 10%) rotate(45deg);
  }
  @keyframes a2 {
    0% {
      transform: translate(-100%, 20%) rotate(45deg);
    }
  }
  .ani3 {
    transform: translate(50%, -10%) rotate(45deg);
  }
  @keyframes a3 {
    0% {
      transform: translate(150%, -10%) rotate(45deg);
    }
  }
  .ani4 {
    transform: translate(60%, -10%) rotate(45deg);
  }
  @keyframes a4 {
    0% {
      transform: translate(150%, -10%) rotate(45deg);
    }
  }
  .ani5 {
    transform: translate(70%, -10%) rotate(45deg);
  }
  @keyframes a5 {
    0% {
      transform: translate(150%, -10%) rotate(45deg);
    }
  }
  .ani6 {
    transform: translate(80%, -10%) rotate(45deg);
  }
  @keyframes a6 {
    0% {
      transform: translate(150%, -10%) rotate(45deg);
    }
  }
  .ani7 {
    transform: translate(0, 0);
  }
  @keyframes a7 {
    0% {
      transform: translate(100%, 0);
    }
  }
  .ani8 {
    transform: rotate(-3deg) scale(1.2, 1.6) translate(-22px, -30px);
  }
  @keyframes a8 {
    0% {
      transform: rotate(-3deg) scale(1.2, 1.6) translate(100%, -30px);
    }
  }
  .AniStart {
    --delay: 500ms;
    --aniTime: 1500ms;
    .ani1 {
      animation: a1 var(--aniTime) both;
    }
    .ani2 {
      animation: a2 calc(var(--aniTime) + (var(--delay) * 2)) both;
      animation-delay: calc(var(--delay) * 3);
    }
    .ani3 {
      animation: a3 var(--aniTime) both;
    }
    .ani4 {
      animation: a4 var(--aniTime) both;
      animation-delay: var(--delay);
    }
    .ani5 {
      animation: a5 var(--aniTime) both;
      animation-delay: calc(var(--delay) * 2);
    }
    .ani6 {
      animation: a6 var(--aniTime) both;
      animation-delay: calc(var(--delay) * 3);
    }
    .ani7 {
      animation: a7 var(--aniTime) both;
      animation-delay: calc(var(--delay) * 1.5);
    }
    .ani8 {
      animation: a8 var(--aniTime) both;
      animation-delay: calc(var(--delay) * 3);
    }
  }
  .animate__slideInLeft {
    animation-direction: alternate-reverse !important;
  }
</style>
