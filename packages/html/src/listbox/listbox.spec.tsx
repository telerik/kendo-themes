import { Button } from '../button';
import { List, ListContent } from '../list';
import { classNames, stateClassNames, States, Size } from '../misc';

import { KendoComponent } from '../_types/component';
import { LISTBOX_FOLDER_NAME, LISTBOX_MODULE_NAME } from './constants';
export const LISTBOX_CLASSNAME = `k-listbox`;

const states = [
    States.disabled
];

const options = {
    size: [ Size.undefined, Size.small, Size.medium, Size.large ]
};

export type KendoListBoxOptions = {
  size?: (typeof options.size)[number] | null;
};

export type KendoListBoxProps = KendoListBoxOptions & {
    children?: React.JSX.Element[];
    actionsPosition?: 'left' | 'right' | 'top' | 'bottom';
    actions?: string[];
    dir?: 'ltr' | 'rtl';
    'aria-label'?: string;
    multiselectable?: boolean;
    id?: string;
};

export type KendoListBoxState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    actionsPosition: 'left'
} as const;

/**
 * @aria {role="listbox"} Specifies the role of the ListBox list element.
 * @aria {role="option"} Specifies the role of the ListBox item element.
 * @aria {aria-selected="true"|\"false"} Set to true if the item is selected.
 * @aria {tabindex} The focused listbox item should have tabindex 0, all others -1.
 * @aria {role="toolbar"} The toolbar is a collection of command buttons.
 * @aria {aria-controls} Points to the id of the listbox element being controlled.
 * @aria {aria-multiselectable} when multiple selection is enabled
 * @aria {id} ID for the listbox element; referenced by the toolbar aria-controls.
 * @ux {Selection} Items are selected by clicking; multi-select with Ctrl/Shift.
 * @ux {Reorder} Items are reordered using drag-and-drop or toolbar Up/Down buttons.
 * @ux {Transfer} Items are moved between two listboxes with toolbar action buttons.
 * @ux {Filtering} An optional search input filters the item list.
 */
export const ListBox: KendoComponent<KendoListBoxProps & KendoListBoxState & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoListBoxProps &
        KendoListBoxState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size,
        disabled,
        children,
        actionsPosition = defaultOptions.actionsPosition,
        actions,
        dir,
        'aria-label': ariaLabel,
        multiselectable,
        id,
        ...other
    } = props;

    const listId = id ? `${id}-list` : undefined;

    const actionsLabelMap: Record<string, string> = {
        "left": "Move left",
        "right": "Move right",
        "to": "Move all right",
        "from": "Move all left",
        "up": "Move up",
        "down": "Move down",
        "x": "Remove"
    };

    return (
        <div
            {...other}
            dir={dir}
            className={classNames(
                props.className,
                LISTBOX_CLASSNAME,
                stateClassNames(LISTBOX_CLASSNAME, {
                    disabled,
                }),
                {
                    [`k-listbox-actions-${actionsPosition}`]: actionsPosition,
                }
            )}
        >
            { actions && (
                <div className="k-listbox-actions"
                    role="toolbar"
                    aria-label="ListBox actions"
                    aria-controls={listId}
                >
                    {actions.map(action => {

                        const actionsIconMap = {
                            "left": dir !== "rtl" ? "chevron-left" : "chevron-right",
                            "right": dir !== 'rtl' ? "chevron-right" : "chevron-left",
                            "to": dir !== 'rtl' ? "chevron-double-right" : "chevron-double-left",
                            "from": dir !== 'rtl' ? "chevron-double-left" : "chevron-double-right",
                            "up": "chevron-up",
                            "down": "chevron-down",
                            "x": "x"
                        };

                        return <Button key={action} icon={actionsIconMap[action]} size={size} aria-label={actionsLabelMap[action] || action} />;
                    })}
                </div>
            )}
            <div className={classNames(
                'k-list-scroller',
                'k-selectable'
            )}>
                <List size={size}>
                    <ListContent
                        aria-label={ariaLabel}
                        aria-multiselectable={multiselectable}
                        listboxId={listId}
                    >{children}</ListContent>
                </List>
            </div>
        </div>
    );
};

ListBox.states = states;
ListBox.options = options;
ListBox.className = LISTBOX_CLASSNAME;
ListBox.defaultOptions = defaultOptions;
ListBox.moduleName = LISTBOX_MODULE_NAME;
ListBox.folderName = LISTBOX_FOLDER_NAME;

/**
 * @keyboard {F10} Focuses the ListBox toolbar (the last focused or the first button in it).
 * @keyboard {Space} Selects the focused ListBox Item
 * @keyboard {ArrowUp} Selects the previous item.
 * @keyboard {ArrowDown} Selects the next item.
 * @keyboard {Control/Cmd(Mac) + Space} Selects or deselects an item.
 * @keyboard {Shift + ArrowUp} Adds the previous item to the selected items.
 * @keyboard {Shift + ArrowDown} Adds the next item to the selected items.
 * @keyboard {Control/Cmd(Mac) + ArrowUp} Moves the focus to the previous item.
 * @keyboard {Control/Cmd(Mac) + ArrowDown} Moves the focus to the next item.
 * @keyboard {Delete} Deletes the selected items.
 * @keyboard {Control/Cmd(Mac) + ArrowRight} Adds the selected items to the connected ListBox.
 * @keyboard {Control/Cmd(Mac) + ArrowLeft} Adds the selected items from the connected ListBox to the current one.
 * @keyboard {Control/Cmd(Mac) + Shift + ArrowUp} Shifts the selected items upwards.
 * @keyboard {Control/Cmd(Mac) + Shift + ArrowDown} Shifts the selected items downwards.
 * @keyboard {Control/Cmd(Mac) + Shift + ArrowRight} Transfers all items to the connected ListBox.
 * @keyboard {Control/Cmd(Mac) + Shift + ArrowLeft} Transfers all items from the connected ListBox.
 * @keyboard {ArrowRight or ArrowDown} Focuses the next button in the toolbar.
 * @keyboard {ArrowLeft or ArrowUp} Focuses the previous button in the toolbar.
 * @keyboard {Enter} Executes the currenly focused button command if enabled.
 *
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/listbox/ WAI-ARIA Authoring Practices: ListBox Pattern
 */

export default ListBox;
