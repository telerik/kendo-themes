import { classNames, States, Size, Roundness, FillMode } from '../misc';
import { Button } from '../button';
import {
    Picker,
    InputInnerSpan,
    InputLoadingIcon,
    InputPrefix,
    InputSuffix,
    InputValidationIcon
} from '../input';
import { Popup } from '../popup';
import { ActionSheet, ActionSheetHeader, KendoActionSheetProps } from '../action-sheet';
import { Treeview, TreeviewGroup, TreeviewItem } from '../treeview';

import { KendoComponent } from '../_types/component';
export const DROPDOWNTREE_CLASSNAME = `k-dropdowntree`;

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

export type KendoDropdownTreeOptions = {
    size?: (typeof options.size)[number] | null;
    rounded?: (typeof options.rounded)[number] | null;
    fillMode?: (typeof options.fillMode)[number] | null;
};

export type KendoDropdownTreeProps = KendoDropdownTreeOptions & {
    valueIconName?: string;
    arrowIconName?: string;
    prefix?: React.JSX.Element;
    suffix?: React.JSX.Element;
    value?: string;
    placeholder?: string;
    showValue?: boolean;
    popup?: React.JSX.Element;
    opened?: boolean;
    adaptive?: boolean;
    adaptiveSettings?: KendoActionSheetProps;
    adaptiveTitle?: string;
    adaptiveSubtitle?: string;
    adaptiveFilter?: boolean;
    dir?: 'ltr' | 'rtl';
};

export type KendoDropdownTreeState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    showValue: true,
    arrowIconName: 'caret-alt-down',
    size: Size.medium,
    rounded: Roundness.medium,
    fillMode: FillMode.solid
};

export const DropdownTree: KendoComponent<KendoDropdownTreeProps & KendoDropdownTreeState & React.HTMLAttributes<HTMLSpanElement>> = (
    props: KendoDropdownTreeProps &
        KendoDropdownTreeState &
        React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        size = defaultOptions.size,
        rounded = defaultOptions.rounded,
        fillMode = defaultOptions.fillMode,
        arrowIconName = defaultOptions.arrowIconName,
        showValue = defaultOptions.showValue,
        valueIconName,
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
        popup,
        opened,
        adaptive,
        adaptiveSettings,
        adaptiveTitle,
        adaptiveSubtitle,
        adaptiveFilter,
        dir,
        ...other
    } = props;


    return (
        <>
            <Picker
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
                className={classNames(
                    props.className,
                    DROPDOWNTREE_CLASSNAME,
                    {
                        'k-icon-picker': !showValue && valueIconName
                    }
                )}
            >
                <InputPrefix>{prefix}</InputPrefix>
                <InputInnerSpan
                    placeholder={placeholder}
                    value={value}
                    showValue={showValue}
                    valueIconName={valueIconName}
                />
                <InputValidationIcon
                    valid={valid}
                    invalid={invalid}
                    loading={loading}
                    disabled={disabled} />
                <InputLoadingIcon
                    loading={loading}
                    disabled={disabled} />
                <InputSuffix>{suffix}</InputSuffix>
                <Button
                    className="k-input-button"
                    icon={arrowIconName}
                    rounded={null}
                    size={props.size}
                    fillMode={props.fillMode}
                />
            </Picker>
            {opened && popup &&
                <Popup className="k-list-container k-dropdowntree-popup" dir={dir}>
                    {popup}
                </Popup>
            }
            {adaptive &&
                <ActionSheet adaptive={true} {...adaptiveSettings}
                header={
                    <ActionSheetHeader
                        actionsEnd={<Button icon="check" themeColor="primary" size="large" fillMode="flat" />}
                        filter={adaptiveFilter}
                        inputValue={value}
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
                                <TreeviewItem bottom text="Child 2.3" />
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

DropdownTree.states = states;
DropdownTree.options = options;
DropdownTree.className = DROPDOWNTREE_CLASSNAME;
DropdownTree.defaultOptions = defaultOptions;
DropdownTree.moduleName = "dropdown-tree";
DropdownTree.folderName = "dropdowntree";

export default DropdownTree;
