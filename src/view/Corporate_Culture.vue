<template>
  <VerticalParallaxSwiper
    free-mode="true"
    slides-per-view="auto"
    bgParallax="-50%"
    bgHeight="220%">
    <swiper-slide
      class="vw-100 vh-100 d-flex align-items-center justify-content-center"
      style="
        padding: 0 8rem;
        background: url('../../src/assets/image/Corporate Culture1.webp') center;
        background-size: cover;
      ">
      <div
        :ref="(el) => removeClass.push(el)"
        class="Capitalized animate__animated animate__fadeInUp"
        style="font-family: cinzel; font-size: 4rem; text-shadow: 0 0 3px white"
        data-swiper-parallax="-600">
        <span>C</span>orporate<br /><span>C</span>ulture.
      </div>
      <div
        class="ms-2 position-relative h-100 d-flex align-items-center"
        style="width: 350px">
        <!-- 背景 -->
        <div
          :ref="(el) => removeClass.push(el)"
          class="position-absolute w-100 h-100 bg-xlxl bg-opacity-50 rounded-3 shadow animate__animated animate__fadeInUp animate__delay-4s"
          data-swiper-parallax="-3000"
          style="backdrop-filter: blur(10px)"></div>
        <div
          :ref="(el) => removeClass.push(el)"
          style="
            font-size: 2rem;
            text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
            z-index: 2;
          "
          class="position-relative text-white w-100 p-3 animate__animated animate__fadeInUp animate__delay-2s"
          data-swiper-parallax="-400">
          在香龙集团，我们深信企业文化是公司发展的基石。我们的企业文化不仅仅是一些口号或标语，而是贯穿于每个员工日常工作中的核心价值观和行为准则。
        </div>
      </div>
    </swiper-slide>
    <swiper-slide
      class="vw-100 h-auto mx-auto d-flex flex-wrap justify-content-between"
      style="
        --max-width: 78rem;
        --card-width: 22rem;
        max-width: var(--max-width);
      ">
      <UseElementVisibility
        v-slot="{ isVisible }"
        v-for="(i, index) in text"
        class="CultureCard transition750 mt-5">
        <div
          class="text-center rounded-5 bg-xlxl bg-opacity-50 shadow text-white d-flex flex-column transition750 animate__animated"
          :class="[
            { animate__fadeInUp: isVisible },
            'animate__delay-' + (index % 3) + 's',
          ]"
          style="
            width: var(--card-width);
            height: var(--card-width);
            backdrop-filter: blur(10px);
          ">
          <i
            :class="['iconfont transition750', i.icon]"
            style="font-size: 5.5rem"></i>
          <div class="fs-2">{{ i.title }}</div>
          <span class="opacity-75 h-100 px-4 d-flex align-items-center">
            {{ i.content }}
          </span>
        </div>
      </UseElementVisibility>
      <UseElementVisibility
        v-slot="{ isVisible }"
        class="CultureCard transition750 my-5"
        style="">
        <RouterLink
          to="/RD_System"
          class="d-block text-decoration-none rounded-5 bg-xlxl bg-opacity-50 shadow text-white transition750 animate__animated animate__delay-4s position-relative"
          :class="[{ animate__fadeInUp: isVisible }]"
          style="
            width: calc(var(--card-width) * 1.5);
            height: var(--card-width);
            backdrop-filter: blur(10px);
          ">
          <div
            class="position-absolute w-100 h-100 rounded-5 opacity-25 bgLabs transition750"
            style="
              background: url(../../src/assets/image/labs1.webp) center;
              background-size: cover;
            "></div>
          <div
            class="position-relative d-flex h-100 flex-column justify-content-between"
            style="z-index: 2">
            <div class="d-flex justify-content-end">
              <i
                class="iconfont icon-yanfa transition750 lh-1 p-3"
                style="
                  font-size: 5.5rem;
                  border-radius: 0 var(--bs-border-radius-xxl) 0
                    var(--bs-border-radius-xxl);
                "></i>
            </div>
            <div
              class="fs-2 ms-4 pb-3 d-flex align-items-center"
              style="text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5) !important">
              香龙先进研发体系
              <i
                class="bi bi-arrow-right fs-1 ms-5 animate__animated animate__slideInLeft animate__infinite animate__slow"></i>
            </div>
          </div>
        </RouterLink>
      </UseElementVisibility>
    </swiper-slide>
  </VerticalParallaxSwiper>
