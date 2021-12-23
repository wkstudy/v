import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import glob from "fast-glob";
import dts from "vite-plugin-dts";
import process from "process";

const entries = glob
  .sync(`${__dirname}/packages/**/index.ts`)
  .map((fileName) => {
    return [path.relative(__dirname, fileName).slice(0, -3), fileName];
  });

export default defineConfig({
  publicDir: "public",
  plugins: [vue(), dts()],
  build: {
    assetsDir: ".",
    lib: {
      entry: "packages/index.ts",
      formats: ["cjs", "es"],
    },
    outDir: process.env.buildtype === "cjs" ? "./lib" : "./es",
    minify: false,
    sourcemap: true,
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      // external: ['vue', 'vant'],
      input: Object.fromEntries(entries),
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        assetFileNames: "[name][extname]",
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
      },
    },
  },
});
