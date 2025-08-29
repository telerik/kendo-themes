import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
export const LISTGROUPITEM_CLASSNAME = `k-listgroup-item`;

const states = [];

const options = {};

export type KendoListGroupItemProps = {
    text?: string;
    icon?: string;
    showArrow?: boolean;
    arrowIconName?: string;
    children?: React.JSX.Element;
    href?: string;
    pseudo?: boolean;
};

export type KendoListGroupItemState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    dir: 'ltr'
};

export const ListGroupItem: KendoComponent<KendoListGroupItemProps & KendoListGroupItemState & React.HTMLAttributes<HTMLLIElement>> = (
    props: KendoListGroupItemProps &
    KendoListGroupItemState &
        React.HTMLAttributes<HTMLLIElement>
) => {
    const {
        text,
        arrowIconName,
        dir = defaultOptions.dir,
        children,
        href,
        pseudo,
        ...other
    } = props;

    let expandArrowName = arrowIconName;

    if ( !expandArrowName ) {
        expandArrowName = dir === 'rtl'
            ? 'chevron-left'
            : 'chevron-right';
    }

    return (

        <li
            {...other}
            className={classNames(
                props.className,
                LISTGROUPITEM_CLASSNAME
            )}>
            { !href && !pseudo && text }
            { href && <a href="#" className="k-link">{text}</a>}
            { pseudo && <span className="k-link">{text}</span>}
            {children}
        </li>
    );
};

ListGroupItem.states = states;
ListGroupItem.options = options;
ListGroupItem.className = LISTGROUPITEM_CLASSNAME;
ListGroupItem.defaultOptions = defaultOptions;

export default ListGroupItem;
