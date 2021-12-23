import _VCell from "./src/cell.vue";
import props from "./src/props";
import type { IPlugin } from "../types/public";
import type { ExtractPropTypes } from "vue";
export declare const VCell: IPlugin<typeof _VCell>;
export default VCell;
export declare type VCellProps = ExtractPropTypes<typeof props>;
