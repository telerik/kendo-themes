import { classNames, optionClassNames, Size } from '../utils';
import { ListItem, ListGroup, ListContent, ListGroupItem } from '../list';
import { NoData } from '../nodata';

export const LISTANGULAR_CLASSNAME = `k-list`;

const states = [];

const options = {
    size: [ Size.small, Size.medium, Size.large ],
};

export type KendoListAngularOptions = {
  size?: (typeof options.size)[number] | null;
};

export type KendoListAngularProps = KendoListAngularOptions & {
    virtualization?: boolean;
    children?: JSX.Element[]
};

export type KendoListAngularState = { [K in (typeof states)[number]]?: boolean };

const defaultProps = {
    size: Size.medium,
};

export const ListAngular = (
    props: KendoListAngularProps &
        KendoListAngularState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size = defaultProps.size,
        virtualization,
        children,
        ...other
    } = props;

    let listHeader: string | undefined;
    let listGroup: string | number | boolean | JSX.Element | null | undefined;
    let listContent: string | number | boolean | JSX.Element | null | undefined;
    const listChildren : JSX.Element[] = [];

    if (children) {
        children.map((child, index) => {
            if ( child.type === ListGroup) {
                if (child.props.root === true) {
                    listHeader = child.props.label;

                    child.props.children.map( (optChild, index) => {
                        listChildren.push(
                            <ListItem
                                key={`optChild-${index}-${new Date().getTime()}`}
                                {...optChild.props}
                            />
                        );
                    });

                } else {
                    listChildren.push(
                        <ListGroupItem
                            key={`listChild-${index}`}
                            {...child.props}
                        >
                            {child.props.label}
                        </ListGroupItem>
                    );

                    child.props.children.map( (optChild, index) => {
                        listChildren.push(
                            <ListItem
                                key={`fwOptChild-${index}-${new Date().getTime()}`}
                                {...optChild.props}
                            />
                        );
                    });
                }

                listGroup = <ListGroup label={listHeader} virtualization={virtualization}>{listChildren}</ListGroup>;

            } else if ( child.type === ListItem ) {
                listChildren.push( <ListItem key={`${child.type}-${index}`} {...child.props} /> );
                listContent = <ListContent virtualization={virtualization}>{listChildren}</ListContent>;
            }
        });
    } else {
        listContent = <NoData>No data found.</NoData>;
    }

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                LISTANGULAR_CLASSNAME,
                optionClassNames(LISTANGULAR_CLASSNAME, {
                    size,
                }),
                {
                    ['k-virtual-list']: virtualization,
                }
            )}>
            {listGroup}
            {listContent}
        </div>
    );
};

ListAngular.states = states;
ListAngular.options = options;
ListAngular.className = LISTANGULAR_CLASSNAME;
ListAngular.defaultProps = defaultProps;

export default ListAngular;
