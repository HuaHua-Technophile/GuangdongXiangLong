<template>
  <swiper-container
    ref="swiperInside"
    :init="false"
    :navigation="true"
    :pagination="true"
    :pagination-clickable="true"
    :keyboard="false"
    :centered-slides="true"
    :rewind="true"
    :slides-per-view="'auto'"
    :autoplay-delay="2500"
    :grid-rows="2"
    :space-between="10"
    class="flex-grow-1 h-100 w-100 overflow-hidden">
    <swiper-slide v-for="i in props.length" class="p-4" style="width: 26rem">
      <el-image
        loading="lazy"
        fit="cover"
        :src="props.thumbPathPrefix + i + props.thumbPathSuffix"
        class="w-100 h-100 FloatShadow transition750 rounded shadow"
        :preview-src-list="
          [...Array(16).keys()].map(
            (num) => props.origPathPrefix + (num + 1) + props.origPathSuffix
          )
        "
        :initial-index="i - 1"
        :preview-teleported="true" />
    </swiper-slide>
  </swiper-container>
</template>
<script lang="ts" setup>
  import { SwiperContainer } from "swiper/element";
  import { onMounted, ref } from "vue";

  const props = defineProps<{
    length: number;
    thumbPathPrefix: string;
    thumbPathSuffix: string;
    origPathPrefix: string;
    origPathSuffix: string;
  }>();

  const swiperInside = ref<SwiperContainer>();
  onMounted(() => {
    // swiper注入样式后延迟实例化
    Object.assign(swiperInside.value!, {
      injectStyles: [
        `:host {
          --swiper-theme-color: var(--bs-xlxl);
        }
        `,
      ],
    });
    swiperInside.value?.initialize();
  });
</script>
<style lang="scss" scoped>
  .FloatShadow:hover {
    transform: scale(1.04);
    box-shadow: 3px 3px 5px black;
  }
</style>
