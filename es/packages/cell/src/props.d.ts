import { PropType } from "vue";
export declare type modeType = "light" | "dark";
declare const _default: {
    mode: {
        type: PropType<modeType>;
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export default _default;
