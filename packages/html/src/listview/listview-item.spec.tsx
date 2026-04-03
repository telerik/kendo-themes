import { classNames, stateClassNames, States } from '../misc';

import { KendoComponent } from '../_types/component';
import { LISTVIEW_FOLDER_NAME, LISTVIEW_MODULE_NAME } from './constants';
export const LISTVIEWITEM_CLASSNAME = `k-listview-item`;

const states = [
    States.focus,
    States.selected
];

const options = {};

const defaultOptions = {};

export type KendoListViewItemProps = {
    /** @aria role - "listitem" for non-selectable, "option" for selectable ListView */
    itemRole?: 'listitem' | 'option';
    /** @aria aria-setsize - Total number of items in the ListView */
    ariaSetSize?: number;
    /** @aria aria-posinset - Position of this item (1-based) */
    ariaPosInSet?: number;
    /** @aria tabindex=0 for first/focused item */
    tabIndex?: number;
};

export type KendoListViewItemState = { [K in (typeof states)[number]]?: boolean };

export const ListViewItem: KendoComponent<KendoListViewItemProps & KendoListViewItemState & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoListViewItemProps &
        KendoListViewItemState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        focus,
        selected,
        itemRole,
        ariaSetSize,
        ariaPosInSet,
        tabIndex,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                LISTVIEWITEM_CLASSNAME,
                stateClassNames(LISTVIEWITEM_CLASSNAME, {
                    focus,
                    selected,
                })
            )}
            role={itemRole}
            aria-setsize={ariaSetSize}
            aria-posinset={ariaPosInSet}
            tabIndex={tabIndex}
            aria-selected={itemRole === 'option' && selected ? 'true' : undefined}
        >
            {props.children}
        </div>
    );
};

ListViewItem.states = states;
ListViewItem.options = options;
ListViewItem.className = LISTVIEWITEM_CLASSNAME;
ListViewItem.defaultOptions = defaultOptions;
ListViewItem.moduleName = LISTVIEW_MODULE_NAME;
ListViewItem.folderName = LISTVIEW_FOLDER_NAME;

export default ListViewItem;
