import { classNames, optionClassNames, Size } from '../misc';
import { ListItem, ListGroup, ListContent, ListGroupItem } from '../list';
import { NoData } from '../nodata';

import { KendoComponent } from '../_types/component';
import { LIST_FOLDER_NAME, LIST_MODULE_NAME } from './constants';
export const LISTANGULAR_CLASSNAME = `k-list`;

const states = [];

const options = {
    size: [ Size.small, Size.medium, Size.large ]
};

export type KendoListAngularOptions = {
  size?: (typeof options.size)[number] | null;
};

export type KendoListAngularProps = KendoListAngularOptions & {
    virtualization?: boolean;
    children?: React.JSX.Element[];
};

export type KendoListAngularState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    size: Size.medium
};

export const ListAngular: KendoComponent<KendoListAngularProps & KendoListAngularState & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoListAngularProps &
        KendoListAngularState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size = defaultOptions.size,
        virtualization,
        children,
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
ListAngular.defaultOptions = defaultOptions;
ListAngular.moduleName = LIST_MODULE_NAME;
ListAngular.folderName = LIST_FOLDER_NAME;

export default ListAngular;
