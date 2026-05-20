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
import { DROPDOWNTREE_FOLDER_NAME, DROPDOWNTREE_MODULE_NAME } from './constants';
import a11ySpec from './behavior/accessibility.json';
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
    size: [Size.undefined, Size.small, Size.medium, Size.large],
    rounded: [Roundness.undefined, Roundness.none, Roundness.small, Roundness.medium, Roundness.large, Roundness.full],
    fillMode: [FillMode.undefined, FillMode.solid, FillMode.flat, FillMode.outline]
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
    /**
     * Unique identifier for the dropdowntree. Used to generate related IDs.
     * @aria Controls aria-controls references
     */
    id?: string;
    /**
     * ID of the treeview element in the popup.
     * @aria aria-controls - Points to treeview when popup is open
     */
    treeviewId?: string;
};

export type KendoDropdownTreeState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    showValue: true,
    arrowIconName: 'chevron-down'
};

export const DropdownTree: KendoComponent<KendoDropdownTreeProps & KendoDropdownTreeState & React.HTMLAttributes<HTMLSpanElement>> = (
    props: KendoDropdownTreeProps &
        KendoDropdownTreeState &
        React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        size,
        rounded,
        fillMode,
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
        id,
        treeviewId,
        'aria-label': ariaLabel,
        ...other
    } = props;

    const innerSpanId = id ? `${id}-value` : undefined;


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
                role="combobox"
                aria-haspopup="tree"
                aria-expanded={opened ? 'true' : 'false'}
                aria-controls={opened ? treeviewId : undefined}
                aria-describedby={opened ? innerSpanId : undefined}
                aria-disabled={disabled ? 'true' : undefined}
                aria-label={ariaLabel}
                tabIndex={0}
            >
                <InputPrefix>{prefix}</InputPrefix>
                <InputInnerSpan
                    placeholder={placeholder}
                    value={value}
                    showValue={showValue}
                    valueIconName={valueIconName}
                    id={innerSpanId}
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
                    size={props.size}
                    fillMode={props.fillMode}
                    aria-label="Open popup"
                    tabIndex={-1}
                />
            </Picker>
            {opened && popup &&
                <Popup
                    className="k-list-container k-dropdowntree-popup"
                    dir={dir}
                    containerRole="region"
                    containerAriaLabel="DropdownTree options"
                >
                    {popup}
                </Popup>
            }
            {adaptive &&
                <ActionSheet adaptive={true} {...adaptiveSettings}
                header={
                    <ActionSheetHeader
                        actionsEnd={<Button icon="check" themeColor="primary" size="large" fillMode="flat" aria-label="Apply selection" />}
                        filter={adaptiveFilter}
                        inputValue={value}
                        inputPlaceholder={placeholder}
                        title={adaptiveTitle}
                        subtitle={adaptiveSubtitle}
                    />
                }
                >
                    <Treeview size="large">
                        <TreeviewItem text="Root 1" />
                        <TreeviewItem text="Root 2" expanded>
                            <TreeviewGroup>
                                <TreeviewItem text="Child 2.1" />
                                <TreeviewItem text="Child 2.2">
                                    <TreeviewGroup>
                                        <TreeviewItem text="Child 2.2.1" />
                                    </TreeviewGroup>
                                </TreeviewItem>
                                <TreeviewItem text="Child 2.3" />
                            </TreeviewGroup>
                        </TreeviewItem>
                        <TreeviewItem text="Root 3">
                            <TreeviewGroup>
                                <TreeviewItem text="Child 3.1" />
                                <TreeviewItem text="Child 3.2" />
                                <TreeviewItem text="Child 3.3" />
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
DropdownTree.moduleName = DROPDOWNTREE_MODULE_NAME;
DropdownTree.folderName = DROPDOWNTREE_FOLDER_NAME;

DropdownTree.ariaSpec = a11ySpec.ariaSpec;

export default DropdownTree;
