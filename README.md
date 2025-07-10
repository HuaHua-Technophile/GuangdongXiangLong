<p align="center">
  <a href="#">
    <img src="https://imglink.win/image/2025/07/11/GWZNI.webp" alt="广东香龙香料有限公司 LOGO" width="200">
  </a>
</p>
<h1 align="center">广东香龙香料有限公司企业官网</h1>
<p align="center">
  <img src="https://img.shields.io/badge/Vue.js-3.5-4FC08D?style=flat&logo=vue.js" alt="Vue 3">
  <a href="https://github.com/HuaHua-Technophile/GuangdongXiangLong">
    <img src="https://img.shields.io/github/repo-size/HuaHua-Technophile/GuangdongXiangLong?style=flat" alt="Repo Size">
  </a>
  <a href="https://github.com/HuaHua-Technophile/GuangdongXiangLong/stargazers">
    <img src="https://img.shields.io/github/stars/HuaHua-Technophile/GuangdongXiangLong?style=flat&logo=github" alt="GitHub stars">
  </a>
  <a href="https://github.com/HuaHua-Technophile/GuangdongXiangLong/network/members">
    <img src="https://img.shields.io/github/forks/HuaHua-Technophile/GuangdongXiangLong?style=flat&logo=github" alt="GitHub forks">
  </a>
</p>

一个为广东香龙香料有限公司打造的现代化企业官网。项目基于 Vue 3 + Vite 构建，旨在通过动态、优雅的界面，全面展示公司的雄厚实力、深厚文化底蕴、先进研发体系及全球化营销网络。

## ✨ 功能特性

- **现代化界面**：采用响应式设计，适配不同尺寸的设备，提供卓越的用户体验。
- **丰富的动画效果**：基于 `Swiper.js` 和 `Animate.css`，实现平滑的页面过渡和引人入胜的视觉元素动画。
- **组件化开发**：遵循 Vue 3 组合式 API (Composition API) 与 `script setup` 范式，代码结构清晰、可维护性高。
- **极致的性能**：通过 `unplugin-auto-import` 和 `unplugin-vue-components` 实现组件和 API 的自动按需导入，优化加载性能。
- **清晰的导航**：内容覆盖集团简介、企业文化、研发体系、品质管理、绿色产园、产权专利、食用香精、烟用香精及营销网络等板块，结构一目了然。

## 🛠️ 技术栈

| 分类               | 技术栈                                                                                                                                                                                                                                                                                                                                                                                                             |
| :----------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **核心框架与工具** | <img src="https://img.shields.io/badge/Vue.js-3.5-4FC08D?style=flat&logo=vue.js" alt="Vue 3"> <img src="https://img.shields.io/badge/Vite-7.0-646CFF?style=flat&logo=vite" alt="Vite"> <img src="https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat&logo=typescript" alt="TypeScript"> <img src="https://img.shields.io/badge/Vue_Router-4.5-4FC08D?style=flat&logo=vue.js" alt="Vue Router">           |
| **UI 与样式**      | <img src="https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=flat&logo=bootstrap" alt="Bootstrap 5"> <img src="https://img.shields.io/badge/Sass-1.89-CC6699?style=flat&logo=sass" alt="Sass"> <img src="https://img.shields.io/badge/Element_Plus-2.10-409EFF?style=flat&logo=element-plus" alt="Element Plus"> <img src="https://img.shields.io/badge/Animate.css-4.1-3B4A68?style=flat" alt="Animate.css"> |
| **生态与工具库**   | <img src="https://img.shields.io/badge/Swiper-11.2-6332F6?style=flat&logo=swiper" alt="Swiper"> <img src="https://img.shields.io/badge/CountUp.js-2.9-F39F18?style=flat" alt="CountUp.js"> <img src="https://img.shields.io/badge/@vueuse/core-13.5-4FC08D?style=flat&logo=vueuse" alt="@vueuse/core"> <img src="https://img.shields.io/badge/Lodash-4.17-3492FF?style=flat&logo=lodash" alt="Lodash">             |

## 🚀 本地开发

