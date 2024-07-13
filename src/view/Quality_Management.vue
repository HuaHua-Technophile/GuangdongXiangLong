<template>
  <VerticalParallaxSwiper :mousewheel="true" :free-mode="false">
    <FirstSlide
      title="<span>Q</span>uality<br /><span>M</span>anagement."
      content="香龙香料始终秉持'品质至上'的理念,以先进的生产设备和精益求精的质量管理体系为基石,铸就行业标杆。从原料采购到生产加工,从产品研发到包装运输,每一个环节都严格把控,确保为客户提供最优质、纯正、稳定、安全的高品质香料,让美好香气飘散全球。"></FirstSlide>
    <!-- 生产图片 -->
    <swiper-slide class="h-auto">
      <div class="text-xlxl fs-1 text-center mb-3">车间实拍</div>
      <div
        class="d-flex flex-wrap justify-content-between mx-auto"
        style="max-width: 85rem">
        <UseElementVisibility v-for="i in 16" v-slot="{ isVisible }">
          <img
            loading="lazy"
            v-lazy="`/images/LiveShot/Workshop${i}.jpeg`"
            :class="[
              { animate__fadeInUp: isVisible },
              'animate__delay-' + ((i - 1) % 4) + 's',
            ]"
            class="rounded shadow mb-4 object-fit-cover animate__animated"
            style="object-position: center; width: 17.1rem; height: 12rem" />
        </UseElementVisibility>
      </div>
    </swiper-slide>
    <!-- 页脚 -->
    <FootSlide></FootSlide>
  </VerticalParallaxSwiper>
</template>
<script setup lang="ts">
  import { UseElementVisibility } from "@vueuse/components";
</script>
<style lang="scss" scoped>
  .animate__animated {
    --animate-delay: 300ms;
  }
</style>
