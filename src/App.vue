<template>
  <!-- 顶栏 -->
  <Transition
    enter-active-class="animate__animated animate__fadeInDown animate__duration_1500"
    leave-active-class="animate__animated animate__fadeOutUp animate__duration_1500">
    <header
      class="vw-100 position-fixed top-0 bg-white bg-opacity-50 shadow"
      v-show="showHeader"
      style="z-index: 9999999">
      <div class="container">
        <div class="d-flex justify-content-between">
          <!-- 公司LOGO -->
          <RouterLink
            class="d-flex align-items-center py-1 text-decoration-none"
            to="/">
            <img src="/images/LOGO.webp" style="width: 50px" class="me-1" />
            <div class="text-justify text-xlxl lh-1">
              <div
                class="fs-2 d-flex justify-content-between"
                style="font-family: QinLiuLiShu">
                香<span>龍</span><span>香</span>料
              </div>
              <div
                class="Capitalized"
                style="font-family: Cinzel-Regular; font-size: 0.85rem">
                <span>F</span>RAGRANT <span>D</span>RAGON <span>C</span>O.
              </div>
            </div>
          </RouterLink>
          <!-- 下拉菜单 -->
          <div
            v-for="i in header"
            class="dropdownFather d-flex align-items-center position-relative fs-4 cursor-pointer"
            @mouseenter="showDropdown(i, true)"
            @mouseleave="showDropdown(i, false)">
            <!-- 有子项,不设置100%高度则鼠标与dropdown之间存在缝隙 -->
            <div v-if="i.dropdown" class="h-100 d-flex align-items-center">
              <div class="changeColor transition750">{{ i.text }}</div>
              <transition
                enter-active-class="animate__animated animate__faster animate__fadeInUp"
                leave-active-class="animate__animated animate__faster animate__fadeOutUp">
                <div
                  v-show="i.show"
                  class="position-absolute top-100 rounded-bottom shadow bg-white bg-opacity-75 fs-5 w-100">
                  <RouterLink
                    v-for="j in i.dropdown"
                    :to="j.url"
                    class="text-decoration-none d-block text-center py-1 mt-1 rounded text-xlxl changeColor changeBg transition500">
                    {{ j.text }}
                  </RouterLink>
                </div>
              </transition>
            </div>
            <!-- 没有子项 -->
            <RouterLink
              v-else
              :to="i.url"
              class="text-decoration-none text-black changeColor transition750">
              {{ i.text }}
            </RouterLink>
          </div>
        </div>
      </div>
    </header>
  </Transition>
  <RouterView v-slot="{ Component }" v-model:showHeader="showHeader">
    <transition
      mode="out-in"
      enter-active-class="animate__animated animate__fadeIn animate_faster"
      leave-active-class="animate__animated animate__fadeOut animate_faster">
      <component :is="Component" />
    </transition>
  </RouterView>
</template>
<script lang="ts" setup>
  import { ref } from "vue";
  import { throttle } from "lodash";
  const header = ref([
    {
      text: "关于香龙",
      dropdown: [
        { text: "集团简介", url: "/" },
        { text: "企业文化", url: "/Corporate_Culture" },
      ],
      show: false,
    },
    { text: "研发体系", url: "/RD_System" },
    {
      text: "一流品控",
      dropdown: [
        { text: "品质管理", url: "/Quality_Management" },
        { text: "生产制造", url: "/Manufacturing" },
        { text: "绿色产园", url: "/Green_Industrial_Park" },
      ],
      show: false,
    },
    {
      text: "应用场景",
      dropdown: [
        { text: "食用香精", url: "/Edible_Flavors" },
        { text: "烟用香精", url: "/Tobacco_Flavorings" },
      ],
      show: false,
    },
    { text: "营销网络", url: "/Sales_Network" },
  ]);
  const showHeader = ref(true);

  const showDropdown = throttle((i, target) => {
    i.show = target;
  }, 500);
</script>
<style lang="scss" scoped>
  .dropdownFather {
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 0;
      width: 0%;
      height: 10px;
      background: var(--bs-xlxl);
      transition: 0.8s all; //width
    }
    &:hover::after {
      width: 100%;
    }
  }
  .changeColor:hover {
    color: var(--bs-xlxl) !important;
  }
  .changeBg:hover {
    background-color: rgba(var(--bs-xlxl-rgb), 0.25);
  }
  .animate__duration_1500 {
    --animate-duration: 1500ms;
  }
  header {
    backdrop-filter: blur(10px);
  }
  .Capitalized span {
    font-size: 1.05rem;
  }
</style>
