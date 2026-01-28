import { classNames, optionClassNames, Size } from '../misc';
import { ListItem } from './list-item.spec';
import { ListGroup } from './list-group';
import { ListGroupItem } from './list-group-item';
import { ListHeader } from './list-header';
import { NoData } from '../nodata';

import { KendoComponent } from '../_types/component';
import { LIST_FOLDER_NAME, LIST_MODULE_NAME } from './constants';
export const LIST_CLASSNAME = `k-list`;

const states = [];

const options = {
    size: [ Size.undefined, Size.small, Size.medium, Size.large ]
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
    role?: string;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-multiselectable'?: 'true' | 'false';
};

export type KendoListState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
};

export const List: KendoComponent<KendoListProps & KendoListState & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoListProps &
        KendoListState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size,
        virtualization,
        children,
        optionLabel,
        customValue,
        screenReaders,
        role,
        'aria-label': ariaLabel,
        'aria-labelledby': ariaLabelledby,
        'aria-multiselectable': ariaMultiselectable,
        ...other
    } = props;

    let listHeader: string | undefined;
    let listGroup: string | number | boolean | React.JSX.Element | null | undefined;
    let listContent: string | number | boolean | React.JSX.Element | null | undefined;
    let listNoData: React.JSX.Element | undefined;
    const groupElements: React.JSX.Element[] = [];
    const listChildren: React.JSX.Element[] = [];

    if (children) {
        const hasGroups = children.some(child => child.type === ListGroup);

        if (hasGroups) {
            // Handle grouped list
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
                                    groupIconName={child.props.groupIconName}
                                >
                                    {child.props.label}
                                </ListGroupItem>
                            );
                        }

                        // Add group items
                        if (child.props.children) {
                            child.props.children.forEach((optChild, itemIndex) => {
                                const listItem = (
                                    <ListItem
                                        key={`group-${groupIndex}-item-${itemIndex}`}
                                        {...optChild.props}
                                    />
                                );
                                groupChildren.push(listItem);
                                listChildren.push(listItem);
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
            screenReaders && (listNoData = <NoData className="k-sr-only">{listChildren.length} items found.</NoData>);
        } else {
            // Handle non-grouped list - direct ListItem children
            listContent = (
                <div className="k-list-content">
                    <ul className="k-list-ul">
                        {children}
                    </ul>
                </div>
            );
            screenReaders && (listNoData = <NoData className="k-sr-only">{children.length} items found.</NoData>);
        }
    } else {
        listContent = <NoData>No data found.</NoData>;
    }

    return (
        <div
            {...other}
            {...(role && { role })}
            {...(ariaLabel && { 'aria-label': ariaLabel })}
            {...(ariaLabelledby && { 'aria-labelledby': ariaLabelledby })}
            {...(ariaMultiselectable && { 'aria-multiselectable': ariaMultiselectable })}
            className={classNames(
                props.className,
                LIST_CLASSNAME,
                optionClassNames(LIST_CLASSNAME, {
                    size,
                }),
                {
                    ['k-virtual-list']: virtualization,
                }
            )}
        >
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
List.moduleName = LIST_MODULE_NAME;
List.folderName = LIST_FOLDER_NAME;

export default List;
