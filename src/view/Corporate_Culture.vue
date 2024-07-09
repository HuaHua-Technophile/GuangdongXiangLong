<template>
  <VerticalParallaxSwiper bg="bg1.webp">
    <swiper-slide
      class="vw-100 vh-100 d-flex align-items-center justify-content-center"
      style="
        padding: 0 8rem;
        background: url('../../src/assets/image/Corporate Culture1.webp') center;
        background-size: cover;
      ">
      <div
        :ref="(el) => removeClass.push(el)"
        class="Capitalized animate__animated animate__fadeInUp"
        style="font-family: cinzel; font-size: 4rem; text-shadow: 0 0 3px white"
        data-swiper-parallax="-600">
        <span>C</span>orporate<br /><span>C</span>ulture.
      </div>
      <div
        class="ms-2 position-relative h-100 d-flex align-items-center"
        style="width: 350px">
        <!-- 背景 -->
        <div
          :ref="(el) => removeClass.push(el)"
          class="position-absolute w-100 h-100 bg-xlxl bg-opacity-50 rounded-3 shadow animate__animated animate__fadeInUp animate__delay-2s"
          data-swiper-parallax="-3000"
          style="backdrop-filter: blur(10px)"></div>
        <div
          :ref="(el) => removeClass.push(el)"
          style="
            font-size: 2rem;
            text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
            z-index: 2;
          "
          class="position-relative text-white w-100 p-3 animate__animated animate__fadeInUp animate__delay-1s"
          data-swiper-parallax="-400">
          在香龙集团，我们深信企业文化是公司发展的基石。我们的企业文化不仅仅是一些口号或标语，而是贯穿于每个员工日常工作中的核心价值观和行为准则。
        </div>
      </div>
    </swiper-slide>
    <swiper-slide class="vw-100"> text </swiper-slide>
    <swiper-slide class="vw-100"> text </swiper-slide>
  </VerticalParallaxSwiper>
</template>
<script lang="ts" setup>
  import { onMounted, ref } from "vue";

  const text = ref([]);
  const removeClass = ref<any>([]);
  onMounted(() => {
    console.log(removeClass.value);
    setTimeout(() => {
      for (let item of removeClass.value) {
        item.classList.remove("animate__animated");
      }
    }, 2400);
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
