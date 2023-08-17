import ListGroupItem from './listgroup-item.spec';
import { classNames } from '../misc';

export const LISTGROUP_CLASSNAME = `k-listgroup`;

const states = [];

const options = {};

export type KendoListGroupOptions = {
    children?: JSX.Element | JSX.Element[];
    dir?: string;
};

const defaultProps = {
    dir: 'ltr'
};

export const ListGroup = (
    props: KendoListGroupOptions &
        React.HTMLAttributes<HTMLUListElement>
) => {
    const {
        children,
        dir = defaultProps.dir,
        ...other
    } = props;

    const listChildren : JSX.Element[] = [];

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
ListGroup.defaultProps = defaultProps;

export default ListGroup;
