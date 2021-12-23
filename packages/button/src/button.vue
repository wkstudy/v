<template>
  <button :class="['btn--' + type, 'btn']">
    <slot>默认按钮</slot>
  </button>
</template>
<script lang="ts">
import { defineComponent, toRefs } from "vue";
import props from "./props";
export default defineComponent({
  name: "VButton",
  props,
  setup(props) {
    const { type } = toRefs(props);

    return {
      type,
    };
  },
});
</script>

<style scoped>
.btn {
  border: 1px solid #dcdfe6;
}
.btn--default {
  background-color: #fff;
}
.btn--primary {
  background-color: #409eff;
}
.btn--success {
  background-color: #67c23a;
}
.btn--danger {
  background-color: #f56c6c;
}
</style>
