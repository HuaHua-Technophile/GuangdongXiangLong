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
      resolvers: [ElementPlusResolver()],
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
