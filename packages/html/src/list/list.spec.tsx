import { classNames, optionClassNames, Size } from '../misc';
import { ListItem } from './list-item.spec';
import { ListGroup } from './list-group';
import { ListGroupItem } from './list-group-item';
import { ListHeader } from './list-header';
import { ListContent } from './list-content';
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
    listboxId?: string;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-multiselectable'?: 'true' | 'false';
    listboxAriaLive?: 'polite' | 'off' | 'assertive';
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
        listboxId,
        'aria-label': ariaLabel,
        'aria-labelledby': ariaLabelledby,
        'aria-multiselectable': ariaMultiselectable,
        listboxAriaLive,
        ...other
    } = props;

    let listHeader: string | undefined;
    let listHeaderId: string | undefined;
    let listGroup: string | number | boolean | React.JSX.Element | null | undefined;
    let listContent: string | number | boolean | React.JSX.Element | null | undefined;
    let listNoData: React.JSX.Element | undefined;
    const groupElements: React.JSX.Element[] = [];
    const listChildren: React.JSX.Element[] = [];
    let hasGroups = false;

    if (children) {
        hasGroups = children.some(child => child.type === ListGroup);

        if (hasGroups) {
            // Handle grouped list
            children.forEach((child, groupIndex) => {
                const groupHeaderId = listboxId ? `${listboxId}-group-${groupIndex}` : undefined;
                const hasGroupLabel = Boolean(child.props.label);
                if (child.type === ListGroup) {
                    const groupChildren: React.JSX.Element[] = [];
                    if (child.props.root === true) {
                        listHeader = child.props.label;
                        listHeaderId = hasGroupLabel ? groupHeaderId : undefined;

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
                                    id={groupHeaderId}
                                    role="presentation"
                                    className="k-list-header"
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
                        <ul
                            key={`ul-${groupIndex}`}
                            className="k-list-ul"
                            role="group"
                            {...(hasGroupLabel && groupHeaderId && { 'aria-labelledby': groupHeaderId })}
                        >
                            {groupChildren}
                        </ul>
                    );
                }
            });

            listGroup = (
                <>
                    {listHeader && <ListHeader role="presentation" id={listHeaderId}>{listHeader}</ListHeader>}
                    <div
                        className="k-list-content"
                        {...(listboxId && { id: listboxId })}
                        {...(role && { role })}
                        {...(ariaLabel && { 'aria-label': ariaLabel })}
                        {...(ariaLabelledby && { 'aria-labelledby': ariaLabelledby })}
                        {...(ariaMultiselectable && { 'aria-multiselectable': ariaMultiselectable })}
                    >
                        {groupElements}
                    </div>
                </>
            );
            screenReaders && (listNoData = <NoData className="k-sr-only" aria-live="polite">{listChildren.length} items found.</NoData>);
        } else {
            // Handle non-grouped list - direct ListItem children
            listContent = (
                <ListContent
                    role={role !== 'listbox' ? role : undefined}
                    ulRole={role === 'listbox' ? 'listbox' : undefined}
                    ulId={role === 'listbox' ? listboxId : undefined}
                    ulAriaLive={role === 'listbox' ? listboxAriaLive : undefined}
                    aria-label={ariaLabel}
                    aria-labelledby={ariaLabelledby}
                    aria-multiselectable={ariaMultiselectable}
                >
                    {children}
                </ListContent>
            );
            screenReaders && (listNoData = <NoData className="k-sr-only" aria-live="polite">{children.length} items found.</NoData>);
        }
    } else {
        listContent = <NoData aria-live="polite">No data found.</NoData>;
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
