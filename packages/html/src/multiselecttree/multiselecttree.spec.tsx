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
import { MULTISELECTTREE_FOLDER_NAME, MULTISELECTTREE_MODULE_NAME } from './constants';
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
    size: [Size.undefined, Size.small, Size.medium, Size.large],
    rounded: [Roundness.undefined, Roundness.none, Roundness.small, Roundness.medium, Roundness.large, Roundness.full],
    fillMode: [FillMode.undefined, FillMode.solid, FillMode.flat, FillMode.outline]
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
    /**
     * Unique identifier for the multiselecttree. Used to generate related IDs.
     * @aria Controls aria-controls references
     */
    id?: string;
    /**
     * ID of the treeview element in the popup.
     * @aria aria-controls - Points to treeview when popup is open
     */
    treeviewId?: string;
};

export type KendoMultiSelectTreeState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
};

export const MultiSelectTree: KendoComponent<KendoMultiSelectTreeProps & KendoMultiSelectTreeState & React.HTMLAttributes<HTMLSpanElement>> = (
    props: KendoMultiSelectTreeProps &
        KendoMultiSelectTreeState &
        React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        size,
        rounded,
        fillMode,
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
        id,
        treeviewId,
        'aria-label': ariaLabel,
        ...other
    } = props;

    const chipListId = id ? `${id}-taglist` : undefined;


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
                <ChipList size={size} className="k-input-values" id={chipListId}>
                    <>
                        {tags}
                    </>
                </ChipList>
                <span
                    className="k-input-inner"
                    role="combobox"
                    aria-haspopup="tree"
                    aria-expanded={opened ? 'true' : 'false'}
                    aria-controls={opened ? treeviewId : undefined}
                    aria-autocomplete="list"
                    aria-describedby={tags ? chipListId : undefined}
                    aria-disabled={disabled ? 'true' : undefined}
                    aria-label={ariaLabel}
                    tabIndex={0}
                >
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
                        icon="chevron-down"
                        size={size}
                        fillMode={fillMode}
                        aria-label="Toggle dropdown"
                        tabIndex={-1}
                    />
                )}
            </Input>
            {opened && popup &&
                <Popup
                    className="k-multiselecttree-popup"
                    dir={dir}
                    containerRole="region"
                    containerAriaLabel="MultiSelectTree options"
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
                                <TreeviewItem leafClassName="k-treeview-load-more-button" text="Load more ..." />
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

MultiSelectTree.states = states;
MultiSelectTree.options = options;
MultiSelectTree.className = MULTISELECTTREE_CLASSNAME;
MultiSelectTree.defaultOptions = defaultOptions;
MultiSelectTree.moduleName = MULTISELECTTREE_MODULE_NAME;
MultiSelectTree.folderName = MULTISELECTTREE_FOLDER_NAME;

/**
 * @see Treeview ariaSpec for the tree in the popup
 * @see ActionSheet ariaSpec for adaptive mode
 */
MultiSelectTree.ariaSpec = {
    rules: [
        // Combobox input
        { selector: '.k-multiselecttree .k-input-inner', attribute: 'role=combobox', usage: 'Announces the multiselect tree input.' },
        { selector: '.k-multiselecttree .k-input-inner', attribute: 'aria-haspopup=tree', usage: 'Indicates the presence of a tree popup.' },
        { selector: '.k-multiselecttree .k-input-inner', attribute: 'aria-expanded', usage: 'Announces the popup visibility.' },
        { selector: '.k-multiselecttree .k-input-inner', attribute: 'aria-label', usage: 'Accessible name for the multiselect tree.' },
        { selector: '.k-multiselecttree .k-input-inner', attribute: 'aria-autocomplete=list', usage: 'Indicates list filtering capability when filtering is enabled.' },
        { selector: '.k-multiselecttree .k-input-inner', attribute: 'aria-describedby', usage: 'Points to the taglist element that contains the selected items.' },
        { selector: '.k-multiselecttree .k-input-inner', attribute: 'tabindex=0', usage: 'The element must be focusable.' },
        { selector: '.k-multiselecttree.k-disabled .k-input-inner', attribute: 'aria-disabled=true', usage: 'Rendered when the multiselect tree is disabled.' },
        // TagList (ChipList)
        { selector: '.k-multiselecttree .k-chip-list', attribute: 'role=listbox', usage: 'The taglist has listbox role for selected items.' },
        { selector: '.k-multiselecttree .k-chip-list', attribute: 'aria-label or aria-labelledby', usage: 'The taglist needs an accessible name.' },
        { selector: '.k-multiselecttree .k-chip-list', attribute: 'aria-orientation=horizontal', usage: 'Specifies horizontal orientation of the taglist.' },
        { selector: '.k-multiselecttree .k-chip-list .k-chip', attribute: 'role=option', usage: 'Each tag chip is an option within the taglist listbox.' },
        { selector: '.k-multiselecttree .k-chip-list .k-chip', attribute: 'aria-selected=true', usage: 'Tags represent selected items and must have aria-selected=true.' },
    ]
};

export default MultiSelectTree;
