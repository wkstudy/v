import { defineComponent, toRefs, openBlock, createElementBlock, normalizeClass, toDisplayString } from 'vue';

var props = {
    mode: {
        type: String,
        default: "light",
    },
    title: {
        type: String,
        default: "title",
    },
    border: {
        type: Boolean,
        default: false,
    },
};

var script = defineComponent({
    name: "VCell",
    props,
    setup(props) {
        const { title, border, mode } = toRefs(props);
        return {
            title,
            border,
            mode,
        };
    },
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", {
    class: normalizeClass(['cell', _ctx.border ? 'cell--border' : '', `cell--${_ctx.mode}`])
  }, toDisplayString(_ctx.title), 3 /* TEXT, CLASS */))
}

script.render = render;
script.__scopeId = "data-v-c4f51bb4";
script.__file = "packages/cell/src/cell.vue";

// const _Cell: IPlugin<typeof Cell> = Cell as IPlugin<typeof Cell>;
const VCell = script;
VCell.install = (app) => {
    app.component(script.name, script);
};

export { VCell, VCell as default };
