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
    id?: string;
    valueIconName?: string;
    arrowIconName?: string;
    prefix?: React.JSX.Element;
    suffix?: React.JSX.Element;
    value?: string;
    placeholder?: string;
    showValue?: boolean;
    filterable?: boolean;
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
    arrowIconName: 'caret-alt-down'
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
        filterable,
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
        id = 'dropdowntree',
        ...other
    } = props;

    const treeviewId = `${id}-treeview`;
    const valueId = `${id}-value`;
    const popupId = `${id}-popup`;
    const ariaLabel = placeholder ? `Dropdown tree, ${placeholder}` : 'Dropdown tree';


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
                aria-label={ariaLabel}
                aria-haspopup="tree"
                aria-expanded={opened ? 'true' : 'false'}
                aria-controls={opened && popup ? treeviewId : undefined}
                aria-describedby={valueId}
                aria-readonly={readonly ? 'true' : undefined}
                aria-autocomplete={filterable ? 'list' : undefined}
                aria-invalid={invalid ? 'true' : undefined}
                aria-busy={loading ? 'true' : undefined}
                aria-disabled={disabled ? 'true' : undefined}
                tabIndex={0}
            >
                <InputPrefix>{prefix}</InputPrefix>
                <InputInnerSpan
                    id={valueId}
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
                    aria-label="Open dropdown"
                    tabIndex={-1}
                    disabled={disabled}
                    aria-disabled={disabled ? 'true' : undefined}
                />
            </Picker>
            {opened && popup &&
                <Popup
                    className="k-list-container k-dropdowntree-popup"
                    containerClassName="k-dropdowntree-popup-container"
                    id={popupId}
                    role="region"
                    aria-label="DropdownTree suggestions"
                    dir={dir}
                >
                    {popup}
                </Popup>
            }
            {adaptive &&
                <ActionSheet adaptive={true} {...adaptiveSettings}
                header={
                    <ActionSheetHeader
                        actionsEnd={<Button icon="check" themeColor="primary" size="large" fillMode="flat" aria-label="Confirm" />}
                        filter={adaptiveFilter}
                        inputValue={value}
                        inputPlaceholder={placeholder}
                        title={adaptiveTitle}
                        subtitle={adaptiveSubtitle}
                        filterInputProps={adaptiveFilter ? {
                            role: 'searchbox',
                            'aria-label': 'Filter options',
                            'aria-autocomplete': 'list',
                            'aria-controls': treeviewId,
                            'aria-haspopup': 'tree'
                        } : undefined}
                    />
                }
                >
                    <Treeview size="large" id={treeviewId}>
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

export default DropdownTree;
