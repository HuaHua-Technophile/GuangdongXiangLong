<template>
  <VerticalParallaxSwiper
    ref="swiperOut"
    :onSlideChange="onSlideChange"
    :spaceBetween="1">
    <FirstSlide
      title="<span>M</span>arketing<br/><span>N</span>etwork."
      content="营销网络覆盖食品、烟草、日化等多个行业,在国内外树立了良好的品牌形象。获得国家烟草专卖局供应资质,与云南中烟、广东中烟等知名企业合作。在食品领域,公司拥有生产许可,为珠海元朗、四川雪宝乳业等大型企业提供定制化解决方案。同时在泰国、印尼等地设有销售代理,产品远销海外。未来将持续扩大营销网络,深化现有合作,开拓新市场" />
    <!-- 详情 -->
    <FadeChangeBgSlide
      v-for="i in text"
      :enTitle="i.enTitle"
      :title="i.title"
      :bg="i.bg"
      :content="i.content"
      ref="swiperInside" />
  </VerticalParallaxSwiper>
</template>
<script lang="ts" setup>
  import Swiper from "swiper";
  import type { SwiperContainer } from "swiper/element";
  import { ref } from "vue";

  document.title = "香龙营销网络";

  // 点击按钮跳转下一页，接受实例化后的swiper
  const swiperOut = ref<{ swiperOut: SwiperContainer }>();

  // 页面加载完成后便实例化所有内层swiper，避免出现没有背景图片。暂时禁用避免多余性能消耗
  const swiperInside = ref<{ swiperContainer: SwiperContainer }[]>([]);
  const onSlideChange = (e: CustomEvent<[Swiper]>) => {
    // onSlideChange事件会被内层swiper实例触发，莫名其妙？？？，且无法通过event.stopPropagation组织冒泡.于是在最外层再做一次判断来自哪个实例触发
    if (e.detail[0] == swiperOut.value?.swiperOut.swiper) {
      if (e.detail[0].activeIndex != 0) {
        // 滚动到第几页,第几个swiper实例重新实例化,其他进行销毁
        if (
          !swiperInside.value[e.detail[0].activeIndex - 1].swiperContainer
            .swiper
        ) {
          swiperInside.value[
            e.detail[0].activeIndex - 1
          ].swiperContainer.initialize();
        }
      }
    }
  };

  // 数据---------------
  const text = ref([
    {
      enTitle: "Company Development and Business Expansion",
      title: "发展历程、业务扩张",
      bg: [
        "Company_Development/Company_Development1.webp",
        "Company_Development/Company_Development2.webp",
        "Company_Development/Company_Development3.webp",
      ],
      content:
        "香龙香料的发展历程可以追溯到1996年成立的广州市香龙化工香料有限公司，初期主要专注于烟用香精香料的生产研发和销售。随着业务的不断扩展，公司于2003年在香港成立了佰律多国际香料（香港）有限公司，将业务范围扩大到食用香精香料的生产研发和销售（主要面向出口市场）。2006年，公司进一步发展，成立了广东香龙香料有限公司，业务领域全面覆盖烟用香精香料、食用香精香料以及植物提取等多个方面，标志着公司进入了一个全新的发展阶段。",
    },
    {
      enTitle: "Customer Network and Market Position",
      title: "客户网络、市场地位",
      bg: [
        "Customer_Network/Customer_Network1.webp",
        "Customer_Network/Customer_Network2.webp",
        "Customer_Network/Customer_Network3.webp",
      ],
      content:
        "经过多年的发展，香龙香料已经建立了遍布全国的客户网络，年销售额突破亿元大关，彰显了公司在行业中的重要地位。在烟草香精领域，公司拥有国家局下属各烟草公司的供应资质，主要客户包括云南中烟、广东中烟、吉林烟草、陕西中烟、广西中烟和河南中烟等知名烟草企业。同时，公司还与中烟系统附属的薄片公司和嘴棒公司建立了紧密的业务关系，如河南卷烟工业烟草薄片有限公司、云南中烟再造烟叶有限责任公司等。在食品香精方面，公司拥有食品生产许可资质，为国内多家知名食品企业提供优质服务，客户包括珠海元朗食品、四川雪宝乳业集团、广东嘉士利食品集团等行业领军企业。",
    },
    {
      enTitle: "Marketing Strategy and Future Outlook",
      title: "营销策略、未来展望",
      bg: [
        "Marketing_Strategy/Marketing_Strategy1.webp",
        "Marketing_Strategy/Marketing_Strategy2.webp",
        "Marketing_Strategy/Marketing_Strategy3.webp",
        "Marketing_Strategy/Marketing_Strategy4.webp",
      ],
      content:
        "香龙香料的营销网络战略聚焦于国内食品、制药和烟草等行业的客户，致力于发展长期稳定的业务关系。公司深刻理解客户需求，积极把握商业机遇，通过互利共赢的合作模式促进业务增长。为了更好地服务客户，公司在全国各地设立了办事处，确保能够快速响应客户需求，提供及时的技术支持和服务。与此同时，公司积极拓展海外市场，在泰国、印度尼西亚等地设立销售代理，为公司的国际化发展奠定了坚实基础。未来，公司将继续扩大营销网络，深化与现有客户的合作关系，同时积极开拓新市场，力争成为全球领先的香料香精供应商。",
    },
  ]);
</script>
