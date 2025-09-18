import ListGroupItem from './listgroup-item.spec';
import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { LISTGROUP_FOLDER_NAME, LISTGROUP_MODULE_NAME } from './constants';
export const LISTGROUP_CLASSNAME = `k-listgroup`;

const states = [];

const options = {};

export type KendoListGroupOptions = {
    children?: React.JSX.Element | React.JSX.Element[];
    dir?: string;
};

const defaultOptions = {
    dir: 'ltr'
};

export const ListGroup: KendoComponent<KendoListGroupOptions & React.HTMLAttributes<HTMLUListElement>> = (
    props: KendoListGroupOptions &
        React.HTMLAttributes<HTMLUListElement>
) => {
    const {
        children,
        dir = defaultOptions.dir,
        ...other
    } = props;

    const listChildren : React.JSX.Element[] = [];

    if (children) {
        if (Array.isArray(children)) {
            children.map((child, index) => {
                if ( child.type === ListGroupItem) {
                    listChildren.push(
                        <ListGroupItem {...child.props} dir={dir} key={index} />
                    );
                } else {
                    listChildren.push(child);
                }
            });
        }
    }

    return (
        <ul
            {...other}
            className={classNames(
                props.className,
                LISTGROUP_CLASSNAME
            )}>
            {listChildren}
        </ul>
    );
};

ListGroup.states = states;
ListGroup.options = options;
ListGroup.className = LISTGROUP_CLASSNAME;
ListGroup.defaultOptions = defaultOptions;
ListGroup.moduleName = LISTGROUP_MODULE_NAME;
ListGroup.folderName = LISTGROUP_FOLDER_NAME;

export default ListGroup;
