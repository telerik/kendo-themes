import { classNames, optionClassNames, Size } from '../misc';
import { ListItem, ListGroup, ListContent } from '../list';
import { NoData } from '../nodata';

import { KendoComponent } from '../_types/component';
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
    customValue?: React.JSX.Element;
    screenReaders?: boolean;
};

export type KendoListState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    size: Size.medium
};

export const List: KendoComponent<KendoListProps & KendoListState & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoListProps &
        KendoListState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size = defaultOptions.size,
        virtualization,
        children,
        optionLabel,
        customValue,
        screenReaders,
        ...other
    } = props;

    let listHeader: string | undefined;
    let listGroup: string | number | boolean | React.JSX.Element | null | undefined;
    let listContent: string | number | boolean | React.JSX.Element | null | undefined;
    let listNoData: React.JSX.Element | undefined;
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
                screenReaders && (listNoData = <NoData className="k-sr-only">{listChildren.length} items found.</NoData>);
            }
        });
    } else {
        listNoData = <NoData>No data found.</NoData>;
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
            {customValue}
            {listGroup}
            {listContent}
            {listNoData}
        </div>
    );
};

List.states = states;
List.options = options;
List.className = LIST_CLASSNAME;
List.defaultOptions = defaultOptions;

export default List;