本项目使用 `pnpm` 作为标准的包管理器，以确保依赖版本的一致性与安装效率。请确保您的开发环境中已安装 [Node.js](https://nodejs.org/) (推荐 v18+)。

1.  **安装 pnpm** (若未安装)

    建议通过 `npm` 进行全局安装：

    ```bash
    npm install -g pnpm
    ```

    更多安装方式请参考 [pnpm 官方文档](https://pnpm.io/installation)。

2.  **克隆项目**

    ```bash
    git clone https://github.com/HuaHua-Technophile/GuangdongXiangLong.git
    cd GuangdongXiangLong
    ```

3.  **安装依赖**

    ```bash
    pnpm install
    ```

4.  **运行脚本**
    - `pnpm dev`：启动本地开发服务器。
    - `pnpm build`：使用 TypeScript 编译器 (`vue-tsc`) 进行类型检查，并打包项目到 `dist` 目录用于生产环境。
    - `pnpm preview`：在本地预览生产环境构建后的项目。

## 📁 项目结构

```
.
├── public/                # 静态资源，如图片等
├── src/
│   ├── assets/            # 静态资源，如字体、样式文件
│   ├── components/        # 可复用的 Vue 组件
│   ├── router/            # Vue Router 路由配置
│   ├── style/             # 全局样式文件
│   ├── util/              # 工具函数
│   ├── view/              # 页面级 Vue 组件
│   ├── App.vue            # 应用根组件
│   └── main.ts            # 应用入口文件
├── index.html             # HTML 入口文件
├── package.json           # 项目元数据和依赖管理
└── vite.config.ts         # Vite 配置文件
```

## 🖼️ 预览图

<table>
  <tr>
    <td><img src="https://imglink.win/image/2025/07/10/GW0YM.webp" width="100%"></td>
    <td><img src="https://imglink.win/image/2025/07/10/GWToJ.webp" width="100%"></td>
    <td><img src="https://imglink.win/image/2025/07/10/GBqU3.webp" width="100%"></td>
  </tr>
  <tr>
    <td><img src="https://imglink.win/image/2025/07/10/GBgSB.webp" width="100%"></td>
    <td><img src="https://imglink.win/image/2025/07/10/GBVBF.webp" width="100%"></td>
    <td><img src="https://imglink.win/image/2025/07/10/GB311.webp" width="100%"></td>
  </tr>
  <tr>
    <td><img src="https://imglink.win/image/2025/07/10/GBXli.webp" width="100%"></td>
    <td><img src="https://imglink.win/image/2025/07/10/GBUL7.webp" width="100%"></td>
    <td><img src="https://imglink.win/image/2025/07/10/GBGZn.webp" width="100%"></td>
  </tr>
  <tr>
    <td><img src="https://imglink.win/image/2025/07/10/GBCtQ.webp" width="100%"></td>
    <td><img src="https://imglink.win/image/2025/07/10/GB2Ep.webp" width="100%"></td>
    <td><img src="https://imglink.win/image/2025/07/10/GBxoj.webp" width="100%"></td>
  </tr>
  <tr>
    <td><img src="https://imglink.win/image/2025/07/10/GBpUE.webp" width="100%"></td>
    <td><img src="https://imglink.win/image/2025/07/10/GBOJC.webp" width="100%"></td>
    <td><img src="https://imglink.win/image/2025/07/10/GBfBo.webp" width="100%"></td>
  </tr>
  <tr>
    <td><img src="https://imglink.win/image/2025/07/10/GB7q6.webp" width="100%"></td>
    <td><img src="https://imglink.win/image/2025/07/10/GBlPX.webp" width="100%"></td>
    <td><img src="https://imglink.win/image/2025/07/10/GBPLy.webp" width="100%"></td>
  </tr>
  <tr>
    <td><img src="https://imglink.win/image/2025/07/10/GBKAm.webp" width="100%"></td>
    <td><img src="https://imglink.win/image/2025/07/10/GBzpg.webp" width="100%"></td>
    <td><img src="https://imglink.win/image/2025/07/10/GBmE9.webp" width="100%"></td>
  </tr>
  <tr>
    <td><img src="https://imglink.win/image/2025/07/10/GBSRP.webp" width="100%"></td>
    <td><img src="https://imglink.win/image/2025/07/10/GBHU0.webp" width="100%"></td>
    <td><img src="https://imglink.win/image/2025/07/10/GB6JL.webp" width="100%"></td>
  </tr>
  <tr>
    <td><img src="https://imglink.win/image/2025/07/10/GBv5f.webp" width="100%"></td>
    <td><img src="https://imglink.win/image/2025/07/10/GBYqZ.webp" width="100%"></td>
    <td><img src="https://imglink.win/image/2025/07/10/GBEPs.webp" width="100%"></td>
  </tr>
  <tr>
    <td><img src="https://imglink.win/image/2025/07/10/GBDwx.webp" width="100%"></td>
    <td><img src="https://imglink.win/image/2025/07/10/GBsAI.webp" width="100%"></td>
    <td><img src="https://imglink.win/image/2025/07/10/GBQpu.webp" width="100%"></td>
  </tr>
  <tr>
    <td><img src="https://imglink.win/image/2025/07/10/GBNDG.webp" width="100%"></td>
    <td><img src="https://imglink.win/image/2025/07/10/GBLRM.webp" width="100%"></td>
    <td><img src="https://imglink.win/image/2025/07/10/GBiGJ.webp" width="100%"></td>
  </tr>
    <tr>
    <td><img src="https://imglink.win/image/2025/07/10/GBeH3.webp" width="100%"></td>
    <td></td>
    <td></td>
  </tr>
</table>
