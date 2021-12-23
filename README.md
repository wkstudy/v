# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur). Make sure to enable `vetur.experimental.templateInterpolationService` in settings!

### If Using `<script setup>`

[`<script setup>`](https://github.com/vuejs/rfcs/pull/227) is a feature that is currently in RFC stage. To get proper IDE support for the syntax, use [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) instead of Vetur (and disable Vetur).

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can use the following:

### If Using Volar

Run `Volar: Switch TS Plugin on/off` from VSCode command palette.

### If Using Vetur

1. Install and add `@vuedx/typescript-plugin-vue` to the [plugins section](https://www.typescriptlang.org/tsconfig#plugins) in `tsconfig.json`
2. Delete `src/shims-vue.d.ts` as it is no longer needed to provide module info to Typescript
3. Open `src/main.ts` in VSCode
4. Open the VSCode command palette
5. Search and run "Select TypeScript version" -> "Use workspace version"

## 注意
1. ts类型定义不要写`.d.ts`,ts编译会直接忽略此文件，导致打包结果缺失相关的`.d.ts`,原因可参考[Typescript does not copy d.ts files to build](https://stackoverflow.com/questions/56018167/typescript-does-not-copy-d-ts-files-to-build)
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
