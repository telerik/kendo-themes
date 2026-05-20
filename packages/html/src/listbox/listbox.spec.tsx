import { Button } from '../button';
import { List, ListContent } from '../list';
import { classNames, stateClassNames, States, Size } from '../misc';

import { KendoComponent } from '../_types/component';
import { LISTBOX_FOLDER_NAME, LISTBOX_MODULE_NAME } from './constants';
import a11ySpec from './behavior/accessibility.json';
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

ListBox.ariaSpec = a11ySpec.ariaSpec;

export default ListBox;
