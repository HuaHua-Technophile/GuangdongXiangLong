<template>
  <VerticalParallaxSwiper
    bg="outdoorLabs/outdoorLabs5.webp"
    :space-between="60">
    <FirstSlide
      title="<span>G</span>reen<br/><span>I</span>ndustrial <span>P</span>ark."
      content="香龙集团秉持可持续发展理念，致力于提升市场竞争力的同时，积极推动产业多元化和绿色化。我们充分利用湖北、河南长葛、广东茂名等地区得天独厚的自然资源优势，战略性地布局了多个专业化种植基地。这些基地不仅涵盖了原料种植，还包括珍贵药材和名贵木材的培育，形成了一个全面的天然原料生产体系。" />
    <TitleContentImgSlide
      v-for="(i, index) in text"
      :index="index"
      :title="i.title"
      :content="i.content"
      :img="i.img" />
    <swiper-slide
      class="h-auto mx-auto"
      style="max-width: var(--content-max-width)">
      <FadeInUpGreenCard
        title="产权专利、所获资质"
        icon="iconfont icon-zhengshu"
        to="/IP"
        bg="certificates1.webp"
        :width="50" />
    </swiper-slide>
    <!-- 页脚 -->
  </VerticalParallaxSwiper>
</template>
<script lang="ts" setup>
  document.title = "香龙绿色产园";

  const text = [
    {
      title: "规模优势：跨区域种植基地",
      img: "IndustrialPark/IndustrialPark1.jpg",
      content:
        "我们的生物种植基地规模宏大，总面积达到约三万亩，分布在湖北、河南、广东茂名市和韶关市等地区。这种大规模、跨区域的种植模式不仅确保了原料供应的稳定性和多样性，更重要的是保证了原料的高品质和可追溯性。",
    },
    {
      title: "环境贡献：绿色发展的典范",
      img: "IndustrialPark/IndustrialPark2.webp",
      content:
        "通过发展这些绿色产业，香龙集团不仅实现了自身的可持续发展，还为环境保护做出了积极贡献。我们的种植基地在提供优质原料的同时，也成为了当地重要的绿化屏障，有效改善了周边生态环境。这种将企业发展与环境保护相结合的模式，体现了香龙集团对社会责任的深刻理解和坚定承诺。",
    },
    {
      title: "未来展望：持续绿色创新",
      img: "outdoorLabs/outdoorLabs1.webp",
      content:
        "我们相信，只有坚持绿色发展道路，才能在激烈的市场竞争中保持长久的优势。香龙集团将继续扩大和优化我们的绿色产业链，为客户提供更优质、更环保的产品，同时为建设美丽中国贡献自己的力量。",
    },
  ];
</script>
