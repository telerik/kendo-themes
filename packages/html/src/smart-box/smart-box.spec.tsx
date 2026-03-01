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

/**
 * @see List ariaSpec for popup listbox content
 * @see SpeechToTextButton ariaSpec for voice input button
 * @see Button ariaSpec for base button accessibility
 */
SmartBox.ariaSpec = {
    selector: '.k-smart-box',
    rules: [
        { selector: '.k-smart-box .k-input-inner', attribute: 'role=combobox', usage: 'Announces the combobox role for the smart box input.' },
        { selector: '.k-smart-box .k-input-inner', attribute: 'aria-label or aria-labelledby', usage: 'Provides an accessible label for the smart box (e.g. "AI-powered search").' },
        { selector: '.k-smart-box .k-input-inner', attribute: 'aria-expanded', usage: 'Indicates whether the suggestion popup is currently visible.' },
        { selector: '.k-smart-box .k-input-inner', attribute: 'aria-haspopup=listbox', usage: 'Indicates that the smart box has a popup listbox with suggestions.' },
        { selector: '.k-smart-box .k-input-inner[aria-controls]', attribute: 'aria-controls', usage: 'References the ID of the popup listbox element when open.' },
        { selector: '.k-smart-box .k-input-inner[aria-autocomplete]', attribute: 'aria-autocomplete', usage: 'Indicates the autocomplete behavior of the input field.' },
        { selector: '.k-smart-box .k-input-inner[aria-activedescendant]', attribute: 'aria-activedescendant', usage: 'When the popup is open, references the ID of the currently focused list item.' },
        { selector: '.k-smart-box .k-input-prefix .k-icon', attribute: 'aria-hidden=true', usage: 'Decorative icons in the prefix area are hidden from screen readers.' },
        { selector: '.k-smart-box .k-input-suffix .k-button', attribute: 'aria-label', usage: 'Suffix buttons must have accessible labels describing their function (e.g. "Start voice input", "Send prompt").' },
        { selector: '.k-smart-box .k-smart-box-send', attribute: 'aria-label', usage: 'The send button must be labelled to indicate its current action (e.g. "Send" or "Stop processing").' },
        { selector: '.k-smart-box .k-smart-box-send.k-disabled', attribute: 'disabled or aria-disabled=true', usage: 'Indicates the button is disabled when there is no input.' },
        { selector: '.k-smart-box .k-smart-box-send.k-processing', attribute: 'aria-pressed=true', usage: 'Indicates that processing is in progress. The button changes function to stop processing.' },
    ]
};

export default SmartBox;
