# 一个 vue3 组件库

## 技术栈

vue3+ts+vite

## 快速上手

### 安装

```
npm i useful-ui
yarn add useful-ui
```

### 全局引入

```
import { createApp } from "vue";
import App from "./App.vue";
import v from "v";
import "v/es/index.css"

createApp(App).use(v).mount("#app");
```

### 按需引入(支持)

默认支持基于 ES modules 的 tree shaking，对于 js 部分，直接引入 import { VButton } from 'useful-ui' 就会有按需加载的效果。

#### vite

1. 安装`vite-plugin-style-import`

```
npm i vite-plugin-style-import -D
```

2. vite.config.ts 添加配置

```
import style from "vite-plugin-style-import";
...
export default defineConfig({
  ...
  plugins: [
    style({
      libs: [
        // 如果没有你需要的resolve，可以在lib内直接写，也可以给我们提供PR
        {
          libraryName: "useful-ui",
          esModule: true,
          resolveStyle: (name) => {
            return `useful-ui/es/index.css`;
          },
        },
      ],
    }),
  ]
})
```

3. 页面直接使用相应组件即可

```
import { VButton} from 'v''

```

#### webpack

1. 安装`babel-plugin-import`

```
npm install babel-plugin-import --save-dev
```

2. 在`.babelrc` 或 `babel.config.js` 中添加配置：
   （随着组件库的丰富，这里的配置可能需要更新）

```
plugins: [
    [
      "import",
      {
        libraryName: "useful-ui",
        libraryDirectory: "es/packages",
        camel2DashComponentName: false,
        customName: (name) => {
          return `useful-ui/es/packages/${name.slice(1).toLowerCase()}`;
        },
        style: () => {
          return "useful-ui/es/index.css";
        },
      },
    ],
  ],
```

3. 页面直接使用相应组件即可

```
import { VButton} from 'v''

```

## 注意

1. ts 类型定义不要写`.d.ts`,ts 编译会直接忽略此文件，导致打包结果缺失相关的`.d.ts`,原因可参考[Typescript does not copy d.ts files to build](https://stackoverflow.com/questions/56018167/typescript-does-not-copy-d-ts-files-to-build)
2. 及时更新`package.json`中的`sideEffects`字段

## 目录结构

```
├── README.md
├── examples              -- 运行代码
│   ├── App.vue
│   ├── assets
│   ├── components
│   ├── main.ts
│   ├── shims-vue.d.ts
│   └── vite-env.d.ts
├── index.html            --  入口文件
├── packages              -- 组件库
│   ├── button            -- 组件
│   │   ├── index.ts
│   │   └── src
│   │       ├── button.ts    -- 组件ts定义（如果需要）
│   │       └── button.vue  -- 组件
│   └── index.ts         -- 组件库整体导出
├── public
│   └── favicon.ico
├── tests                 -- 测试用例
│   └── button.spec.ts
├── tsconfig.json
├── vite.config.ts        -- 配置文件
└── yarn.lock

```

## todo
