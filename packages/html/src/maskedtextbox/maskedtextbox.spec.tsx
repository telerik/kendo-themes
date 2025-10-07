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
    size: [ Size.small, Size.medium, Size.large ],
    rounded: [ Roundness.small, Roundness.medium, Roundness.large, Roundness.full ],
    fillMode: [ FillMode.solid, FillMode.flat, FillMode.outline ]
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
    size: Input.defaultOptions.size,
    rounded: Input.defaultOptions.rounded,
    fillMode: Input.defaultOptions.fillMode,
    separators: true
};

export const MaskedTextbox: KendoComponent<KendoMaskedTextboxProps & KendoMaskedTextboxState & React.HTMLAttributes<HTMLSpanElement>> = (
    props: KendoMaskedTextboxProps &
        KendoMaskedTextboxState &
        React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        size = defaultOptions.size,
        rounded = defaultOptions.rounded,
        fillMode = defaultOptions.fillMode,
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
            <InputInnerInput placeholder={placeholder} value={value} />
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

export default MaskedTextbox;
