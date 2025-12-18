import { Button } from '../button';
import { List } from '../list';
import { classNames, optionClassNames, stateClassNames, States, Size } from '../misc';

import { KendoComponent } from '../_types/component';
import { LISTBOX_FOLDER_NAME, LISTBOX_MODULE_NAME } from './constants';
export const LISTBOX_CLASSNAME = `k-listbox`;

const states = [
    States.disabled
];

const options = {
    size: [ Size.small, Size.medium, Size.large ]
};

export type KendoListBoxOptions = {
  size?: (typeof options.size)[number] | null;
};

export type KendoListBoxProps = KendoListBoxOptions & {
    children?: React.JSX.Element[];
    actionsPosition?: 'left' | 'right' | 'top' | 'bottom';
    actions?: string[];
    dir?: 'ltr' | 'rtl';
    id?: string;
    multiselectable?: boolean;
};

export type KendoListBoxState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    size: Size.medium,
    actionsPosition: 'left'
} as const;

export const ListBox: KendoComponent<KendoListBoxProps & KendoListBoxState & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoListBoxProps &
        KendoListBoxState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size = defaultOptions.size,
        disabled,
        children,
        actionsPosition = defaultOptions.actionsPosition,
        actions,
        dir,
        id = 'k-listbox',
        multiselectable,
        ...other
    } = props;

    return (
        <div
            {...other}
            dir={dir}
            className={classNames(
                props.className,
                LISTBOX_CLASSNAME,
                optionClassNames(LISTBOX_CLASSNAME, {
                    size,
                }),
                stateClassNames(LISTBOX_CLASSNAME, {
                    disabled,
                }),
                {
                    [`k-listbox-actions-${actionsPosition}`]: actionsPosition,
                }
            )}
        >
            { actions && (
                <div
                    className="k-listbox-actions"
                    role="toolbar"
                    aria-label="ListBox actions"
                    aria-controls={`${id}-listbox`}
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

                        const actionsLabelMap = {
                            "left": "Move selected item left",
                            "right": "Move selected item right",
                            "to": "Transfer selected item to",
                            "from": "Transfer selected item from",
                            "up": "Move selected item up",
                            "down": "Move selected item down",
                            "x": "Remove selected item"
                        };

                        return <Button key={action} icon={actionsIconMap[action]} size={size} aria-label={actionsLabelMap[action]} />;
                    })}
                </div>
            )}
            <div className={classNames(
                'k-list-scroller',
                'k-selectable'
            )}>
                <List
                    id={`${id}-listbox`}
                    size={size}
                    children={children}
                    role="listbox"
                    aria-label="ListBox options"
                    aria-multiselectable={multiselectable ? 'true' : undefined}
                />
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

export default ListBox;
