import * as React from 'react';
import { KendoComponent } from '../_types/component';
import { List } from './list.spec';
import { classNames } from '../misc';

export const LIST_CONTAINER_CLASSNAME = `k-list-container`;

const states = [];

const options = {};

const defaultOptions = {};

export type KendoListContainerOptions = {};

export type KendoListContainerProps = KendoListContainerOptions & {};

export const ListContainer: KendoComponent<KendoListContainerProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoListContainerProps & React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                LIST_CONTAINER_CLASSNAME,
            )}>
            {props.children}
        </div>
    );
};

ListContainer.states = states;
ListContainer.options = options;
ListContainer.className = LIST_CONTAINER_CLASSNAME;
ListContainer.defaultOptions = defaultOptions;
ListContainer.moduleName = List.moduleName;
ListContainer.folderName = List.folderName;

export default ListContainer;
