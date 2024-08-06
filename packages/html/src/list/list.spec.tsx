import { classNames, optionClassNames, Size } from '../misc';
import { ListItem, ListGroup, ListContent } from '../list';
import { NoData } from '../nodata';

export const LIST_CLASSNAME = `k-list`;

const states = [];

const options = {
    size: [ Size.small, Size.medium, Size.large ]
};

export type KendoListOptions = {
  size?: (typeof options.size)[number] | null;
};

export type KendoListProps = KendoListOptions & {
    virtualization?: boolean;
    children?: React.JSX.Element[];
    optionLabel?: React.JSX.Element;
};

export type KendoListState = { [K in (typeof states)[number]]?: boolean };

export const List = (
    props: KendoListProps &
        KendoListState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size = Size.medium,
        virtualization,
        children,
        optionLabel,
        ...other
    } = props;

    let listHeader: string | undefined;
    let listGroup: string | number | boolean | React.JSX.Element | null | undefined;
    let listContent: string | number | boolean | React.JSX.Element | null | undefined;
    const listChildren : React.JSX.Element[] = [];

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
                    child.props.children.forEach( ( optChild, index ) => {
                        let groupLabel = '';

                        if ( index === 0 ) {
                            groupLabel = child.props.label;
                        }

                        listChildren.push(
                            <ListItem
                                className={index === 0 ? 'k-first' : ''}
                                key={`groupLabel-${index}-${new Date().getTime()}`}
                                {...optChild.props}
                                groupLabel={groupLabel}
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
                LIST_CLASSNAME,
                optionClassNames(LIST_CLASSNAME, {
                    size,
                }),
                {
                    ['k-virtual-list']: virtualization,
                }
            )}>
            {optionLabel}
            {listGroup}
            {listContent}
        </div>
    );
};

List.states = states;
List.options = options;
List.className = LIST_CLASSNAME;

export default List;
