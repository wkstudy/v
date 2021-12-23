import { PropType } from "vue";

export type modeType = "light" | "dark";

export default {
  mode: {
    type: String as PropType<modeType>,
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
