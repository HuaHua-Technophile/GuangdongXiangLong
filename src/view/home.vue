<template>
  <VerticalParallaxSwiper
    :onSlideChange="onSlideChange"
    @changeSwiperEl="changeSwiperEl"
    :spaceBetween="1">
    <swiper-slide class="vw-100">
      <!-- 首屏介绍 -->
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
          class="text-center animate__animated animate__fadeInUp"
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
            class="animate__animated animate__fadeInUp animate__delay-1s"
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
            class="animate__animated animate__fadeInUp animate__delay-2s"
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
            class="text-start mx-auto animate__animated animate__fadeInUp animate__delay-3s"
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
    <swiper-slide v-for="i in text" class="position-relative overflow-hidden">
      <!-- 背景 -->
      <swiper-container
        ref="swiperInside"
        :init="false"
        :loop="true"
        :keyboard="false"
        :mousewheel="false"
        :allowTouchMove="false"
        :autoplay-delay="random(2000, 4000)"
        :autoplay-disable-on-interaction="false"
        :speed="random(7000, 9000)"
        effect="creative"
        :creativeEffect="{
          prev: {
            opacity: 0.8,
            // scale: 1.2,
          },
          next: {
            opacity: 0,
            scale: 1.3,
          },
        }"
        class="position-absolute w-100 h-100 swiper-liner"
        style="z-index: 1">
        <swiper-slide v-for="j in i.bg">
          <img
            loading="lazy"
            v-lazy="`/images/${j}`"
            class="w-100 h-100 object-fit-cover"
            style="filter: brightness(0.4); object-position: center" />
        </swiper-slide>
      </swiper-container>
      <!-- 其他相关装饰 -->
      <UseElementVisibility
        v-slot="{ isVisible }"
        class="position-absolute w-100 h-100"
        style="z-index: 2">
        <div :class="{ AniStart: isVisible }">
          <!-- 左上角空心 -->
          <div class="decorative decorative-line position-absolute ani1"></div>
          <!-- 左上角三角形 -->
          <div
            class="decorative bg-xlxl position-absolute shadow ani2"
            style="
              width: var(--decorative-size);
              height: var(--decorative-size);
            "></div>
          <!-- 右上角四个三角形 -->
          <div
            class="decorative decorative-line position-absolute end-0 ani3"></div>
          <div
            class="decorative decorative-line position-absolute end-0 ani4"></div>
          <div
            class="decorative decorative-line position-absolute end-0 ani5"></div>
          <div
            class="decorative decorative-line position-absolute end-0 ani6"></div>
          <!-- 右下角不规则装饰 -->
          <svg
            width="350"
            height="175"
            xmlns="http://www.w3.org/2000/svg"
            version="2"
            class="position-absolute end-0 bottom-0 ani7">
            <path
              id="svg_1"
              d="m2.28498,174.78549c83,-67 87,-84 186.99999,-46c100,38 133.99999,36 159.99999,-123.99999c26,-159.99999 16,187.99999 15.71504,187.2145c0.28496,0.78549 -373.71502,-8.21451 -373,-9c-0.71502,0.78549 10.28498,-8.21451 10.28498,-8.21451z"
              fill="#006D3F" />
          </svg>
          <svg
            width="350"
            height="175"
            xmlns="http://www.w3.org/2000/svg"
            version="2"
            class="position-absolute bottom-0 end-0 ani8">
            <path
              id="svg_1"
              d="m2.28498,174.78549c83,-67 87,-84 186.99999,-46c100,38 133.99999,36 159.99999,-123.99999c26,-159.99999 16,187.99999 15.71504,187.2145c0.28496,0.78549 -373.71502,-8.21451 -373,-9c-0.71502,0.78549 10.28498,-8.21451 10.28498,-8.21451z"
              stroke-opacity="0.7"
              stroke="#ffffff"
              stroke-width="1.3"
              fill="#00000000" />
          </svg>
        </div>
      </UseElementVisibility>
      <!-- 内容 -->
      <div
        class="position-absolute w-100 h-100 d-flex align-items-center justify-content-center"
        style="z-index: 999; padding-top: 4rem">
        <div class="container" style="padding: 0 8rem">
          <div
            class="fs-4 text-white d-flex align-items-center text-uppercase"
            style="
              letter-spacing: 0.08rem;
              word-spacing: 0.12rem;
              font-family: 'Kumbh Sans';
              font-weight: 500;
              text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
            "
            data-swiper-parallax="-600">
            <div
              class="border rounded-5 me-2"
              style="height: 16px; width: 40px; --bs-border-width: 1.5px">
              <div
                class="bg-white h-100 rounded-5 float-end"
                style="width: 66.6%"></div>
            </div>
            {{ i.enTitle }}
          </div>
          <div
            class="text-white fw-bold mt-4"
            style="
              text-shadow: 1px 1px 4px black;
              font-size: 3.5rem;
              letter-spacing: 0.5rem;
            "
            data-swiper-parallax="-450">
            {{ i.title }}
          </div>
          <div
            class="text-white opacity-75 mt-4"
            style="
              font-size: 1.2rem;
              text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
            "
            data-swiper-parallax="-300">
            {{ i.content }}
          </div>
          <RouterLink
            to="/Corporate_Culture"
            class="rounded shadow text-white ps-4 pe-2 py-3 mt-5 text-decoration-none d-inline-flex align-items-center"
            style="
              background: linear-gradient(
                90deg,
                rgb(40, 149, 103),
                var(--bs-xlxl)
              );
              font-family: 'Kumbh Sans';
              font-weight: 600;
            "
            data-swiper-parallax="-150">
            Explore More
            <i
              class="bi bi-arrow-right fs-5 ms-4 animate__animated animate__slideInLeft animate__infinite"></i>
          </RouterLink>
        </div>
      </div>
    </swiper-slide>
    <!-- 页脚 -->
  </VerticalParallaxSwiper>
