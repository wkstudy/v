import _VButton from "./src/button.vue";
import type { IPlugin } from "../types/public";
import type { ExtractPropTypes, App } from "vue";
import props from "./src/props";

export const VButton: IPlugin<typeof _VButton> = _VButton as IPlugin<
  typeof _VButton
>;

VButton.install = (app: App) => {
  app.component(_VButton.name, _VButton);
};
export default VButton;
export type VButtonProps = ExtractPropTypes<typeof props>; // 导出prop ts定义
