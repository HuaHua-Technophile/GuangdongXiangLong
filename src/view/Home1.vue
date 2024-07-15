<template>
  <VerticalParallaxSwiper
    :onSlideChange="onSlideChange"
    @changeSwiperEl="changeSwiperEl"
    :spaceBetween="1">
    <!-- 首屏介绍 -->
    <swiper-slide class="vw-100">
      <div
        class="bg-white bg-opacity-50 position-absolute top-50 translate-middle-y rounded-4 shadow"
        style="
          width: 550px;
          max-height: calc(100vh - 50px);
          left: calc(66% - 275px);
          padding: 2.2vh 0;
          backdrop-filter: blur(5px);
        ">
        <!-- LOGO -->
        <div
          :ref="(el) => removeClass.push(el)"
          class="text-center animate__animated animate__animated_fast animate__fadeInUp"
          data-swiper-parallax="-600">
          <img
            loading="lazy"
            v-lazy="`/images/LOGO.webp`"
            style="width: 150px" />
        </div>
        <!-- 文本 -->
        <div class="text-center lh-1" style="margin-top: 2.2vh">
          <div
            :ref="(el) => removeClass.push(el)"
            class="animate__animated animate__animated_fast animate__fadeInUp animate__delay-1s"
            data-swiper-parallax="-450">
            <div
              style="
                font-family: QinLiuLiShu;
                font-size: 3.9rem;
                letter-spacing: 13px;
              ">
              廣東香龍香料
            </div>
            <div
              class="Capitalized"
              style="
                font-family: Cinzel-Regular;
                font-size: 1.8rem;
                word-spacing: 15px;
                margin-top: 1.2vh;
              ">
              <span>F</span>RAGRANT <span>D</span>RAGON <span>C</span>O.
            </div>
            <div
              style="
                font-family: QinLiuLiShu;
                font-size: 2.8rem;
                letter-spacing: 10px;
                margin-top: 2.7vh;
              ">
              百年經營 萬分用心
            </div>
          </div>
          <div
            class="animate__animated animate__animated_fast animate__fadeInUp animate__delay-2s"
            style="
              font-family: MisansTC-Light;
              font-weight: 250;
              font-size: 1.3rem;
              margin-top: 4.2vh;
            "
            :ref="(el) => removeClass.push(el)"
            data-swiper-parallax="-300">
            <div style="margin-bottom: 4.2vh">專營產品及服務</div>
            <div style="line-height: 170%" class="fontFamilyChange">
              煙用香精<span>、</span>食用香料<span>、</span>日化香料
              <br />植物提取<span>、</span>再造煙葉<span>、</span>研發銷售
            </div>
          </div>
          <div
            style="
              font-weight: lighter;
              line-height: 170%;
              width: 70%;
              margin-top: 4.2vh;
            "
            class="text-start mx-auto animate__animated animate__animated_fast animate__fadeInUp animate__delay-3s"
            :ref="(el) => removeClass.push(el)"
            data-swiper-parallax="-150">
            <div>Specialized Products and Services:</div>
            <div style="margin-top: 2.2vh">
              Tobacco Flavoring, Food Flavoring, Daily Chemical Flavoring Plant
              Extracts, Reconstituted Tobacco, Research and Sales
            </div>
          </div>
        </div>
      </div>
      <!-- 下拉箭头 -->
      <div
        class="DropdownArrow position-absolute bottom-0 start-50"
        @click="swiperOut?.swiper.slideNext()">
        <span></span>
        <span></span>
      </div>
    </swiper-slide>
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
  import { onMounted, onUnmounted, ref } from "vue";
  import type { SwiperContainer } from "swiper/element";
  import type { Swiper } from "swiper/types";

  document.title = "广东香龙香料";

  // 首页第一屏不展示顶栏,未渲染DOM前将其隐藏
  const showHeader = defineModel<boolean>("showHeader");
  showHeader.value = false;

  // 点击按钮跳转下一页，接受实例化后的swiper
  const swiperOut = ref<SwiperContainer>();
  const changeSwiperEl = (data: SwiperContainer) => {
    swiperOut.value = data;
  };

  // 页面加载完成后便实例化所有内层swiper，避免出现没有背景图片。暂时禁用避免多余性能消耗
  const swiperInside = ref<{ swiperContainer: SwiperContainer }[]>([]);
  const onSlideChange = (e: CustomEvent<[Swiper]>) => {
    // onSlideChange事件会被内层swiper实例触发，莫名其妙？？？，且无法通过event.stopPropagation组织冒泡.于是在最外层再做一次判断来自哪个实例触发
    if (e.detail[0] == swiperOut.value?.swiper) {
      if (e.detail[0].activeIndex != 0) {
        showHeader.value = true;
        // 滚动到第几页,第几个swiper实例重新实例化,其他进行销毁
        if (
          !swiperInside.value[e.detail[0].activeIndex - 1].swiperContainer
            .swiper
        ) {
          swiperInside.value[
            e.detail[0].activeIndex - 1
          ].swiperContainer.initialize();
        }
      } else showHeader.value = false;
    }
  };

  // 页首动效定时移除
  const removeClass = ref<any>([]);
  let timeOut: NodeJS.Timeout;
  onMounted(() => {
    timeOut = setTimeout(() => {
      for (let i = 0, len = removeClass.value.length; i < len; i++) {
        removeClass.value[i].classList.remove("animate__animated");
      }
      removeClass.value = [];
    }, 3000);
  });
  onUnmounted(() => {
    clearTimeout(timeOut);
  });

  // 数据---------------
  const text = ref([
    {
      enTitle: "Company Profile",
      title: "实力",
      bg: [
        "CompanyProfile/CompanyProfile1.webp",
        "CompanyProfile/CompanyProfile2.jpeg",
      ],
      content:
        "香龙集团是一家集开发、生产、销售于一体的高新技术企业，专业生产天然植物提物、香精香料和精细化工产品等，产品广泛应用于烟草、食品、日化、医药等行业。集团属下企业有6家分公司，广东香龙香料有限公司、广州市香龙化工香料有限公司、佰律多国际香料（香港）有限公司、韶关市港龙生物技术有限公司、河南长葛市万花香料有限公司、湖北咸丰县鸿基生物化工有限公司。公司拥有先进的实验检测仪器和生产设备,具有较强的科研开发和生产能力,年生产能力达10000吨以上。",
    },
    {
      enTitle: "Quality Management",
      title: "质量",
      bg: [
        "Labs/Labs1.webp",
        "Labs/Labs2.webp",
        "Labs/Labs3.webp",
        "Labs/Labs4.webp",
      ],
      content:
        '公司坚持"质量为本、顾客为尊"的质量方针,以"研一流产品,创一流品牌"为经营方针,对产品整个生产和服务过程进行科学的质量管理。公司本着"集客所需,信誉至上"的经营理念,不断加大产品开发力度,增加技术储备,把科研与开发作为企业的发展之源。',
    },
    {
      enTitle: "Brand Building",
      title: "品牌",
      bg: [
        "Branding/Branding1.webp",
        "Branding/Branding2.webp",
        "Branding/Branding3.webp",
      ],
      content:
        '公司正努力把"香龙"香料创造为名优品牌,提升市场竞争力,研发出更加健康、安全、天然的新产品。公司坚持把品牌建设作为企业发展的核心,致力于打造一个"科研国际化、技术产业化、产品多元化"的新格局。',
    },
    {
      enTitle: "Future Development",
      title: "展望",
      bg: ["Future/Future1.webp", "Future/Future2.webp"],
      content:
        '香龙集团将继续秉持"质量为本、顾客为尊"的理念,以"研一流产品,创一流品牌"为目标,不断创新发展,努力将"香龙"品牌打造成为行业内的知名品牌,为客户提供更优质的产品和服务。',
    },
  ]);
</script>
<style lang="scss" scoped>
  .Capitalized {
    span {
      font-size: 2.4rem;
    }
  }
  .animate__animated_fast {
    --animate-delay: 600ms;
  }
  @keyframes ArrowScale {
    0% {
      transform: translateX(-50%) scale(1, 1);
    }
    100% {
      transform: translateX(-50%) scale(1.2, 1.2);
    }
  }
  @keyframes ArrowShadow {
    0% {
      box-shadow: 0 0 5px rgba(255, 255, 255, 1);
    }
    100% {
      box-shadow: 0 0 0 rgba(255, 255, 255, 1);
    }
  }
  .DropdownArrow {
    display: flex;
    animation: ArrowScale 1s linear infinite alternate-reverse;
    > span {
      width: 35px;
      height: 5px;
      background: rgba(255, 255, 255, 0.75);
      border-radius: 999px;
      animation: ArrowShadow 0.5s linear infinite alternate-reverse;
      &:first-child {
        transform-origin: right bottom;
        transform: rotate(30deg);
      }
      &:last-child {
        transform-origin: left bottom;
        transform: rotate(-30deg);
      }
    }
  }

  .fontFamilyChange span {
    font-family: var(--bs-body-font-family);
  }
</style>
