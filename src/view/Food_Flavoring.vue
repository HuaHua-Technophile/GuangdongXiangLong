<template>
  <VerticalParallaxSwiper
    bg="Food_Flavoring/Food_FlavoringBg.webp"
    :brightness="0.7">
    <FirstSlide
      title="<span>F</span>ood<br/><span>F</span>lavoring."
      content="香龙香料始终以客户需求为导向，针对市场上不同的食品类型，开发了一系列高品质、多功能的食用香精。我们的产品线涵盖水溶性香精、油溶性香精、水油两用香精、粉末香精、乳化香精和膏体香精等，能够适用于各种不同的食品类型和生产工艺。" />
    <swiper-slide class="h-auto text-center" style="padding-top: 4rem">
      <FoodTobaccoFlavoringTitle :food="true" />
    </swiper-slide>
    <TitleContentImgSlide
      v-for="(i, index) in text"
      :index="index"
      :title="i.title"
      :img="i.img"
      :content="i.content" />
    <!-- 结语 -->
    <swiper-slide class="h-auto position-relative" style="padding-top: 4rem">
      <div
        class="w-100 h-100 position-absolute top-0 start-0"
        v-lazy:background-image="
          `/images/Food_Flavoring/Food_FlavoringTitle.webp`
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
          我们的食用香精产品被广泛应用于饮料、糖果、饼干、果冻和冰淇淋等多个领域，赢得了客户的欢迎和好评。特别是在凉茶、菊花和红枣等天然提取物方面，我们拥有独特的技术优势，为客户提供更加天然、健康的选择。
        </p>
        <p>
          我们的研发团队持续关注市场趋势和消费者需求，不断创新和优化配方。我们致力于开发更多符合健康、天然、环保理念的香精产品，以满足消费者日益增长的健康需求。
        </p>
        <p>
          未来，我们将继续秉持"以客户需求为导向"的理念，加大研发投入，提升技术水平，为食品行业提供更多高品质、创新性的香精解决方案，助力客户打造更具竞争力的产品
        </p>
      </div>
    </swiper-slide>
  </VerticalParallaxSwiper>
</template>
<script lang="ts" setup>
  document.title = "香龙食用香精";

  const text = [
    {
      title: "奶味系列",
      img: "Food_Flavoring/Food_Flavoring1.webp",
      content:
        "我们的奶味系列包括牛奶、鲜奶、酸奶和奶油等香精，能够为各种乳制品和含乳饮料提供纯正自然的奶香",
    },
    {
      title: "坚果系列",
      img: "Food_Flavoring/Food_Flavoring2.webp",
      content:
        "我们的坚果系列香精包括核桃、花生和芝麻等，能够为各种零食和烘焙产品增添浓郁的坚果风味",
    },
    {
      title: "水果系列",
      img: "Food_Flavoring/Food_Flavoring3.webp",
      content:
        "我们的水果系列香精涵盖柑橘类、莓类、热带水果类和其他水果类等，能够为饮料、糖果和冰淇淋等产品提供鲜美自然的水果风味",
    },
    {
      title: "五谷系列",
      img: "Food_Flavoring/Food_Flavoring4.webp",
      content:
        "我们的五谷系列香精包括绿豆、红豆和玉米等，能够为各种谷物饮料和零食增添醇厚的谷物香气",
    },
    {
      title: "凉茶系列",
      img: "Food_Flavoring/Food_Flavoring5.webp",
      content:
        "凭借我们在天然提取物方面的技术优势，我们开发了独特的凉茶和凉茶浸膏香精，为凉茶饮料提供地道的风味",
    },
    {
      title: "茶类系列",
      img: "Food_Flavoring/Food_Flavoring6.webp",
      content:
        "我们的茶类系列香精包括红茶、台湾绿茶、杭白菊和茉莉花茶等，能够为各种茶饮料提供纯正的茶香",
    },
  ];
</script>
