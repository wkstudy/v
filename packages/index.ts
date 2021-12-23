import * as components from "./components";
import type { App, Plugin } from "vue";
// export * from './components';
export * from "./components";

const install = (app: App, options?: any): void => {
  const _components = components as Record<string, Plugin>;
  // eslint-disable-next-line guard-for-in
  for (const key in _components) {
    const item = _components[key];
    app.use(item);
  }
};

export default { install };
