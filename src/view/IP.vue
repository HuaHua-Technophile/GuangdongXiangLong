<template>
  <VerticalParallaxSwiper>
    <FirstSlide
      title="<span>I</span>ntellectual <span>P</span>roperty<br/><span>A</span>nd <span>Q</span>ualifications."
      content="香龙香料在技术创新领域成果丰硕,截至2020年7月30日,公司共获得36项专利权,其中包括1项发明专利和35项实用新型专利。这些专利技术涉及多个领域,如植物提取、香料生产、蒸馏提取和烘干设备等,充分体现了公司在行业内的领先地位和雄厚的技术实力。" />
    <!-- 文案 -->
    <swiper-slide
      class="position-relative d-flex align-items-center justify-content-center">
      <img
        loading="lazy"
        v-lazy="`/images/certificates1.webp`"
        class="w-100 h-100 position-absolute object-fit-cover"
        style="
          filter: brightness(0.3);
          z-index: -1;
          object-position: center;
          mask-image: linear-gradient(
            0deg,
            transparent 0%,
            black 15%,
            black 85%,
            transparent 100%
          );
        "
        data-swiper-parallax="-200" />
      <div
        class="text-white fs-3"
        style="
          max-width: var(--content-max-width);
          padding: 8rem 0 4rem 0;
          text-shadow: 0 0 5px black;
          text-indent: 4rem;
        ">
        <div class="mb-5">
          其中,发明专利"对植物茎叶中黄酮的快速提取的设备及其工作方法"展现了公司在天然植物提取领域的创新能力。实用新型专利如"一种香精香料生产用搅拌桶"、"用于香精提取的水蒸气蒸馏装置"、"一种香精香料烘干用设备"等,则反映了公司在生产工艺和设备改进方面的卓越成就。
        </div>
        <div>
          这些专利技术的获得不仅彰显了香龙公司在研发创新方面的持续投入,更为公司在日益激烈的市场竞争中占据了先机。未来,公司将继续加大研发力度,不断推出新的专利技术,为客户提供更高质量、更环保、更高效的产品和服务,巩固并扩大公司在行业内的领先优势。
        </div>
      </div>
    </swiper-slide>
    <!-- 公司专利Swiper+imgPreview -->
    <swiper-slide class="d-flex flex-column">
      <SlideTitle :pt="true">香龙香料产权专利</SlideTitle>
      <swiper-container
        ref="swiperInside"
        :init="false"
        :navigation="true"
        :pagination="true"
        :pagination-clickable="true"
        :keyboard="false"
        :slides-per-view="'auto'"
        :centered-slides="true"
        :rewind="true"
        :autoplay-delay="2500"
        :effect="'coverflow'"
        :coverflow-effect-rotate="30"
        :coverflow-effect-stretch="0"
        :coverflow-effect-depth="100"
        :coverflow-effect-modifier="1"
        :coverflow-effect-slide-shadows="true"
        class="flex-grow-1 w-100 overflow-hidden">
        <swiper-slide
          v-for="i in 16"
          class="h-100 w-auto d-flex align-items-center justify-content-center rounded-5 overflow-hidden"
          style="aspect-ratio: 10 / 16">
          <el-image
            loading="lazy"
            class="w-75 h-75 FloatShadow transition750 rounded shadow"
            :src="`/images/IP/IP${i}.jpg`"
            fit="cover"
            :preview-src-list="
              [...Array(16).keys()].map((num) => `/images/IP/IP${num + 1}.webp`)
            "
            :initial-index="i - 1"
            :preview-teleported="true" />
        </swiper-slide>
      </swiper-container>
    </swiper-slide>
    <!-- 公司资质 -->
    <swiper-slide class="d-flex flex-column">
      <SlideTitle :pt="true">香龙香料所获资质</SlideTitle>
      <LiveShotSwiper
        :length="16"
        :thumbPathPrefix="'/images/LiveShot/AcquiredQualifications'"
        :thumbPathSuffix="'.jpg'"
        :origPathPrefix="'/images/LiveShot/AcquiredQualifications'"
        :origPathSuffix="'.webp'" />
    </swiper-slide>
  </VerticalParallaxSwiper>
</template>
<script lang="ts" setup>
  import { SwiperContainer } from "swiper/element";
  import { onMounted, ref } from "vue";

  document.title = "香龙产权专利";

  const swiperInside = ref<SwiperContainer>();

  onMounted(() => {
    // swiper注入样式后延迟实例化
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

  /* `function*` 是JavaScript中用于定义生成器函数（Generator Function）的语法。生成器函数是ES6（ECMAScript 2015）引入的一个强大特性。让我为您详细解释一下：

1. 基本概念：
   生成器函数在执行时会返回一个特殊的迭代器，称为生成器对象。这个对象可以被用来控制生成器函数的执行。

2. 语法：
   ```javascript
   function* generatorFunction() {
     // 函数体
   }
   ```
   星号`*`可以紧跟在`function`关键字后面，也可以在函数名之前，两种写法都是有效的。

3. yield关键字：
   生成器函数使用`yield`关键字来暂停和恢复执行。每次遇到`yield`，函数的执行将被暂停，并返回`yield`后面的值。

4. 特点：
   - 可以暂停执行
   - 可以多次返回值
   - 内部状态可以保持

5. 使用示例：
   ```javascript
   function* countUp() {
     yield 1;
     yield 2;
     yield 3;
   }

   const generator = countUp();
   console.log(generator.next().value); // 1
   console.log(generator.next().value); // 2
   console.log(generator.next().value); // 3
   ```

6. 迭代：
   生成器对象是可迭代的，可以使用for...of循环：
   ```javascript
   for (let value of countUp()) {
     console.log(value);
   }
   // 输出：1, 2, 3
   ```

7. 用途：
   - 实现异步编程
   - 无限序列
   - 惰性求值
   - 状态机

8. 无限序列示例：
   ```javascript
   function* infiniteSequence() {
     let i = 0;
     while(true) {
       yield i++;
     }
   }

   const generator = infiniteSequence();
   console.log(generator.next().value); // 0
   console.log(generator.next().value); // 1
   // ... 可以无限继续
   ```

生成器函数提供了一种新的控制流结构，特别适合处理异步操作和大型数据集。它们允许您以一种更自然的方式编写可暂停的函数，这在某些场景下可以大大简化代码结构和提高性能。 
 function* naturalNumbers(n: number) {
    for (let i = 1; i <= n; i++) {
      yield i;
    }
  }

  const numbers = [...naturalNumbers(16)]; */
</script>
<style lang="scss" scoped>
  .FloatShadow:hover {
    transform: scale(1.04);
    box-shadow: 3px 3px 7px black;
  }
</style>
