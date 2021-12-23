import _VButton from "./src/button.vue";
import type { IPlugin } from "../types/public";
import type { ExtractPropTypes } from "vue";
import props from "./src/props";
export declare const VButton: IPlugin<typeof _VButton>;
export default VButton;
export declare type VButtonProps = ExtractPropTypes<typeof props>;
