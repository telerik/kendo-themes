import React from 'react';
import { classNames, optionClassNames, Size } from '../misc';
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
    children?: React.ReactNode;
    header?: React.ReactNode;
    optionLabel?: React.ReactNode;
    customValue?: React.ReactNode;
    noData?: React.ReactNode;
    screenReaders?: boolean;
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
        header,
        optionLabel,
        customValue,
        noData,
        screenReaders,
        ...other
    } = props;

    const childArray = React.Children.toArray(children);
    const firstChild = childArray[0] as React.ReactElement<{ children?: React.ReactNode }>;
    const itemCount = firstChild?.props?.children
        ? React.Children.count(firstChild.props.children)
        : React.Children.count(children);

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
            {header && <ListHeader>{header}</ListHeader>}
            {children ? children : (noData !== undefined ? noData : <NoData live>No data found.</NoData>)}
            {screenReaders && children && <NoData className="k-sr-only" live>{itemCount} items found.</NoData>}
        </div>
    );
};

List.states = states;
List.options = options;
List.className = LIST_CLASSNAME;
List.defaultOptions = defaultOptions;
List.moduleName = LIST_MODULE_NAME;
List.folderName = LIST_FOLDER_NAME;

/**
 * Accessibility specification for List.
 *
 * @accessibility
 * - List is a container for listbox content used in dropdowns
 * - NoData element should have aria-live="polite" for announcements
 * - Screen reader helper announces item count
 *
 * @see ListContent.ariaSpec for listbox role details
 * @see ListItem.ariaSpec for option role details
 * @see ListUl.ariaSpec for list structure details
 */
List.ariaSpec = {
    selector: '.k-list',
    rules: [
        { selector: '.k-list .k-no-data', attribute: 'aria-live=polite', usage: 'Announces "No data found" to screen readers.' },
    ]
};

export default List;
