import { classNames, States, Size, Roundness, FillMode } from '../misc';
import {
    InputPrefix,
    InputSuffix,
    InputInnerSpan,
    Picker
} from '../input';
import { Button } from '../button';
import { ColorPreview } from '../color-preview';
import { Popup } from '../popup';
import { ActionSheet, ActionSheetHeader, ActionSheetFooter, KendoActionSheetProps } from '../action-sheet';

import { ColorEditor } from "../coloreditor";


import { KendoComponent } from '../_types/component';
import { COLORPICKER_FOLDER_NAME, COLORPICKER_MODULE_NAME } from './constants';
export const COLORPICKER_CLASSNAME = `k-colorpicker`;

const states = [
    States.hover,
    States.focus,
    States.valid,
    States.invalid,
    States.required,
    States.disabled
];

const options = {
    size: [Size.undefined, Size.small, Size.medium, Size.large],
    rounded: [Roundness.undefined, Roundness.none, Roundness.small, Roundness.medium, Roundness.large, Roundness.full],
    fillMode: [FillMode.undefined, FillMode.solid, FillMode.flat, FillMode.outline]
};

export type KendoColorPickerOptions = {
    size?: (typeof options.size)[number] | null;
    rounded?: (typeof options.rounded)[number] | null;
    fillMode?: (typeof options.fillMode)[number] | null;
};

export type KendoColorPickerProps = KendoColorPickerOptions & {
    prefix?: React.JSX.Element;
    suffix?: React.JSX.Element;
    type?: string;
    value?: string;
    placeholder?: string;
    valueIconName?: string;
    arrowIconName?: string;
    popup?: React.JSX.Element;
    opened?: boolean;
    adaptive?: boolean;
    adaptiveSettings?: KendoActionSheetProps;
    adaptiveTitle?: string;
    adaptiveSubtitle?: string;
};

export type KendoColorPickerState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    arrowIconName: 'caret-alt-down'
};

export const ColorPicker: KendoComponent<KendoColorPickerProps & KendoColorPickerState & React.HTMLAttributes<HTMLSpanElement>> = (
    props: KendoColorPickerProps &
        KendoColorPickerState &
        React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        size,
        rounded,
        fillMode,
        arrowIconName = defaultOptions.arrowIconName,
        prefix,
        suffix,
        value,
        placeholder,
        hover,
        focus,
        valid,
        invalid,
        required,
        disabled,
        valueIconName,
        popup,
        opened,
        adaptive,
        adaptiveSettings,
        adaptiveTitle,
        adaptiveSubtitle,
        ...other
    } = props;


    const popupId = 'colorpicker-popup';

    return (
        <>
            <Picker
                {...other}
                size={size}
                rounded={rounded}
                fillMode={fillMode}
                hover={hover}
                focus={focus}
                valid={valid}
                invalid={invalid}
                required={required}
                disabled={disabled}
                role="combobox"
                aria-haspopup="dialog"
                aria-expanded={opened ? 'true' : 'false'}
                aria-controls={(opened || adaptive) ? popupId : undefined}
                aria-label="Color picker"
                tabIndex={0}
                aria-disabled={disabled ? 'true' : undefined}
                className={classNames(
                    props.className,
                    COLORPICKER_CLASSNAME,
                    'k-icon-picker'
                )}
            >
                <InputPrefix>{prefix}</InputPrefix>
                <InputInnerSpan
                    placeholder={placeholder}
                    value={value}
                    showValue={false}
                    valueIcon={
                        <ColorPreview
                            className="k-value-icon"
                            color={value}
                            iconName={valueIconName}
                        />
                    }
                    valueIconName={valueIconName}
                />
                <InputSuffix>{suffix}</InputSuffix>
                <Button
                    className="k-input-button"
                    icon={arrowIconName}
                    size={size}
                    fillMode={fillMode}
                    tabIndex={-1}
                    aria-label="Open color picker"
                    disabled={disabled}
                />
            </Picker>
            {opened && popup &&
                <Popup id={popupId} className="k-colorpicker-popup">
                    {popup}
                </Popup>
            }
            {adaptive &&
                <ActionSheet adaptive={true} id={popupId} {...adaptiveSettings}
                    header={
                        <ActionSheetHeader
                            actionsEnd={<Button icon="check" themeColor="primary" size="large" fillMode="flat" aria-label="Apply" />}
                            title={adaptiveTitle}
                            subtitle={adaptiveSubtitle}
                        />
                    }
                    footer={
                        <ActionSheetFooter>
                            <Button text="Cancel" size="large" />
                            <Button text="Set" size="large" themeColor="primary" />
                        </ActionSheetFooter>
                    }
                >
                    <ColorEditor canvasOrientation="vertical"
                        size="large"
                        actionButtons={false}
                        group
                    />
                </ActionSheet>
            }
        </>
    );
};

ColorPicker.states = states;
ColorPicker.options = options;
ColorPicker.className = COLORPICKER_CLASSNAME;
ColorPicker.defaultOptions = defaultOptions;
ColorPicker.moduleName = COLORPICKER_MODULE_NAME;
ColorPicker.folderName = COLORPICKER_FOLDER_NAME;

/**
 * Accessibility specification for ColorPicker.
 *
 * @accessibility
 * - Wrapper has role=combobox with aria-haspopup=dialog
 * - aria-expanded indicates popup visibility
 * - tabindex=0 makes element focusable
 * - Disabled state uses aria-disabled=true
 * - Inner ColorGradient in popup has tabindex=-1
 * - Adaptive mode follows ActionSheet ARIA spec
 *
 * @wcag 4.1.2 Name, Role, Value - combobox pattern for color selection
 */
ColorPicker.ariaSpec = {
    selector: '.k-colorpicker',
    rules: [
        { selector: '.k-colorpicker', attribute: 'role=combobox', usage: 'The focusable element should have role combobox (input with popup).' },
        { selector: '.k-colorpicker', attribute: 'aria-label or aria-labelledby', usage: 'The component needs an accessible name including the currently selected value.' },
        { selector: '.k-colorpicker', attribute: 'aria-haspopup=dialog', usage: 'Indicates the component has a Dialog Popup.' },
        { selector: '.k-colorpicker', attribute: 'aria-expanded=true/false', usage: 'Announces the visibility state of the popup.' },
        { selector: '.k-colorpicker', attribute: 'aria-controls (when open)', usage: 'Points to the popup element.' },
        { selector: '.k-colorpicker', attribute: 'tabindex=0', usage: 'The element must be focusable.' },
        { selector: '.k-colorpicker.k-disabled', attribute: 'aria-disabled=true', usage: 'Rendered only when the picker is disabled.' },
        { selector: '.k-colorpicker.k-disabled .k-button', attribute: 'disabled or aria-disabled=true', usage: 'Rendered only when the picker is disabled.' },
        { selector: '.k-colorgradient', attribute: 'tabindex=-1', usage: 'The inner ColorGradient must be removed from the page tab sequence.' },
    ]
};

export default ColorPicker;
