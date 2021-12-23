'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var props = {
    type: {
        type: String,
        default: 'default',
    },
};

var script = vue.defineComponent({
    name: "VButton",
    props,
    setup(props) {
        const { type } = vue.toRefs(props);
        return {
            type,
        };
    },
});

const _hoisted_1 = /*#__PURE__*/vue.createTextVNode("默认按钮");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("button", {
    class: vue.normalizeClass(['btn--' + _ctx.type, 'btn'])
  }, [
    vue.renderSlot(_ctx.$slots, "default", {}, () => [
      _hoisted_1
    ])
  ], 2 /* CLASS */))
}

script.render = render;
script.__scopeId = "data-v-ca859fb4";
script.__file = "packages/button/src/button.vue";

const VButton = script;
VButton.install = (app) => {
    app.component(script.name, script);
};

exports.VButton = VButton;
exports["default"] = VButton;
