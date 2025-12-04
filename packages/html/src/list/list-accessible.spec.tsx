import { classNames, optionClassNames, Size } from '../misc';
import { ListItem, ListGroup, ListGroupItem, ListHeader } from '.';
import { NoData } from '../nodata';

import { KendoComponent } from '../_types/component';
import { LIST_FOLDER_NAME, LIST_MODULE_NAME } from './constants';
export const LISTACCESSIBLE_CLASSNAME = `k-list`;

const states = [];

const options = {
    size: [ Size.small, Size.medium, Size.large ]
};

export type KendoListAccessibleOptions = {
  size?: (typeof options.size)[number] | null;
};

export type KendoListAccessibleProps = KendoListAccessibleOptions & {
    virtualization?: boolean;
    children?: React.JSX.Element[];
    customValue?: React.JSX.Element;
};

export type KendoListAccessibleState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    size: Size.medium
};

export const ListAccessible: KendoComponent<KendoListAccessibleProps & KendoListAccessibleState & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoListAccessibleProps &
        KendoListAccessibleState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size = defaultOptions.size,
        virtualization,
        children,
        customValue,
        ...other
    } = props;

    let listHeader: string | undefined;
    let listGroup: string | number | boolean | React.JSX.Element | null | undefined;
    let listContent: string | number | boolean | React.JSX.Element | null | undefined;
    const groupElements: React.JSX.Element[] = [];

    if (children) {
        children.forEach((child, groupIndex) => {
            if (child.type === ListGroup) {
                const groupChildren: React.JSX.Element[] = [];
                if (child.props.root === true) {
                    listHeader = child.props.label;

                    // Add group items directly (no group header item)
                    if (child.props.children) {
                        child.props.children.forEach((optChild, itemIndex) => {
                            groupChildren.push(
                                <ListItem
                                    key={`root-group-item-${itemIndex}`}
                                    {...optChild.props}
                                />
                            );
                        });
                    }
                } else {
                    // Non-root group - add group header as first item
                    if (child.props.label) {
                        groupChildren.push(
                            <ListGroupItem
                                key={`group-header-${groupIndex}`}
                            >
                                {child.props.label}
                            </ListGroupItem>
                        );
                    }

                    // Add group items
                    if (child.props.children) {
                        child.props.children.forEach((optChild, itemIndex) => {
                            groupChildren.push(
                                <ListItem
                                    key={`group-${groupIndex}-item-${itemIndex}`}
                                    {...optChild.props}
                                />
                            );
                        });
                    }
                }

                groupElements.push(
                    <ul key={`ul-${groupIndex}`} className="k-list-ul">
                        {groupChildren}
                    </ul>
                );
            }
        });

        listGroup = (
            <>
                {listHeader && <ListHeader>{listHeader}</ListHeader>}
                <div className="k-list-content">
                    {groupElements}
                </div>
            </>
        );
    } else {
        listContent = <NoData>No data found.</NoData>;
    }

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                LISTACCESSIBLE_CLASSNAME,
                optionClassNames(LISTACCESSIBLE_CLASSNAME, {
                    size,
                }),
                {
                    ['k-virtual-list']: virtualization,
                }
            )}>
            {customValue}
            {listGroup}
            {listContent}
        </div>
    );
};

ListAccessible.states = states;
ListAccessible.options = options;
ListAccessible.className = LISTACCESSIBLE_CLASSNAME;
ListAccessible.defaultOptions = defaultOptions;
ListAccessible.moduleName = LIST_MODULE_NAME;
ListAccessible.folderName = LIST_FOLDER_NAME;

export default ListAccessible;
