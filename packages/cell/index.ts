import _VCell from "./src/cell.vue";
import props from "./src/props";
import type { IPlugin } from "../types/public";
import type { App, ExtractPropTypes } from "vue";

// const _Cell: IPlugin<typeof Cell> = Cell as IPlugin<typeof Cell>;

export const VCell: IPlugin<typeof _VCell> = _VCell as IPlugin<typeof _VCell>;
VCell.install = (app: App) => {
  app.component(_VCell.name, _VCell);
};
export default VCell; // 导出组件
export type VCellProps = ExtractPropTypes<typeof props>; // 导出prop ts定义
