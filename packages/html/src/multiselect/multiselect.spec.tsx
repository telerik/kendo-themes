import { classNames, States, Size, Roundness, FillMode } from '../misc';
import {
    Input,
    InputPrefix,
    InputSuffix,
    InputInnerInput,
    InputClearValue,
    InputLoadingIcon,
    InputValidationIcon
} from '../input';
import { Button } from '../button';
import { ChipList } from '../chip';
import { Popup } from '../popup';
import { ActionSheet, ActionSheetHeader, KendoActionSheetProps } from '../action-sheet';
import { List, ListItem } from '../list';

export const MULTISELECT_CLASSNAME = `k-multiselect`;

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

const defaultProps = {
    size: Input.defaultProps.size,
    rounded: Input.defaultProps.rounded,
    fillMode: Input.defaultProps.fillMode
};

export type KendoMultiSelectOptions = {
    size?: (typeof options.size)[number] | null;
    rounded?: (typeof options.rounded)[number] | null;
    fillMode?: (typeof options.fillMode)[number] | null;
};

export type KendoMultiSelectProps = KendoMultiSelectOptions & {
    prefix?: JSX.Element;
    suffix?: JSX.Element;
    type?: string;
    value?: string;
    placeholder?: string;
    tags?: JSX.Element;
    popup?: JSX.Element;
    showArrowButton?: boolean;
    opened?: boolean;
    adaptive?: boolean;
    adaptiveSettings?: KendoActionSheetProps;
};

export type KendoMultiSelectState = { [K in (typeof states)[number]]?: boolean };

export const MultiSelect = (
    props: KendoMultiSelectProps &
        KendoMultiSelectState &
        React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        prefix,
        suffix,
        value,
        placeholder,
        tags,
        popup,
        size,
        rounded,
        fillMode,
        showArrowButton,
        hover,
        focus,
        valid,
        invalid,
        required,
        loading,
        disabled,
        readonly,
        opened,
        adaptive,
        adaptiveSettings,
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
                valid={valid}
                invalid={invalid}
                required={required}
                loading={loading}
                disabled={disabled}
                readonly={readonly}
                className={classNames(props.className, MULTISELECT_CLASSNAME)}
            >
                <InputPrefix>{prefix}</InputPrefix>
                <div className="k-input-values">
                    <ChipList size={size}>
                        <>
                            {tags}
                        </>
                    </ChipList>
                    <InputInnerInput placeholder={placeholder} value={value}/>
                </div>
                <InputValidationIcon
                    valid={valid}
                    invalid={invalid}
                    loading={loading}
                    disabled={disabled} />
                <InputLoadingIcon
                    loading={loading}
                    disabled={disabled} />
                <InputClearValue
                    loading={loading}
                    disabled={disabled}
                    readonly={readonly}
                    value={tags ? 'value' : ''} />
                <InputSuffix>{suffix}</InputSuffix>
                {showArrowButton && (
                    <Button
                        className="k-input-button"
                        icon="caret-alt-down"
                        rounded={null}
                        size={size}
                        fillMode={fillMode}
                    />
                )}
            </Input>
            { opened && popup &&
                <Popup className="k-list-container k-multiselect-popup">
                    {popup}
                </Popup>
            }
            { adaptive &&
                <ActionSheet adaptive={true} {...adaptiveSettings} >
                    <ActionSheetHeader
                        actions={[ 'x' ]}
                        filter={true}
                        title="Select Item">
                    </ActionSheetHeader>
                    <div className="k-list-container">
                        <List size="large">
                            <ListItem text="List item" />
                            <ListItem text="List item" />
                            <ListItem text="List item" />
                        </List>
                    </div>
                </ActionSheet>
            }
        </>
    );
};

MultiSelect.states = states;
MultiSelect.options = options;
MultiSelect.className = MULTISELECT_CLASSNAME;
MultiSelect.defaultProps = defaultProps;

export default MultiSelect;
