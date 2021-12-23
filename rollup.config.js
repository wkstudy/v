import path from "path";
import glob from "fast-glob";
import vue from "rollup-plugin-vue";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
// import babel from 'rollup-plugin-babel';
import postcss from "rollup-plugin-postcss";
import typescript from "rollup-plugin-typescript2";

const entries = glob
  .sync(`${__dirname}/packages/**/index.ts`)
  .map((fileName) => {
    return [path.relative(__dirname, fileName).slice(0, -3), fileName];
  });

const config = {
  input: Object.fromEntries(entries),
  external: ["vue"],
  plugins: [
    typescript(),
    vue(),
    resolve(),
    commonjs(),
    postcss({
      extract: true,
    }),
  ],
  output: [
    {
      dir: "lib",
      format: "cjs",
      exports: "named",
      assetFileNames: "[name][extname]",
      entryFileNames: `[name].js`,
      chunkFileNames: `[name].js`,
    },
    {
      format: "esm",
      dir: "es",
      exports: "named",
      assetFileNames: "[name][extname]",
      entryFileNames: `[name].js`,
      chunkFileNames: `[name].js`,
    },
  ],
};

export default config;
