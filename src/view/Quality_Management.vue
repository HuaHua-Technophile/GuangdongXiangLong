<template>
  <VerticalParallaxSwiper :free-mode="true" :mousewheel-sensitivity="0.05">
    <FirstSlide
      title="<span>Q</span>uality<br /><span>M</span>anagement."
      content="香龙香料始终秉持'品质至上'的理念,以先进的生产设备和精益求精的质量管理体系为基石,铸就行业标杆。从原料采购到生产加工,从产品研发到包装运输,每一个环节都严格把控,确保为客户提供最优质、纯正、稳定、安全的高品质香料,让美好香气飘散全球。" />
    <!-- 生产图片 -->
    <swiper-slide class="h-auto">
      <SlideTitle class="mb-3">车间实拍</SlideTitle>
      <div
        class="d-flex flex-wrap justify-content-between mx-auto"
        style="max-width: var(--content-max-width)">
        <UseElementVisibility v-for="i in 16" v-slot="{ isVisible }">
          <img
            loading="lazy"
            v-lazy="`/images/LiveShot/Workshop${i}.jpeg`"
            :class="[
              { animate__fadeInUp: isVisible },
              'animate__delay-' + ((i - 1) % 4) + 's',
            ]"
            class="rounded shadow mb-4 object-fit-cover animate__animated animate__delay_faster"
            style="width: 17.1rem; height: 12rem; object-position: center" />
        </UseElementVisibility>
      </div>
    </swiper-slide>
    <swiper-slide
      class="w-100 h-auto mx-auto d-flex flex-wrap justify-content-between"
      style="max-width: var(--content-max-width)">
      <FadeInUpGreenCard
        v-for="(i, index) in text"
        :index="index"
        :title="i.title"
        :icon="i.icon"
        :content="i.content"
        :to="i.to"
        :bg="i.bg"
        :height="27" />
    </swiper-slide>
    <!-- 页脚 -->
  </VerticalParallaxSwiper>
</template>
<script setup lang="ts">
  import { UseElementVisibility } from "@vueuse/components";

  document.title = "香龙品质管理";

  const text = [
    {
      title: "精益生产",
      icon: "iconfont icon-tubiao-",
      content:
        "广东香龙香料有限公司以其先进的生产设备和精益求精的生产理念而著称。我们的车间工人严格遵循工艺要求，借助完善且尖端的生产设备，精心打造每一件产品。正是这种对细节的执着追求，使我们的产品赢得了客户的广泛信赖和赞誉。",
    },
    {
      title: "科学管理",
      icon: "iconfont icon-kexueguanli",
      content:
        '公司生产厂区配备了专门的原料、成品和辅料仓库，并采用先进的"5S"管理方法进行全面管理。这种科学的管理方式确保了生产全过程处于良好的受控状态，从源头上保证了原料和产品的质量。我们相信，只有通过严格的管理，才能持续提供高品质的产品。',
    },
    {
      title: "国际标准",
      icon: "iconfont icon-iso",
      content:
        "为了确保产品的质量和安全，香龙公司严格遵循国际标准。我们的品控人员严格按照已通过认证的ISO9001:2015质量管理体系、ISO14001:2015环境管理体系、OHSAS18001:2007职业健康安全管理体系进行全方位管理。这些国际认证不仅是对我们管理水平的肯定，更是我们对客户的郑重承诺。",
    },
    {
      title: "全程监控",
      icon: "iconfont icon-icon-jiankong",
      content:
        "香龙公司对产品质量的追求体现在生产的每一个环节。从原料进厂到产品出厂，我们都实施了严格的控制措施。我们的品控人员对生产过程进行实时跟踪检查，确保不合格原料不进入生产环节，不合格产品不出厂流通。同时，我们的生产人员严格按照操作规程进行操作，以确保每一件出厂的产品都达到最高品质标准。",
    },
    {
      title: "持续改进",
      icon: "iconfont icon-chixugaijin",
      content:
        '"不断完善管理，向更高目标发展"是香龙公司的核心宗旨。我们深知，在竞争激烈的市场中，只有不断进步才能保持领先。因此，我们始终保持开放和学习的态度，持续改进我们的管理体系和生产流程，不断提升产品质量和服务水平。我们坚信，只有永不停歇的追求卓越，才能为客户提供更优质的产品和服务。',
    },
    {
      title: "香龙绿色产园",
      icon: "iconfont icon-zhongzhiyuan",
      to: "/Green_Industrial_Park",
      bg: "outdoorLabs/outdoorLabs3.webp",
    },
  ];
</script>
<style lang="scss" scoped>
  .animate__delay_faster {
    --animate-delay: 300ms;
  }
</style>
