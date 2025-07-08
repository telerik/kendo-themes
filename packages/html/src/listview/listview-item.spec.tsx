import { classNames, stateClassNames, States } from '../misc';

import { KendoComponent } from '../_types/component';
export const LISTVIEWITEM_CLASSNAME = `k-listview-item`;

const states = [
    States.focus,
    States.selected
];

const options = {};

const defaultOptions = {};

export type KendoListViewItemState = { [K in (typeof states)[number]]?: boolean };

export const ListViewItem: KendoComponent<KendoListViewItemState & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoListViewItemState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        focus,
        selected,
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
            )}>
            {props.children}
        </div>
    );
};

ListViewItem.states = states;
ListViewItem.options = options;
ListViewItem.className = LISTVIEWITEM_CLASSNAME;
ListViewItem.defaultOptions = defaultOptions;

export default ListViewItem;
