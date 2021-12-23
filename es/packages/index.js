import { VButton } from './button/index.js';
export { VButton } from './button/index.js';
import { VCell } from './cell/index.js';
export { VCell } from './cell/index.js';
import 'vue';

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  VButton: VButton,
  VCell: VCell
});

const install = (app, options) => {
    const _components = components;
    // eslint-disable-next-line guard-for-in
    for (const key in _components) {
        const item = _components[key];
        app.use(item);
    }
};
var index = { install };

export { index as default };
