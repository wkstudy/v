// 组件props 定义
import { PropType } from 'vue';
import { BtnType } from './data';

export default {
  type: {
    type: String as PropType<BtnType>,
    default: 'default',
  },
};
