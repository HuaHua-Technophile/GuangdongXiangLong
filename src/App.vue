<template>
  <!-- 顶栏 -->
  <header class="vw-100 position-fixed top-0" style="z-index: 9999999">
    <div class="container">
      <div class="d-flex justify-content-between">
        <!-- 公司LOGO -->
        <div class="d-flex align-items-center py-1">
          <img
            src="./assets/image/LOGO.webp"
            style="width: 50px"
            class="me-1" />
          <div class="text-justify text-xlxl lh-1">
            <div
              class="fs-2 d-flex justify-content-between"
              style="font-family: qlls">
              <span>香</span><span>龍</span><span>香</span><span>料</span>
            </div>
            <div style="font-family: '宋体'">FRAGRANT DRAGON GROUP</div>
          </div>
        </div>
        <!-- 下拉菜单 -->
        <div
          v-for="i in header"
          class="DownLineAnim d-flex align-items-center position-relative fs-4"
          popper-class="bg-black bg-opacity-10">
          <div>{{ i.text }}</div>
          <!-- 子项 -->
          <div class="dropdown position-absolute">
            <div v-for="j in i.dropdown">{{ j }}</div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <RouterView />
</template>
<script lang="ts" setup>
  const header = [
    { text: "关于香龙", dropdown: ["集团简介", "企业文化"] },
    { text: "研发体系" },
    { text: "一流品控", dropdown: ["品质管理", "生产制造", "绿色产园"] },
    { text: "应用场景", dropdown: ["食用香精", "烟用香精"] },
    { text: "营销网络" },
  ];
</script>
<style lang="scss" scoped>
  .DownLineAnim {
    transition: 0.8s all; //color
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
    .dropdown {
      background: green;
      border-radius: 15px;
      opacity: 0;
      top: 110%;
      left: 0;
      transition: 0.8s all; //color opacity position
    }
    &:hover {
      color: var(--bs-xlxl);
      &::after {
        width: 100%;
      }
      .dropdown {
        opacity: 1;
        top: 100%;
      }
    }
  }
</style>
