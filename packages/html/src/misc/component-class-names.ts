import { classNames } from './class-names';

export const optionClassNames = (componentClassName: string, props: any) => {
    return classNames(
        {
            [`${componentClassName}-xs`]: props.size === "xsmall",
            [`${componentClassName}-sm`]: props.size === "small",
            [`${componentClassName}-md`]: props.size === "medium",
            [`${componentClassName}-lg`]: props.size === "large",
            [`${componentClassName}-xl`]: props.size === "xlarge",
            [`${componentClassName}-xxl`]: props.size === "xxlarge",
            [`${componentClassName}-xxxl`]: props.size === "xxxlarge"
        },
        {
            [`${componentClassName}-${props.fillMode}`]: props.fillMode,
        },
        {
            [`${componentClassName}-${props.fillMode}-${props.themeColor}`]:
            props.fillMode && props.themeColor,
        },
        {
            [`${componentClassName}-${props.themeColor}`]:
            props.themeColor && props.fillMode === undefined,
        },
        {
            'k-rounded-sm': props.rounded === "small",
            'k-rounded-md': props.rounded === "medium",
            'k-rounded-lg': props.rounded === "large",
            'k-rounded-full': props.rounded === "full",
        }
    );
};

export const stateClassNames = (_componentClassName: string | undefined, props: any) => {
    return classNames({
        'k-valid': props.valid,
        'k-invalid': props.invalid,
        'k-hover': props.hover,
        'k-focus': props.focus,
        'k-checked': props.checked,
        'k-active': props.active,
        'k-selected': props.selected,
        'k-disabled': props.disabled,
        'k-indeterminate': props.indeterminate && !props.checked,
        'k-loading': props.loading,
        'k-empty': props.empty,
        'k-readonly': props.readonly,
        'k-highlighted': props.highlighted,
    });
};
