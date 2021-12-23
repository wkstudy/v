<template>
  <div :class="['cell', border ? 'cell--border' : '', `cell--${mode}`]">
    {{ title }}
  </div>
</template>
<script lang="ts">
import { defineComponent, toRefs } from "vue";
import props from "./props";
export default defineComponent({
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
</script>

<style scoped>
.cell {
  width: 30%;
}
.cell--border {
  border: 1px solid #333;
}
.cell--light {
  background-color: #fff;
}
.cell--dark {
  background-color: black;
  color: white;
}
</style>
