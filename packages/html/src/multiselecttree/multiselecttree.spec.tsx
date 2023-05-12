import { classNames, States, Size, Roundness, FillMode } from '../misc';
import {
    Input,
    InputClearValue,
    InputLoadingIcon,
    InputPrefix,
    InputSuffix,
    InputValidationIcon
} from '../input';
import { Button } from '../button';
import { ChipList } from '../chip';
import { Popup } from '../popup';

export const MULTISELECTTREE_CLASSNAME = `k-multiselecttree`;

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

export type KendoMultiSelectTreeOptions = {
    size?: (typeof options.size)[number] | null;
    rounded?: (typeof options.rounded)[number] | null;
    fillMode?: (typeof options.fillMode)[number] | null;
};

export type KendoMultiSelectTreeProps = KendoMultiSelectTreeOptions & {
    prefix?: JSX.Element;
    suffix?: JSX.Element;
    type?: string;
    placeholder?: string;
    tags?: JSX.Element;
    popup?: JSX.Element;
    showArrowButton?: boolean;
    opened?: boolean;
    dir?: 'ltr' | 'rtl';
};

export type KendoMultiSelectTreeState = { [K in (typeof states)[number]]?: boolean };

export const MultiSelectTree = (
    props: KendoMultiSelectTreeProps &
        KendoMultiSelectTreeState &
        React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        prefix,
        suffix,
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
        dir,
        ...other
    } = props;


    return (
        <>
            <Input
                {...other}
                dir={dir}
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
                className={classNames(props.className, MULTISELECTTREE_CLASSNAME)}
            >
                <InputPrefix>{prefix}</InputPrefix>
                <ChipList size={size} className="k-input-values">
                    <>
                        {tags}
                    </>
                </ChipList>
                <span className="k-input-inner">
                    <span className="k-input-value-text">{placeholder}</span>
                </span>
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
                <Popup className="k-multiselecttree-popup" dir={dir}>
                    {popup}
                </Popup>
            }
        </>
    );
};

MultiSelectTree.states = states;
MultiSelectTree.options = options;
MultiSelectTree.className = MULTISELECTTREE_CLASSNAME;
MultiSelectTree.defaultProps = defaultProps;

export default MultiSelectTree;
