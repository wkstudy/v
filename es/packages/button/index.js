import { defineComponent, toRefs, openBlock, createElementBlock, normalizeClass, renderSlot, createTextVNode } from 'vue';

var props = {
    type: {
        type: String,
        default: 'default',
    },
};

var script = defineComponent({
    name: "VButton",
    props,
    setup(props) {
        const { type } = toRefs(props);
        return {
            type,
        };
    },
});

const _hoisted_1 = /*#__PURE__*/createTextVNode("默认按钮");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("button", {
    class: normalizeClass(['btn--' + _ctx.type, 'btn'])
  }, [
    renderSlot(_ctx.$slots, "default", {}, () => [
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

export { VButton, VButton as default };
