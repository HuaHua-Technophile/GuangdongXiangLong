<template>
  <VerticalParallaxSwiper bg="Labs2.jpeg" :space-between="60">
    <FirstSlide
      title="<span>R</span>esearch <span>A</span>nd<br /><span>D</span>evelopment<br /><span>S</span>ystem."
      content="在香氛世界中，香龙香料以创新与技术的完美结合而闻名。我们不懈探索新机遇，将香气创新转化为实际成果，不仅激发消费者灵感，更提升他们的健康与福祉。我们致力于通过卓越的香氛，为人们的生活增添价值，创造更美好、更健康的体验。"></FirstSlide>
    <!-- 介绍 -->
    <swiper-slide
      v-for="(i, index) in text"
      class="h-auto mx-auto d-flex align-items-center"
      :class="{ 'flex-row-reverse': index % 2 == 1 }"
      style="max-width: 1300px; padding-top: 4rem">
      <!-- 文案 -->
      <div
        class="textCard d-flex flex-column"
        :class="[index % 2 == 1 ? 'align-items-end ms-5' : ' me-5']">
        <div class="title fs-1 fw-bold text-xlxl transition1000">
          {{ i.title }}
        </div>
        <!-- 分割线 -->
        <div
          class="divider mt-2 mb-5 bg-xlxl transition1000"
          style="width: 180px; height: 3px"></div>
        <!-- 内容 -->
        <div
          ref="textRef"
          v-html="i.content"
          class="text-white fs-5"
          style="text-shadow: 0 0 5px black"
          data-swiper-parallax="-600"></div>
      </div>
      <!-- 插图 -->
      <img
        loading="lazy"
        v-lazy="`/images/${i.img}`"
        class="object-fit-cover flex-shrink-0 shadow rounded-4 img transition1000"
        style="object-position: center; width: 500px; height: 350px" />
    </swiper-slide>
    <!-- 实拍 -->
    <swiper-slide class="flex-column d-flex">
      <div class="text-xlxl fs-1 fw-bold lh-1 mb-3 text-center">
        研发环境部分实拍
      </div>
      <swiper-container
        ref="swiperInside"
        :init="false"
        :pagination="true"
        :pagination-clickable="true"
        :navigation="true"
        :loop="true"
        :keyboard="false"
        :mousewheel="false"
        :allowTouchMove="false"
        class="flex-grow-1 w-100 overflow-hidden">
        <swiper-slide v-for="i in 18">
          <img
            loading="lazy"
            :src="`/images/LiveShot/Labs${i}.jpeg`"
            class="w-100 h-100 object-fit-cover"
            style="object-position: center" />
        </swiper-slide>
      </swiper-container>
    </swiper-slide>
    <!-- 页脚 -->
    <FootSlide></FootSlide>
  </VerticalParallaxSwiper>
</template>
<script lang="ts" setup>
  import { CountUp } from "countup.js";
  import { onMounted, ref, watch } from "vue";

  import { useElementVisibility } from "@vueuse/core";
  import { SwiperContainer } from "swiper/element";

  document.title = "香龙香料研发体系";
  const textRef = ref<HTMLElement[]>();
  const swiperInside = ref<SwiperContainer>();
  onMounted(() => {
    const CountUpEl = document.querySelectorAll(".CountUp");
    // 将所有需要数值动画的元素放入对应文本内容所在分组中
    for (let i = 0, len = CountUpEl.length; i < len; i++) {
      const index = Number(CountUpEl[i].classList[1]);
      if (text.value[index]?.countUp) {
        text.value[index].countUp!.push(
          new CountUp(
            CountUpEl[i] as HTMLElement,
            Number(CountUpEl[i]?.innerHTML),
            {
              duration: 3,
            }
          )
        );
      }
    }
    if (textRef.value) {
      for (let i = 0, len = textRef.value.length; i < len; i++) {
        watch(useElementVisibility(textRef.value[i]), (newVal) => {
          if (newVal && text.value[i].countUp) {
            for (
              let j = 0, len2 = text.value[i].countUp!.length;
              j < len2;
              j++
            ) {
              text.value[i].countUp![j].start();
            }
          }
        });
      }
    }
    Object.assign(swiperInside.value!, {
      injectStyles: [
        `:host {
          --swiper-theme-color: var(--bs-xlxl);
        }
        `,
      ],
    });
    swiperInside.value?.initialize();
  });
  const text = ref<
    { title: string; img: string; content: string; countUp?: CountUp[] }[]
  >([
    {
      title: "人才实力：创新之源",
      img: "Labs3.jpeg",
      content:
        "广东香龙香料有限公司以其雄厚的人才实力而著称。公司拥有多名博士和高级技术人员，他们在香料研发领域具有丰富的经验和专业知识。这支精英团队不仅为公司带来了先进的技术和创新理念，还持续推动着公司在行业内的领先地位。香龙公司深知人才是企业发展的根本，因此不断加大科研投入，通过多种渠道引进高端人才，成功打造了一支具有卓越创造能力的研发队伍",
    },
    {
      title: "研发体系：创新的引擎",
      img: "Labs1.jpeg",
      content:
        "为了更好地整合研发资源，提升创新能力，香龙公司于2006年成立了技术中心。这个中心下设多个专业研究室，包括天然香料研究室、烟用香精研究室、食品香精研究室、仪器分析实验室和应用研究室等。每个研究室都配备了先进的设备和专业的研究人员，形成了一个全面、系统的研发体系。这种结构化的研发体系不仅提高了研发效率，还促进了各个领域之间的协同创新",
    },
    {
      title: "创新成果：市场的领航者",
      img: "TableTourrettes.webp",
      content:
        "通过持续不断的努力和创新，香龙公司在产品开发方面取得了显著的成果。截至目前，公司已成功开发了近<span class='CountUp 2'>800</span>多种烟用香精，涵盖了各种烟草风格和口感需求。在食品香精领域，公司的产品线更为丰富，开发出了<span class='CountUp 2'>1500</span>多种食用香精，满足了不同食品类别的调香需求。此外，公司还在天然香料领域有所建树，成功研发了上百种天然香料产品，顺应了市场对天然、健康产品的需求趋势。这些成果不仅展示了香龙公司强大的研发实力，也为公司在市场竞争中赢得了优势地位",
      countUp: [],
    },
    {
      title: "研发投入：创新的动力",
      img: "Labs4.jpeg",
      content:
        "香龙公司对科研的重视不仅体现在人才培养和技术创新上，更直接反映在其持续增加的研发投入上。近年来，公司在新技术研发方面的投入呈现稳步上升趋势。2019年，公司在研发方面投入了<span class='CountUp 3'>502.76</span>万元人民币，展现了其对创新的坚定承诺。2020年，尽管面临全球疫情的挑战，公司不仅没有减少研发投入，反而增加到了<span class='CountUp 3'>529</span>万元，充分体现了公司在逆境中坚持创新的决心。2021年，虽然投入略有下降，达到<span class='CountUp 3'>417</span>万元，但三年累计投入仍高达<span class='CountUp 3'>1448.76</span> 万元。这一持续的高投入不仅确保了公司在行业内的技术领先地位，也为未来的产品创新和市场拓展奠定了坚实的基础。香龙公司的这种长期投资策略，充分展现了其对科技创新的坚定信念，以及在激烈的市场竞争中保持领先地位的战略眼光。",
      countUp: [],
    },
  ]);
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
