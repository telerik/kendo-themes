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
    inputAriaLabel?: string;
    inputAriaControls?: string;
    inputAriaActiveDescendant?: string;
    inputAriaAutocomplete?: 'list' | 'both' | 'inline' | 'none';
};

export type KendoSmartBoxState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    separators: true
};

/**
 * @aria {role="combobox"} Announces the combobox role for the SmartBox input.
 * @aria {aria-expanded} Indicates whether the suggestion popup is currently visible.
 * @aria {aria-haspopup="listbox"} Indicates that the SmartBox has a popup listbox with suggestions.
 * @aria {aria-hidden="true"} Decorative icons in the prefix area are hidden from screen readers.
 * @aria {aria-label} for the combobox input
 * @aria {aria-controls} referencing the popup listbox ID
 * @aria {aria-activedescendant} referencing the focused list item
 * @aria {aria-autocomplete} behavior
 * @ux {Suggestions} Displays context-aware suggestions as the user types.
 * @ux {Token creation} Accepted suggestions are converted into inline tokens.
 * @ux {Natural language} Parses free-form text input into structured filter criteria.
 */
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
 * @keyboard {ArrowDown} Opens the suggestion popup if closed, or moves focus to the next suggestion in the list.
 * @keyboard {ArrowUp} Opens the suggestion popup if closed, or moves focus to the previous suggestion in the list.
 * @keyboard {Enter} Selects the currently highlighted suggestion (if any) and submits the input.
 * @keyboard {Escape} Closes the suggestion popup if open, or clears the input field.
 * @keyboard {Home} When the popup is open, moves focus to the first suggestion in the list.
 * @keyboard {End} When the popup is open, moves focus to the last suggestion in the list.
 * @keyboard {Alt + ArrowDown} Opens the suggestion popup (alternative method).
 * @keyboard {Alt + ArrowUp} Closes the suggestion popup (alternative method).
 * @keyboard {Enter or Space} Triggers a click action on the button (e.g., start voice input, send input, stop processing).
 * @keyboard {ArrowDown} Moves focus to the next suggestion in the list.
 * @keyboard {ArrowUp} Moves focus to the previous suggestion in the list.
 * @keyboard {Home} Moves focus to the first suggestion in the list.
 * @keyboard {End} Moves focus to the last suggestion in the list.
 * @keyboard {Enter} Selects the focused suggestion and closes the popup.
 * @keyboard {Escape} Closes the popup and returns focus to the input field.
 *
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/ ARIA Authoring Practices Guide
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/combobox/ ARIA Authoring Practices: Combobox Pattern
 */

export default SmartBox;
