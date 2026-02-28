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
    /** @aria aria-label for the listbox element */
    'aria-label'?: string;
    /** @aria aria-multiselectable when multiple selection is enabled */
    multiselectable?: boolean;
    /** @aria ID for the listbox element, referenced by toolbar aria-controls */
    id?: string;
};

export type KendoListBoxState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    actionsPosition: 'left'
} as const;

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
                            "left": dir !== "rtl" ? "caret-alt-left" : "caret-alt-right",
                            "right": dir !== 'rtl' ? "caret-alt-right" : "caret-alt-left",
                            "to": dir !== 'rtl' ? "caret-double-alt-right" : "caret-double-alt-left",
                            "from": dir !== 'rtl' ? "caret-double-alt-left" : "caret-double-alt-right",
                            "up": "caret-alt-up",
                            "down": "caret-alt-down",
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
 * @ariaSpec
 * ListBox implements the WAI-ARIA listbox pattern.
 *
 * - List: role="listbox" with aria-label and optional aria-multiselectable
 * - Items: role="option" with aria-selected and tabindex
 * - Toolbar: role="toolbar" with aria-label and aria-controls
 * - Toolbar buttons have aria-label for accessible names
 */
ListBox.ariaSpec = {
    selector: '.k-listbox',
    rules: [
        { selector: '.k-listbox .k-list-ul', attribute: 'role=listbox', usage: 'Specifies the role of the ListBox list element.' },
        { selector: '.k-listbox .k-list-ul', attribute: 'aria-label or aria-labelledby', usage: 'Adds a label to the list element of the ListBox.' },
        { selector: '.k-listbox .k-list-item', attribute: 'role=option', usage: 'Specifies the role of the ListBox item element.' },
        { selector: '.k-listbox .k-list-item', attribute: 'aria-selected=true/false', usage: 'Set to true if the item is selected.' },
        { selector: '.k-listbox .k-list-item', attribute: 'tabindex', usage: 'The focused listbox item should have tabindex 0, all others -1.' },
        { selector: '.k-listbox-actions', attribute: 'role=toolbar', usage: 'The toolbar is a collection of command buttons.' },
        { selector: '.k-listbox-actions', attribute: 'aria-label', usage: 'Clarifies the purpose of the toolbar.' },
        { selector: '.k-listbox-actions[aria-controls]', attribute: 'aria-controls', usage: 'Points to the id of the listbox element being controlled.' },
        { selector: '.k-listbox-actions .k-button', attribute: 'aria-label or title', usage: 'All buttons in the toolbar must have labels.' },
    ]
};

export default ListBox;
