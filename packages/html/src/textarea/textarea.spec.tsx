import { classNames, States, Size, Roundness, FillMode } from '../misc';
import { KendoComponent } from '../_types/component';
import { TEXTAREA_FOLDER_NAME, TEXTAREA_MODULE_NAME } from './constants';
import {
    Input,
    InputInnerTextarea,
    InputPrefix,
    InputSeparator,
    InputSuffix,
} from '../input';

export const TEXTAREA_CLASSNAME = `k-textarea`;

const states = [
    States.hover,
    States.focus,
    States.valid,
    States.invalid,
    States.required,
    States.disabled
];

const options = {
    size: [ Size.small, Size.medium, Size.large ],
    rounded: [ Roundness.small, Roundness.medium, Roundness.large, Roundness.full ],
    fillMode: [ FillMode.solid, FillMode.flat, FillMode.outline ]
};

export type KendoTextareaOptions = {
    size?: (typeof options.size)[number] | null;
    rounded?: (typeof options.rounded)[number] | null;
    fillMode?: (typeof options.fillMode)[number] | null;
    resize?: "x" | "y" | "both" | "none";
};

export type KendoTextareaProps = KendoTextareaOptions & {
    prefix?: React.JSX.Element;
    suffix?: React.JSX.Element;
    prefixSeparator?: boolean;
    suffixSeparator?: boolean;
    rows?: number;
    value?: string;
    placeholder?: string;
    flow?: "vertical" | "horizontal";
    affixesOrientation?: "vertical" | "horizontal";
};

export type KendoTextareaState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    size: Input.defaultOptions.size,
    rounded: Input.defaultOptions.rounded,
    fillMode: Input.defaultOptions.fillMode,
    flow: "vertical",
    affixesOrientation: "horizontal",
    resize: "both",
    prefixSeparator: true,
    suffixSeparator: true
} as const;

export const Textarea: KendoComponent<KendoTextareaProps & KendoTextareaState & Omit<React.HTMLAttributes<HTMLSpanElement>, 'prefix'>> = (
    props: KendoTextareaProps &
        KendoTextareaState &
       Omit<React.HTMLAttributes<HTMLSpanElement>, 'prefix'>
) => {
    const {
        size = defaultOptions.size,
        rounded = defaultOptions.rounded,
        fillMode = defaultOptions.fillMode,
        prefixSeparator = defaultOptions.prefixSeparator,
        suffixSeparator = defaultOptions.prefixSeparator,
        affixesOrientation = defaultOptions.affixesOrientation,
        flow = defaultOptions.flow,
        resize = defaultOptions.resize,
        prefix,
        suffix,
        rows,
        value,
        placeholder,
        hover,
        focus,
        valid,
        invalid,
        required,
        disabled,
        ...other
    } = props;


    return (
        <Input
            size={size}
            rounded={rounded}
            fillMode={fillMode}
            hover={hover}
            focus={focus}
            valid={valid}
            invalid={invalid}
            required={required}
            disabled={disabled}
            className={
                classNames(
                    props.className,
                    TEXTAREA_CLASSNAME,
                    {
                        [`!k-flex-col`]: flow === "vertical",
                        [`!k-flex-row`]: flow === "horizontal"
                    }
                )
            }
        >
            {prefix &&
            <>
                <InputPrefix
                    className={classNames({
                        ["!k-align-items-start"]: flow === affixesOrientation
                    })}
                    direction={affixesOrientation} >
                    {prefix}
                </InputPrefix>
                {prefixSeparator && <InputSeparator direction={flow === "horizontal" ? "vertical" : "horizontal"}/>}
            </>
            }
            <InputInnerTextarea
                {...other}
                className={classNames(
                    "!k-overflow-auto",
                    {
                        ["!k-flex-none"]: flow === "vertical",
                        ["k-resize-x"]: resize === "x",
                        ["k-resize-y"]: resize === "y",
                        ["k-resize"]: resize === "both",
                        ["k-resize-none"]: resize === "none"
                    }
                )}
                value={value}
                placeholder={placeholder}
                rows={rows}
                disabled={disabled}
                required={required}
            />
            {suffix &&
            <>
                {suffixSeparator && <InputSeparator direction={flow === "horizontal" ? "vertical" : "horizontal"}/>}
                <InputSuffix
                    className={classNames({
                        ["!k-align-items-start"]: flow === affixesOrientation
                    })}
                    direction={affixesOrientation}>
                    {suffix}
                </InputSuffix>
            </>
            }
        </Input>
    );
};

Textarea.states = states;
Textarea.options = options;
Textarea.className = TEXTAREA_CLASSNAME;
Textarea.defaultOptions = defaultOptions;
Textarea.moduleName = TEXTAREA_MODULE_NAME;
Textarea.folderName = TEXTAREA_FOLDER_NAME;

export default Textarea;
