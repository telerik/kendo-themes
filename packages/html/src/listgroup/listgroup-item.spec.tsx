import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { LISTGROUP_FOLDER_NAME, LISTGROUP_MODULE_NAME } from './constants';
export const LISTGROUPITEM_CLASSNAME = `k-listgroup-item`;

const states = [];

const options = {};

export type KendoListGroupItemProps = {
    text?: string;
    children?: React.JSX.Element;
    href?: boolean;
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
        children,
        href,
        pseudo,
        ...other
    } = props;

    return (

        <li
            {...other}
            className={classNames(
                props.className,
                LISTGROUPITEM_CLASSNAME
            )}>
            { !href && !pseudo && text }
            { href && <a className="k-link">{text}</a>}
            { pseudo && <span className="k-link">{text}</span>}
            {children}
        </li>
    );
};

ListGroupItem.states = states;
ListGroupItem.options = options;
ListGroupItem.className = LISTGROUPITEM_CLASSNAME;
ListGroupItem.defaultOptions = defaultOptions;
ListGroupItem.moduleName = LISTGROUP_MODULE_NAME;
ListGroupItem.folderName = LISTGROUP_FOLDER_NAME;

export default ListGroupItem;