</template>
<script lang="ts" setup>
  import { onMounted, onUnmounted, ref } from "vue";
  import { UseElementVisibility } from "@vueuse/components";

  document.title = "香龙香料企业文化";

  const removeClass = ref<any>([]);
  let timeOut: number;
  onMounted(() => {
    timeOut = setTimeout(() => {
      for (let item of removeClass.value) {
        item.classList.remove("animate__animated");
      }
    }, 3000);
    //observer配置项
    /* const observer = new IntersectionObserver(
      (entries) => {
        console.log(
          entries[0].isIntersecting,
          document.getElementsByClassName("学习氛围")[0]
        );
      },
      {
        threshold: 0, //目标元素与视窗重叠的阈值（0~1）
        root: null, // 目标视窗即目标元素的父元素，如果没有提供，则默认body元素
      }
    );
    observer.observe(document.getElementsByClassName("学习氛围")[0]); */
  });

  onUnmounted(() => {
    clearTimeout(timeOut);
  });

  // 数据-----------
  const text = ref([
    {
      title: "人性化管理",
      icon: "icon-jichuguanli",
      content:
        "我们推崇人性化的管理风格，尊重每一位员工的个性和需求。公司致力于创建一个和谐、温馨的工作环境，让每一位员工都能感受到家庭般的温暖和归属感。我们相信，只有在一个充满关怀和尊重的环境中，员工才能发挥出最大的潜力。",
    },
    {
      title: "团队精神",
      icon: "icon-tuandui",
      content:
        "凝聚的团队精神是香龙成功的关键。我们强调团队合作，鼓励员工之间的沟通与协作。无论是在日常工作中还是在面对挑战时，我们都坚信“团结就是力量”。通过团队的共同努力，我们能够实现更高的目标，克服更多的困难。",
    },
    {
      title: "学习氛围",
      icon: "icon-xuexi_nor",
      content:
        "我们营造了一个良好的学习氛围，鼓励员工不断提升自己。公司定期组织各种培训和学习活动，帮助员工掌握最新的行业知识和技能。我们相信，只有不断学习和进步，才能在激烈的市场竞争中立于不败之地。",
    },
    {
      title: "工作作风",
      icon: "icon-zuofengducha",
      content:
        "香龙的工作作风以高效著称。我们倡导快速反应和高效执行，要求员工在工作中做到精益求精，追求卓越。通过高效的工作作风，我们能够为客户提供更优质的服务，满足市场的需求。",
    },
    {
      title: "务实态度",
      icon: "icon-wushi",
      content:
        "务实的工作态度是我们一直以来的坚持。我们强调实际行动，反对空谈和形式主义。无论是产品研发、生产还是销售，我们都力求做到实事求是，以务实的态度解决实际问题。",
    },
    {
      title: "开拓创新",
      icon: "icon-kaituo-",
      content:
        "开拓创新是公司发展的源泉。我们鼓励员工大胆尝试，勇于创新，不断探索新的发展路径。通过技术创新和管理创新，我们能够为客户提供更多更好的产品和服务，推动公司的持续发展。",
    },
    {
      title: "质量为本",
      icon: "icon-zhiliang",
      content:
        "质量是公司发展的命脉。我们始终坚持“质量第一”的原则，严格控制每一个生产环节，确保产品的高品质。通过不断提升产品质量，我们赢得了客户的信任和市场的认可。",
    },
    {
      title: "社会进步",
      icon: "icon-shehuifuwu",
      content:
        "我们致力于推动社会进步，通过创新和高质量的产品，为社会创造更多的价值。",
    },
    {
      title: "共同发展",
      icon: "icon-huiyuanfazhanqushi",
      content:
        "我们强调与所有利益相关者的共同发展，致力于实现公司、员工和客户的共赢。",
    },
    {
      title: "员工幸福",
      icon: "icon-xingfuhua",
      content:
        "员工的幸福是我们最重要的财富。我们致力于为员工提供良好的工作环境和发展机会，让每一位员工都能在香龙实现自己的梦想。",
    },
  ]);
</script>
<style lang="scss" scoped>
  .Capitalized span {
    font-size: 5rem;
  }

  .animate__animated {
    --animate-delay: 300ms;
  }
  .CultureCard:hover {
    transform: scale(1.07);
    > div,
    > a {
      box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.75) !important;
      --bs-bg-opacity: 0.8 !important;
      > div {
        text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
      }
    }
    .iconfont {
      font-size: 6rem !important;
      text-shadow: 0 0 25px black;
    }
    .icon-yanfa {
      background: rgba(var(--bs-xlxl-rgb), 0.75);
    }
    .bgLabs {
      opacity: 1 !important;
    }
  }
</style>
