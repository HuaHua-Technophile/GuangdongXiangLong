<template>
  <VerticalParallaxSwiper
    :onSlideChange="onSlideChange"
    @changeSwiperEl="changeSwiperEl">
    <swiper-slide class="vw-100">
      <!-- 首屏介绍 -->
      <div
        class="bg-white bg-opacity-50 position-absolute top-50 translate-middle-y rounded-4 shadow"
        style="
          width: 550px;
          max-height: calc(100vh - 50px);
          left: calc(66% - 275px);
          padding: 2.2vh 0;
        ">
        <!-- LOGO -->
        <div class="text-center">
          <img src="../assets/image/LOGO.webp" style="width: 150px" />
        </div>
        <!-- 文本 -->
        <div class="text-center lh-1" style="margin-top: 2.2vh">
          <div
            style="font-family: qlls; font-size: 3.9rem; letter-spacing: 13px">
            廣東香龍香料
          </div>
          <div
            style="
              font-family: cinzel;
              font-size: 1.8rem;
              word-spacing: 15px;
              margin-top: 1.2vh;
            "
            class="Capitalized">
            <span>F</span>RAGRANT <span>D</span>RAGON <span>C</span>O.
          </div>
          <div
            style="
              font-family: qlls;
              font-size: 2.8rem;
              letter-spacing: 10px;
              margin-top: 2.7vh;
            ">
            百年經營 萬分用心
          </div>
          <div
            style="
              font-family: MisansTC-Light;
              font-size: 1.3rem;
              margin-top: 4.2vh;
            ">
            <div style="margin-bottom: 4.2vh">專營產品及服務</div>
            <div style="line-height: 170%">
              煙用香精、食用香料、日化香料<br />植物提取、再造煙葉、研發銷售
            </div>
          </div>
          <div
            style="
              font-weight: lighter;
              line-height: 170%;
              width: 70%;
              margin-top: 4.2vh;
            "
            class="text-start mx-auto">
            <div>Specialized Products and Services:</div>
            <div style="margin-top: 2.2vh">
              Tobacco Flavors, Food Flavors, Daily Chemical Flavors Plant
              Extracts, Reconstituted Tobacco, Research and Sales
            </div>
          </div>
        </div>
      </div>
      <!-- 下拉箭头 -->
      <div
        class="DropdownArrow position-absolute bottom-0 start-50"
        @click="slideToNext">
        <span></span>
        <span></span>
      </div>
    </swiper-slide>
    <swiper-slide class="vw-100">slide2</swiper-slide>
    <swiper-slide class="vw-100">slide3</swiper-slide>
    <swiper-slide class="vw-100">slide4</swiper-slide>
  </VerticalParallaxSwiper>
</template>

<script lang="ts" setup>
  import { ref } from "vue";
  import type { SwiperContainer } from "swiper/element";
  import type { Swiper } from "swiper/types";

  // 接受实例化后的swiper
  const changeSwiperEl = (data: SwiperContainer) => {
    swiperOut.value = data;
  };

  const showHeader = defineModel<boolean>("showHeader");
  const onSlideChange = (e: CustomEvent<[Swiper]>) => {
    if (e.detail[0].activeIndex != 0) showHeader.value = true;
    else showHeader.value = false;
  };

  // 点击按钮跳转下一页
  const swiperOut = ref<SwiperContainer>();
  const slideToNext = () => {
    swiperOut.value?.swiper.slideNext();
  };
</script>

<style lang="scss" scoped>
  .Capitalized {
    span {
      font-size: 2.4rem;
    }
  }

  @keyframes scale1 {
    0% {
      transform: translateX(-50%) scale(1, 1);
    }
    100% {
      transform: translateX(-50%) scale(1.2, 1.2);
    }
  }
  @keyframes shadow1 {
    0% {
      box-shadow: 0 0 5px rgba(255, 255, 255, 1);
    }
    100% {
      box-shadow: 0 0 0 rgba(255, 255, 255, 1);
    }
  }
  .DropdownArrow {
    display: flex;
    animation: scale1 1s linear infinite alternate-reverse;
    > span {
      width: 35px;
      height: 5px;
      background: rgba(255, 255, 255, 0.75);
      border-radius: 999px;
      animation: shadow1 0.5s linear infinite alternate-reverse;
      &:first-child {
        transform-origin: right bottom;
        transform: rotate(30deg);
      }
      &:last-child {
        transform-origin: left bottom;
        transform: rotate(-30deg);
      }
    }
  }
</style>
