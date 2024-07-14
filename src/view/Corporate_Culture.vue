<template>
  <VerticalParallaxSwiper
    :bgParallax="'-50%'"
    :bgHeight="'220%'"
    :free-mode="true"
    :mousewheel-sensitivity="0.05">
    <FirstSlide
      bg="CorporateCulture1.webp"
      title="<span>C</span>orporate<br /><span>C</span>ulture."
      content="在香龙集团，我们深信企业文化是公司发展的基石。我们的企业文化不仅仅是一些口号或标语，而是贯穿于每个员工日常工作中的核心价值观和行为准则。" />
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
        :width="i.width" />
    </swiper-slide>
    <!-- 页脚 -->
  </VerticalParallaxSwiper>
</template>
<script lang="ts" setup>
  import { ref } from "vue";

  document.title = "香龙香料企业文化";

  // 数据-----------
  const text = ref([
    {
      title: "人性化管理",
      icon: "iconfont icon-jichuguanli",
      content:
        "我们推崇人性化的管理风格，尊重每一位员工的个性和需求。公司致力于创建一个和谐、温馨的工作环境，让每一位员工都能感受到家庭般的温暖和归属感。我们相信，只有在一个充满关怀和尊重的环境中，员工才能发挥出最大的潜力。",
    },
    {
      title: "团队精神",
      icon: "iconfont icon-tuandui",
      content:
        "凝聚的团队精神是香龙成功的关键。我们强调团队合作，鼓励员工之间的沟通与协作。无论是在日常工作中还是在面对挑战时，我们都坚信“团结就是力量”。通过团队的共同努力，我们能够实现更高的目标，克服更多的困难。",
    },
    {
      title: "学习氛围",
      icon: "iconfont icon-xuexi_nor",
      content:
        "我们营造了一个良好的学习氛围，鼓励员工不断提升自己。公司定期组织各种培训和学习活动，帮助员工掌握最新的行业知识和技能。我们相信，只有不断学习和进步，才能在激烈的市场竞争中立于不败之地。",
    },
    {
      title: "工作作风",
      icon: "iconfont icon-zuofengducha",
      content:
        "香龙的工作作风以高效著称。我们倡导快速反应和高效执行，要求员工在工作中做到精益求精，追求卓越。通过高效的工作作风，我们能够为客户提供更优质的服务，满足市场的需求。",
    },
    {
      title: "务实态度",
      icon: "iconfont icon-wushi",
      content:
        "务实的工作态度是我们一直以来的坚持。我们强调实际行动，反对空谈和形式主义。无论是产品研发、生产还是销售，我们都力求做到实事求是，以务实的态度解决实际问题。",
    },
    {
      title: "开拓创新",
      icon: "iconfont icon-kaituo-",
      content:
        "开拓创新是公司发展的源泉。我们鼓励员工大胆尝试，勇于创新，不断探索新的发展路径。通过技术创新和管理创新，我们能够为客户提供更多更好的产品和服务，推动公司的持续发展。",
    },
    {
      title: "质量为本",
      icon: "iconfont icon-zhiliang",
      content:
        "质量是公司发展的命脉。我们始终坚持“质量第一”的原则，严格控制每一个生产环节，确保产品的高品质。通过不断提升产品质量，我们赢得了客户的信任和市场的认可。",
    },
    {
      title: "社会进步",
      icon: "iconfont icon-shehuifuwu",
      content:
        "我们致力于推动社会进步，通过创新和高质量的产品，为社会创造更多的价值。",
    },
    {
      title: "共同发展",
      icon: "iconfont icon-huiyuanfazhanqushi",
      content:
        "我们强调与所有利益相关者的共同发展，致力于实现公司、员工和客户的共赢。",
    },
    {
      title: "员工幸福",
      icon: "iconfont icon-xingfuhua",
      content:
        "员工的幸福是我们最重要的财富。我们致力于为员工提供良好的工作环境和发展机会，让每一位员工都能在香龙实现自己的梦想。",
    },
    {
      to: "/RD_System",
      title: "香龙先进研发体系",
      icon: "iconfont icon-yanfa",
      bg: "Labs/Labs1.webp",
      width: 33,
    },
  ]);
</script>
