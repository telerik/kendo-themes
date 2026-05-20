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
import a11ySpec from './behavior/accessibility.json';

export const SMART_BOX_CLASSNAME = `k-smart-box`;

const states = [
    States.hover,
    States.focus,
    States.disabled,
];

const options = {
    size: [Size.undefined, Size.small, Size.medium, Size.large],
    rounded: [Roundness.undefined, Roundness.none, Roundness.small, Roundness.medium, Roundness.large, Roundness.full],
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
    processing?: boolean;
    /** @aria aria-label for the combobox input */
    inputAriaLabel?: string;
    /** @aria aria-controls referencing the popup listbox ID */
    inputAriaControls?: string;
    /** @aria aria-activedescendant referencing the focused list item */
    inputAriaActiveDescendant?: string;
    /** @aria aria-autocomplete behavior */
    inputAriaAutocomplete?: 'list' | 'both' | 'inline' | 'none';
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
        processing,
        inputAriaLabel,
        inputAriaControls,
        inputAriaActiveDescendant,
        inputAriaAutocomplete,
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
                loading={processing}
                className={classNames(props.className, SMART_BOX_CLASSNAME)}
            >
                {prefix &&
                    <>
                        <InputPrefix>{prefix}</InputPrefix>
                        {separators && <InputSeparator />}
                    </>
                }
                <InputInnerInput
                    placeholder={placeholder}
                    value={value}
                    role="combobox"
                    aria-haspopup="listbox"
                    aria-expanded={opened ? 'true' : 'false'}
                    aria-autocomplete={inputAriaAutocomplete}
                    aria-controls={opened ? inputAriaControls : undefined}
                    aria-activedescendant={opened ? inputAriaActiveDescendant : undefined}
                    aria-label={inputAriaLabel}
                />
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

SmartBox.ariaSpec = a11ySpec.ariaSpec;

export default SmartBox;
