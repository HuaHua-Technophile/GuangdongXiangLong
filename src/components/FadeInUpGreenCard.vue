<template>
  <UseElementVisibility
    v-slot="{ isVisible }"
    class="FadeInUpGreenCard transition750 mt-5">
    <!-- 基础圆角造型,backdrop-filter: blur如果父元素animate__animated就无法生效 原因不明 -->
    <div
      class="text-center rounded-5 overflow-hidden bg-xlxl bg-opacity-50 shadow text-white d-flex flex-column transition750 animate__animated animate__delay_faster"
      :class="[
        { animate__fadeInUp: isVisible },
        'animate__delay-' + (props.index % 3) + 's',
      ]"
      :style="{ height: `${props.height}rem`, width: `${props.width}rem` }"
      style="backdrop-filter: blur(10px)">
      <!-- 如果是普通卡片 -->
      <template v-if="props.content">
        <i
          class="BigIcon"
          :class="['iconfont transition750', props.icon]"
          style="font-size: 5.5rem"></i>
        <div class="fs-2 transition750">{{ props.title }}</div>
        <span class="opacity-75 h-100 px-4 d-flex align-items-center">
          {{ props.content }}
        </span>
      </template>
      <!-- 如果是跳转卡片 -->
      <template v-else>
        <!-- 背景图 -->
        <img
          loading="lazy"
          v-lazy="`/images/${props.bg}`"
          class="w-100 h-100 opacity-25 transition750 JumpCardBg position-absolute object-fit-cover"
          style="z-index: -1; object-position: center" />
        <RouterLink
          :to="props.to"
          class="position-relative d-flex h-100 flex-column justify-content-between text-white text-decoration-none"
          style="z-index: 2">
          <div class="d-flex justify-content-end">
            <i
              :class="props.icon"
              class="JumpCardIcon transition750 lh-1 p-3"
              style="
                font-size: 5.5rem;
                border-radius: 0 var(--bs-border-radius-xxl) 0
                  var(--bs-border-radius-xxl);
              "></i>
          </div>
          <div
            class="fs-2 ms-4 pb-3 d-flex align-items-center"
            style="text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5) !important">
            {{ props.title }}
            <i
              class="bi bi-arrow-right fs-1 ms-5 animate__animated animate__slideInLeft animate__infinite animate__slow"></i>
          </div>
        </RouterLink>
      </template>
    </div>
  </UseElementVisibility>
</template>
<script lang="ts" setup>
import { UseElementVisibility } from "@vueuse/components";

const props = withDefaults(
  defineProps<{
    height?: number;
    width?: number;
    index?: number;
    title: string;
    icon: string;
    content: string;
    to: string;
    bg?: string;
  }>(),
  {
    height: 22,
    width: 22,
    index: 0,
  }
);
</script>
<style lang="scss" scoped>
.animate__delay_faster {
  --animate-delay: 300ms;
}
.FadeInUpGreenCard:hover {
  transform: scale(1.04);
  > div {
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.75) !important;
    --bs-bg-opacity: 0.8 !important;
    > div {
      text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    }
  }
  .BigIcon {
    font-size: 6rem !important;
    text-shadow: 0 0 25px black;
  }
  .JumpCardIcon {
    background: rgba(var(--bs-xlxl-rgb), 0.75);
  }
  .JumpCardBg {
    opacity: 1 !important;
  }
}
</style>
