# 一个 vue3 组件库

## 技术栈

vue3+ts+vite

## 快速上手

### 安装

```
npm i v
yarn add v
```

### 全局引入

```
import { createApp } from "vue";
import App from "./App.vue";
import v from "v";
import "v/lib/index.css"

createApp(App).use(v).mount("#app");
```

### 按需引入(支持)

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
