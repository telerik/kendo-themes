import { classNames } from '../misc';

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

export const ListGroupItem = (
    props: KendoListGroupItemProps &
    KendoListGroupItemState &
        React.HTMLAttributes<HTMLLIElement>
) => {
    const {
        text,
        arrowIconName,
        dir,
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

export default ListGroupItem;
