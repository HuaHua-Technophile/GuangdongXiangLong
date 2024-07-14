<template>
  <swiper-slide
    class="h-auto mx-auto d-flex align-items-center"
    :class="{ 'flex-row-reverse': props.index % 2 == 1 }"
    style="max-width: var(--content-max-width); padding-top: 4rem">
    <!-- 文案 -->
    <div
      class="textCard d-flex flex-column"
      :class="[props.index % 2 == 1 ? 'align-items-end ms-5' : ' me-5']">
      <div class="title fs-1 fw-bold text-xlxl transition1000">
        {{ props.title }}
      </div>
      <!-- 分割线 -->
      <div
        class="divider mt-2 mb-5 bg-xlxl transition1000"
        style="width: 180px; height: 3px"></div>
      <!-- 内容 -->
      <div
        v-html="props.content"
        class="text-white fs-5"
        style="text-shadow: 0 0 5px black"
        data-swiper-parallax="-600"></div>
    </div>
    <!-- 插图 -->
    <img
      loading="lazy"
      v-lazy="`/images/${props.img}`"
      class="flex-shrink-0 shadow rounded-4 img transition1000 object-fit-cover"
      style="width: 500px; height: 350px; object-position: center" />
  </swiper-slide>
</template>
<script lang="ts" setup>
  const props = withDefaults(
    defineProps<{
      index: number;
      title: string;
      content: string;
      img: string;
    }>(),
    {}
  );
</script>
<style lang="scss" scoped>
  .textCard:hover {
    .title {
      font-size: 2.6rem !important;
      text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
    }
    .divider {
      width: 300px !important;
    }
  }
  .img:hover {
    transform: scale(1.03);
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4) !important;
  }
</style>