</template>
<script lang="ts" setup>
  import { onMounted, onUnmounted, ref } from "vue";
  import type { SwiperContainer } from "swiper/element";
  import type { Swiper } from "swiper/types";
  import { UseElementVisibility } from "@vueuse/components";
  import { random } from "lodash";

  document.title = "广东香龙香料";

  // 首页第一屏不展示顶栏,未渲染DOM前将其隐藏
  const showHeader = defineModel<boolean>("showHeader");
  showHeader.value = false;

  // 页面加载完成后便实例化所有内层swiper，避免出现没有背景图片。暂时禁用避免多余性能消耗
  const swiperInside = ref<[SwiperContainer]>();
  const onSlideChange = (e: CustomEvent<[Swiper]>) => {
    // onSlideChange事件会被内层swiper实例触发，莫名其妙？？？，且无法通过event.stopPropagation组织冒泡.于是在最外层再做一次判断来自哪个实例触发
    if (e.detail[0] == swiperOut.value?.swiper) {
      if (e.detail[0].activeIndex != 0) {
        showHeader.value = true;
        // 滚动到第几页,第几个swiper实例重新实例化,其他进行销毁
        if (!swiperInside.value![e.detail[0].activeIndex - 1].swiper)
          swiperInside.value![e.detail[0].activeIndex - 1].initialize();

        /* else {
            console.log("销毁inSwiper第" + i);
            swiperInside.value![i].swiper.disable();
          } */
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

  // 点击按钮跳转下一页，接受实例化后的swiper
  const swiperOut = ref<SwiperContainer>();
  const changeSwiperEl = (data: SwiperContainer) => {
    swiperOut.value = data;
  };

  // 数据---------------
  const text = ref([
    {
      decorative: false,
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
      decorative: false,
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
      decorative: false,
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
      decorative: false,
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
  .animate__animated {
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
  .swiper-liner {
    -webkit-transition-timing-function: linear; /*之前是ease-out*/
    -moz-transition-timing-function: linear;
    -ms-transition-timing-function: linear;
    -o-transition-timing-function: linear;
    transition-timing-function: linear;
  }
  .decorative {
    --decorative-size: 350px;
  }
  .decorative-line {
    width: var(--decorative-size);
    height: var(--decorative-size);
    border: 2px solid rgba(255, 255, 255, 0.75);
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.5), inset 0 0 7px rgba(0, 0, 0, 0.5);
  }
  .ani1 {
    transform: translate(-50%, 20%) rotate(45deg);
  }
  @keyframes a1 {
    0% {
      transform: translate(-100%, 20%) rotate(45deg);
    }
  }
  .ani2 {
    transform: translate(-50%, 10%) rotate(45deg);
  }
  @keyframes a2 {
    0% {
      transform: translate(-100%, 20%) rotate(45deg);
    }
  }
  .ani3 {
    transform: translate(50%, -10%) rotate(45deg);
  }
  @keyframes a3 {
    0% {
      transform: translate(150%, -10%) rotate(45deg);
    }
  }
  .ani4 {
    transform: translate(60%, -10%) rotate(45deg);
  }
  @keyframes a4 {
    0% {
      transform: translate(150%, -10%) rotate(45deg);
    }
  }
  .ani5 {
    transform: translate(70%, -10%) rotate(45deg);
  }
  @keyframes a5 {
    0% {
      transform: translate(150%, -10%) rotate(45deg);
    }
  }
  .ani6 {
    transform: translate(80%, -10%) rotate(45deg);
  }
  @keyframes a6 {
    0% {
      transform: translate(150%, -10%) rotate(45deg);
    }
  }
  .ani7 {
    transform: translate(0, 0);
  }
  @keyframes a7 {
    0% {
      transform: translate(100%, 0);
    }
  }
  .ani8 {
    transform: rotate(-3deg) scale(1.2, 1.6) translate(-22px, -30px);
  }
  @keyframes a8 {
    0% {
      transform: rotate(-3deg) scale(1.2, 1.6) translate(100%, -30px);
    }
  }
  .AniStart {
    --delay: 500ms;
    --aniTime: 1500ms;
    .ani1 {
      animation: a1 var(--aniTime) both;
    }
    .ani2 {
      animation: a2 calc(var(--aniTime) + (var(--delay) * 2)) both;
      animation-delay: calc(var(--delay) * 3);
    }
    .ani3 {
      animation: a3 var(--aniTime) both;
    }
    .ani4 {
      animation: a4 var(--aniTime) both;
      animation-delay: var(--delay);
    }
    .ani5 {
      animation: a5 var(--aniTime) both;
      animation-delay: calc(var(--delay) * 2);
    }
    .ani6 {
      animation: a6 var(--aniTime) both;
      animation-delay: calc(var(--delay) * 3);
    }
    .ani7 {
      animation: a7 var(--aniTime) both;
      animation-delay: calc(var(--delay) * 1.5);
    }
    .ani8 {
      animation: a8 var(--aniTime) both;
      animation-delay: calc(var(--delay) * 3);
    }
  }
  .animate__slideInLeft {
    animation-direction: alternate-reverse !important;
  }
  .fontFamilyChange span {
    font-family: var(--bs-body-font-family);
  }
</style>
