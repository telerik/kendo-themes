import { classNames, States, Size, Roundness, FillMode } from '../misc';
import { KendoComponent } from '../_types/component';
import { MASKEDTEXTBOX_FOLDER_NAME, MASKEDTEXTBOX_MODULE_NAME } from './constants';
import {
    Input,
    InputInnerInput,
    InputClearValue,
    InputLoadingIcon,
    InputValidationIcon,
    InputPrefix,
    InputSuffix,
    InputSeparator
} from '../input';

export const MASKEDTEXTBOX_CLASSNAME = `k-maskedtextbox`;

const states = [
    States.hover,
    States.focus,
    States.valid,
    States.invalid,
    States.required,
    States.disabled,
    States.loading,
    States.readonly
];

const options = {
    size: [ Size.undefined, Size.small, Size.medium, Size.large ],
    rounded: [ Roundness.undefined, Roundness.none, Roundness.small, Roundness.medium, Roundness.large, Roundness.full ],
    fillMode: [ FillMode.undefined, FillMode.solid, FillMode.flat, FillMode.outline ]
};

export type KendoMaskedTextboxOptions = {
    size?: (typeof options.size)[number] | null;
    rounded?: (typeof options.rounded)[number] | null;
    fillMode?: (typeof options.fillMode)[number] | null;
};

export type KendoMaskedTextboxProps = KendoMaskedTextboxOptions & {
    prefix?: React.JSX.Element;
    suffix?: React.JSX.Element;
    separators?: boolean;
    type?: string;
    value?: string;
    placeholder?: string;
    showClearButton?: boolean;
};

export type KendoMaskedTextboxState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    showClearButton: true,
    separators: true
};

export const MaskedTextbox: KendoComponent<KendoMaskedTextboxProps & KendoMaskedTextboxState & React.HTMLAttributes<HTMLSpanElement>> = (
    props: KendoMaskedTextboxProps &
        KendoMaskedTextboxState &
        React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        size,
        rounded,
        fillMode,
        separators = defaultOptions.separators,
        showClearButton = defaultOptions.showClearButton,
        prefix,
        suffix,
        value,
        placeholder,
        hover,
        focus,
        valid,
        invalid,
        required,
        loading,
        disabled,
        readonly,
        id,
        'aria-label': ariaLabel,
        'aria-describedby': ariaDescribedBy,
        ...other
    } = props;


    return (
        <Input
            {...other}
            size={size}
            rounded={rounded}
            fillMode={fillMode}
            hover={hover}
            focus={focus}
            valid={valid}
            invalid={invalid}
            required={required}
            loading={loading}
            disabled={disabled}
            readonly={readonly}
            className={classNames(props.className, MASKEDTEXTBOX_CLASSNAME)}
        >
            {prefix &&
            <>
                <InputPrefix>{prefix}</InputPrefix>
                {separators && <InputSeparator/>}
            </>
            }
            <InputInnerInput id={id} placeholder={placeholder} value={value} disabled={disabled} aria-label={ariaLabel} aria-describedby={ariaDescribedBy} aria-invalid={invalid ? 'true' : undefined} />
            <InputValidationIcon
                valid={valid}
                invalid={invalid}
                loading={loading}
                disabled={disabled} />
            <InputLoadingIcon
                loading={loading}
                disabled={disabled} />
            { showClearButton && <InputClearValue
                loading={loading}
                disabled={disabled}
                readonly={readonly}
                value={value} /> }
            {suffix &&
                <>
                    {separators && <InputSeparator/>}
                    <InputSuffix>{suffix}</InputSuffix>
                </>
            }
        </Input>
    );
};

MaskedTextbox.states = states;
MaskedTextbox.options = options;
MaskedTextbox.className = MASKEDTEXTBOX_CLASSNAME;
MaskedTextbox.defaultOptions = defaultOptions;
MaskedTextbox.moduleName = MASKEDTEXTBOX_MODULE_NAME;
MaskedTextbox.folderName = MASKEDTEXTBOX_FOLDER_NAME;

/**
 * Accessibility specification for MaskedTextbox.
 * @accessibility
 * - Uses semantic `<input>` element (role="textbox" implicit)
 * - Requires accessible name via label, aria-label, or aria-labelledby
 * - Disabled state uses native disabled attribute
 */
MaskedTextbox.ariaSpec = {
    selector: '.k-maskedtextbox',
    rules: [
        { selector: '.k-maskedtextbox > .k-input-inner', attribute: 'role=textbox or nodeName=input', usage: 'Describes the role of the component.' },
        { selector: '.k-maskedtextbox > .k-input-inner', attribute: 'label for or aria-label or aria-labelledby (when has accessible name)', usage: 'The input requires an accessible name (provided by consuming app).' },
        { selector: '.k-maskedtextbox > .k-input-inner', attribute: 'aria-placeholder (when has mask)', usage: 'Announces the mask or placeholder for the component.' },
        { selector: '.k-maskedtextbox > .k-input-inner', attribute: 'aria-invalid=true (when invalid)', usage: 'Rendered when the MaskedTextBox is in an invalid state.' },
        { selector: '.k-maskedtextbox > .k-input-inner', attribute: 'aria-describedby (when has hint or error)', usage: 'Points to the hint or error message.' },
        { selector: '.k-maskedtextbox.k-disabled > .k-input-inner', attribute: 'disabled=disabled or aria-disabled=true', usage: 'Rendered when the MaskedTextBox is disabled.' },
    ]
};

export default MaskedTextbox;
