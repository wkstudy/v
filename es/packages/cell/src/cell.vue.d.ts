declare const _default: import("vue").DefineComponent<{
    mode: {
        type: import("vue").PropType<import("./props").modeType>;
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
}, {
    title: import("vue").Ref<string>;
    border: import("vue").Ref<boolean>;
    mode: import("vue").Ref<import("./props").modeType>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    mode?: unknown;
    title?: unknown;
    border?: unknown;
} & {
    title: string;
    mode: import("./props").modeType;
    border: boolean;
} & {}>, {
    title: string;
    mode: import("./props").modeType;
    border: boolean;
}>;
export default _default;
