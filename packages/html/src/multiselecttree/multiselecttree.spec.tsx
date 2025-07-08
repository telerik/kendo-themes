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
import { ActionSheet, ActionSheetHeader, KendoActionSheetProps } from '../action-sheet';
import { TreeviewGroup, TreeviewItem, Treeview } from '../treeview';

import { KendoComponent } from '../_types/component';
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
    size: [Size.small, Size.medium, Size.large],
    rounded: [Roundness.small, Roundness.medium, Roundness.large, Roundness.full],
    fillMode: [FillMode.solid, FillMode.flat, FillMode.outline]
};

export type KendoMultiSelectTreeOptions = {
    size?: (typeof options.size)[number] | null;
    rounded?: (typeof options.rounded)[number] | null;
    fillMode?: (typeof options.fillMode)[number] | null;
};

export type KendoMultiSelectTreeProps = KendoMultiSelectTreeOptions & {
    prefix?: React.JSX.Element;
    suffix?: React.JSX.Element;
    type?: string;
    placeholder?: string;
    tags?: React.JSX.Element;
    popup?: React.JSX.Element;
    showArrowButton?: boolean;
    opened?: boolean;
    dir?: 'ltr' | 'rtl';
    adaptive?: boolean;
    adaptiveSettings?: KendoActionSheetProps;
    adaptiveTitle?: string;
    adaptiveSubtitle?: string;
    adaptiveFilter?: boolean;
};

export type KendoMultiSelectTreeState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    size: Input.defaultOptions.size,
    rounded: Input.defaultOptions.rounded,
    fillMode: Input.defaultOptions.fillMode
};

export const MultiSelectTree: KendoComponent<KendoMultiSelectTreeProps & KendoMultiSelectTreeState & React.HTMLAttributes<HTMLSpanElement>> = (
    props: KendoMultiSelectTreeProps &
        KendoMultiSelectTreeState &
        React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        size = defaultOptions.size,
        rounded = defaultOptions.rounded,
        fillMode = defaultOptions.fillMode,
        prefix,
        suffix,
        placeholder,
        tags,
        popup,
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
        adaptive,
        adaptiveSettings,
        adaptiveTitle,
        adaptiveSubtitle,
        adaptiveFilter,
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
                    {!tags && <span className="k-input-value-text">{placeholder}</span>}
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
            {opened && popup &&
                <Popup className="k-multiselecttree-popup" dir={dir}>
                    {popup}
                </Popup>
            }
            {adaptive &&
                <ActionSheet adaptive={true} {...adaptiveSettings}
                    header={
                        <ActionSheetHeader
                            actionsEnd={<Button icon="check" themeColor="primary" size="large" fillMode="flat" />}
                            filter={adaptiveFilter}
                            inputPlaceholder={placeholder}
                            title={adaptiveTitle}
                            subtitle={adaptiveSubtitle}
                        />
                    }
                >
                    <Treeview size="large">
                        <TreeviewItem top text="Root 1" />
                        <TreeviewItem text="Root 2" expanded>
                            <TreeviewGroup>
                                <TreeviewItem top text="Child 2.1" />
                                <TreeviewItem text="Child 2.2">
                                    <TreeviewGroup>
                                        <TreeviewItem bottom text="Child 2.2.1" />
                                    </TreeviewGroup>
                                </TreeviewItem>
                                <TreeviewItem text="Child 2.3" />
                                <TreeviewItem bottom leafClassName="k-treeview-load-more-button" text="Load more ..." />
                            </TreeviewGroup>
                        </TreeviewItem>
                        <TreeviewItem bottom text="Root 3">
                            <TreeviewGroup>
                                <TreeviewItem top text="Child 3.1" />
                                <TreeviewItem text="Child 3.2" />
                                <TreeviewItem bottom text="Child 3.3" />
                            </TreeviewGroup>
                        </TreeviewItem>
                    </Treeview>
                </ActionSheet>
            }
        </>
    );
};

MultiSelectTree.states = states;
MultiSelectTree.options = options;
MultiSelectTree.className = MULTISELECTTREE_CLASSNAME;
MultiSelectTree.defaultOptions = defaultOptions;

export default MultiSelectTree;
