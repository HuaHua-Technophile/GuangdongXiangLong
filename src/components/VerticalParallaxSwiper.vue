<template>
  <swiper-container
    ref="swiperOut"
    :pagination="true"
    :pagination-type="'progressbar'"
    :dragSize="10"
    :speed="1500"
    :direction="'vertical'"
    :mousewheel="true"
    :grab-cursor="true"
    :keyboard="true"
    :parallax="true"
    :init="false"
    @swiperslidechange="props.onSlideChange"
    class="swiperOut vw-100 vh-100">
    <!-- swiper背景图，absolute绝对定位后才能适配parallax视差 -->
    <div
      slot="container-start"
      data-swiper-parallax="-50%"
      class="position-absolute vw-100"
      style="
        height: 200%;
        background: url(../../src/assets/image/bg1.webp) center;
        background-size: cover;
      "></div>
    <!-- 插槽 -->
    <slot></slot>
  </swiper-container>
</template>
<script lang="ts" setup>
  import type { SwiperContainer } from "swiper/element";
  import { onMounted, ref } from "vue";

  const emit = defineEmits<{
    changeSwiperEl: [swiperOut: SwiperContainer];
  }>();

  // 延迟DOM加载后实例化------------
  const swiperOut = ref<SwiperContainer>();
  onMounted(() => {
    Object.assign(swiperOut.value!, {
      injectStyles: [
        `:host {
          --swiper-theme-color: var(--bs-xlxl);
        }
        .swiper-vertical>.swiper-pagination-progressbar{
          --swiper-pagination-progressbar-size:5px;
          left:calc(100% - var(--swiper-pagination-progressbar-size, 4px));
        }
        `,
      ],
    });
    swiperOut.value?.initialize();
    emit("changeSwiperEl", swiperOut.value!);
  });

  // 滑动事件-----------------
  const props = defineProps<{
    onSlideChange: Function;
  }>();
</script>
