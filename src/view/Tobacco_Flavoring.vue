<template>
  <VerticalParallaxSwiper bg="Tobacco_Flavoring/Tobacco_Flavoring1.webp">
    <FirstSlide
      title="<span>T</span>obacco<br/><span>F</span>lavoring."
      content="凭借十余载的技术积累，强大的原料研发技术和基础研究能力，我们已建立了一套完善的烟用香精产品研发和技术服务体系。我们的创新不仅局限于传统烟草领域，还积极吸收融汇食品新原料、日化概念及中药机理，将食品前沿新技术、中药机理开发的植物提取物和日化香薰理念巧妙应用于烟用香精的开发中。" />
    <swiper-slide class="h-auto text-center" style="padding-top: 4rem">
      <FoodTobaccoFlavoringTitle :food="false" />
    </swiper-slide>
    <TitleContentImgSlide
      v-for="(i, index) in text"
      :index="index"
      :title="i.title"
      :img="i.img"
      :content="i.content" />
    <!-- 结语 -->
    <swiper-slide class="h-auto position-relative" style="padding-top: 4rem">
      <!-- 背景 -->
      <div
        class="w-100 h-100 position-absolute top-0 start-0"
        v-lazy:background-image="
          `/images/Tobacco_Flavoring/Tobacco_Flavoring6.webp`
        "
        style="
          mask-image: linear-gradient(
            0deg,
            transparent 0%,
            black 15%,
            black 85%,
            transparent 100%
          );
          z-index: -1;
          filter: brightness(0.5);
          background-position: center;
          background-size: cover;
        "
        data-swiper-parallax="-400"></div>
      <div
        class="text-white fs-2 mx-auto px-5"
        style="
          padding: 6rem 0rem;
          text-shadow: 0 0 5px black;
          text-indent: 4rem;
          max-width: var(--content-max-width);
        ">
        <p>
          丰富多样的产品线，包括特征香系列、烤烟板块系列、烟草板块系列、烟草本香系列以及其他专用烟用香精。特征香系列涵盖了从果香到木香的十大类别，能为烟草制品提供独特的风味体验。烤烟板块系列精准调控烟草的化学成分和感官特性，而烟草板块系列则全方位优化烟草口感，包括生津、圆润、香气改良等多个方面。
        </p>
        <p>
          我们的研发团队创新性地提出并贯彻了"功能性板块"理念，使我们的烟用香精具有较好的通用性，能够满足不同客户的多样化需求。这种创新不仅成功提升了客户产品形象，更赢得了客户的广泛赞誉。
        </p>
        <p>
          拥有一支高效、经验丰富的研发团队，才能为客户提供全方位的技术服务。从产品概念设计到最终配方调整，我们都能为客户产品的提升贡献专业力量。我们相信，通过不断创新和精进，我们的烟用香精将继续引领行业发展，为客户创造更大的价值。
        </p>
      </div>
    </swiper-slide>
  </VerticalParallaxSwiper>
</template>
<script lang="ts" setup>
  document.title = "香龙烟用香精";

  const text = [
    {
      title: "特征香系列",
      img: "Tobacco_Flavoring/Tobacco_Flavoring2.webp",
      content:
        "我们开发了包括果香类、茶香类、焦甜类、花香类、药香类、蜜甜类、豆香类、酒香类、辛香类和木香类在内的十大特征香系列，为烟草制品提供独特的风味体验。",
    },
    {
      title: "烤烟板块系列",
      img: "Tobacco_Flavoring/Tobacco_Flavoring3.webp",
      content:
        "我们的烤烟板块系列包括烤烟化学成分分类板块、香气板块和香味板块等，能够精准调控烟草的化学成分和感官特性。",
    },
    {
      title: "烟草板块系列",
      img: "Tobacco_Flavoring/Tobacco_Flavoring4.webp",
      content:
        "为了提升吸烟体验，我们开发了生津板块、圆润板块、香气改良板块、口感改良板块、甜润板块和抑刺板块等，全方位优化烟草口感。",
    },
    {
      title: "烟草本香系列",
      img: "Tobacco_Flavoring/Tobacco_Flavoring5.webp",
      content:
        "我们的烟草本香系列包括云南烤烟香精、津巴布韦烤烟香精、弗吉尼亚烤烟香精、白肋烟香精和晒烟香精等，能够重现各地特色烟草的独特风味。",
    },
    {
      title: "其它烟用香精",
      img: "Labs/Labs5.webp",
      content:
        "为满足不同烟草制品的需求，我们还开发了薄片用香精、天然香精、反应香精、膨胀硬丝用香精和膨胀烟丝用香精等专用香精。",
    },
  ];
</script>
