import { classNames, States, Size, Roundness, FillMode } from '../misc';
import {
    Input,
    InputPrefix,
    InputSuffix,
    InputInnerInput,
    InputSeparator
} from '../input';
import { Popup } from '../popup';
import { KendoComponent } from '../_types/component';
import { SMART_BOX_FOLDER_NAME, SMART_BOX_MODULE_NAME } from './constants';

export const SMART_BOX_CLASSNAME = `k-smart-box`;

const states = [
    States.hover,
    States.focus,
    States.disabled,
];

const options = {
    size: [Size.undefined, Size.small, Size.medium, Size.large],
    rounded: [Roundness.undefined, Roundness.small, Roundness.medium, Roundness.large, Roundness.full],
    fillMode: [FillMode.undefined, FillMode.solid, FillMode.flat, FillMode.outline],
};

export type KendoSmartBoxOptions = {
    size?: (typeof options.size)[number] | null;
    rounded?: (typeof options.rounded)[number] | null;
    fillMode?: (typeof options.fillMode)[number] | null;
};

export type KendoSmartBoxProps = KendoSmartBoxOptions & {
    prefix?: React.JSX.Element;
    suffix?: React.JSX.Element;
    separators?: boolean;
    value?: string;
    placeholder?: string;
    popup?: React.JSX.Element;
    opened?: boolean;
};

export type KendoSmartBoxState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    separators: true
};

export const SmartBox: KendoComponent<KendoSmartBoxProps & KendoSmartBoxState & Omit<React.HTMLAttributes<HTMLSpanElement>, 'prefix'>> = (
    props: KendoSmartBoxProps &
        KendoSmartBoxState &
        Omit<React.HTMLAttributes<HTMLSpanElement>, 'prefix'>
) => {
    const {
        size,
        rounded,
        fillMode,
        separators = defaultOptions.separators,
        prefix,
        suffix,
        value,
        placeholder,
        hover,
        focus,
        disabled,
        popup,
        opened,
        ...other
    } = props;

    return (
        <>
            <Input
                {...other}
                size={size}
                rounded={rounded}
                fillMode={fillMode}
                hover={hover}
                focus={focus}
                disabled={disabled}
                className={classNames(props.className, SMART_BOX_CLASSNAME)}
            >
                {prefix &&
                    <>
                        <InputPrefix>{prefix}</InputPrefix>
                        {separators && <InputSeparator />}
                    </>
                }
                <InputInnerInput placeholder={placeholder} value={value} />
                {suffix &&
                    <>
                        {separators && <InputSeparator />}
                        <InputSuffix>{suffix}</InputSuffix>
                    </>
                }
            </Input>
            {opened && popup &&
                <Popup className="k-smart-box-popup">
                    {popup}
                </Popup>
            }
        </>
    );
};

SmartBox.states = states;
SmartBox.options = options;
SmartBox.className = SMART_BOX_CLASSNAME;
SmartBox.defaultOptions = defaultOptions;
SmartBox.moduleName = SMART_BOX_MODULE_NAME;
SmartBox.folderName = SMART_BOX_FOLDER_NAME;

export default SmartBox;
