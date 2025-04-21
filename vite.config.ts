import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";
//  element-plus 组件自动导入
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
// 自动导入图标
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";

const pathSrc = path.resolve(__dirname, "src");
// https://vite.dev/config/
export default defineConfig({
  publicDir: "public",
  base: "./",
  plugins: [
    vue(),
    AutoImport({
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ["vue"],
      resolvers: [
        ElementPlusResolver(),
        // 自动导入图标组件
        IconsResolver({
          prefix: "Icon",
        }),
      ],
      dts: path.resolve(pathSrc, "auto-imports.d.ts"),
    }),
    Components({
      resolvers: [
        // 自动注册图标组件
        IconsResolver({
          enabledCollections: ["ep"],
        }),
        ElementPlusResolver(),
      ],
      dts: path.resolve(pathSrc, "components.d.ts"),
    }),
    Icons({
      autoInstall: true,
    }),
  ],
  resolve: {
    //别名配置，引用src路径下的东西可以通过@如：import Layout from '@/layout/index.vue'
    alias: [
      {
        find: "@",
        replacement: pathSrc,
      },
    ],
  },
});
