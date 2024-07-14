import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// 设置路径别名
import { resolve } from "path";

// ElementPlus自动导入
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // https://github.com/nolimits4web/swiper/discussions/7333 Failed to resolve component: swiper-slide and swiper-container
          isCustomElement: (tag) => tag.includes("swiper"),
        },
      },
    }),

    // ElementPlus自动导入
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [
        ElementPlusResolver({
          //importStyle配置样式引入方式，自动引入修改主题色设置此属性
          // importStyle可以配置element-plus的样式引入方式，它默认是css，利用scss变量修改主题时，需要将这个属性设置为scss
          importStyle: "sass",
        }),
      ],
    }),
  ],

  // 设置路径别名
  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve(__dirname, "./src"),
      },
    ],
  },
});
