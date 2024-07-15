<template>
  <swiper-container
    ref="swiperOut"
    :pagination="true"
    :pagination-type="'progressbar'"
    :dragSize="10"
    :speed="1500"
    :direction="'vertical'"
    :grab-cursor="true"
    :keyboard="true"
    :mousewheel="true"
    :parallax="true"
    slides-per-view="auto"
    :init="false"
    @swiperslidechange="props.onSlideChange"
    class="swiperOut vw-100 vh-100">
    <!-- swiper背景图，absolute绝对定位后才能适配parallax视差 -->
    <div
      slot="container-start"
      :data-swiper-parallax="bgParallax"
      class="position-absolute vw-100"
      :style="{
        height: props.bgHeight,
      }">
      <img
        loading="lazy"
        v-lazy="`/images/${props.bg}`"
        class="w-100 h-100 position-absolute object-fit-cover"
        :style="{ filter: `brightness(${props.brightness})` }"
        style="z-index: -1; object-position: center" />
    </div>
    <!-- 插槽 -->
    <slot></slot>
    <!-- 页脚 -->
    <FootSlide />
  </swiper-container>
</template>
<script lang="ts" setup>
  import type { SwiperContainer } from "swiper/element";
  import { onMounted, ref } from "vue";
  // 滑动事件-----------------
  const props = withDefaults(
    defineProps<{
      onSlideChange?: Function;
      bg?: string;
      bgParallax?: string;
      bgHeight?: string;
      brightness?: number;
    }>(),
    {
      bg: "bg1.webp",
      bgParallax: "-50%",
      bgHeight: "210%",
    }
  );
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
</script>
