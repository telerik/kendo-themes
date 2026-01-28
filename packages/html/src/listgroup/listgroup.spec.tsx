import React from 'react';
import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { LISTGROUP_FOLDER_NAME, LISTGROUP_MODULE_NAME } from './constants';
export const LISTGROUP_CLASSNAME = `k-listgroup`;

const states = [];

const options = {};

export type KendoListGroupOptions = {
    children?: React.ReactNode;
    dir?: string;
};

const defaultOptions = {
    dir: 'ltr'
};

export const ListGroup: KendoComponent<KendoListGroupOptions & React.HTMLAttributes<HTMLUListElement>> = (
    props: KendoListGroupOptions &
        React.HTMLAttributes<HTMLUListElement>
) => {
    const {
        children,
        dir = defaultOptions.dir,
        ...other
    } = props;

    return (
        <ul
            {...other}
            className={classNames(
                props.className,
                LISTGROUP_CLASSNAME
            )}>
            {React.Children.map(children, (child, index) =>
                React.isValidElement(child)
                    ? React.cloneElement(child, { dir, key: index } as React.Attributes)
                    : child
            )}
        </ul>
    );
};

ListGroup.states = states;
ListGroup.options = options;
ListGroup.className = LISTGROUP_CLASSNAME;
ListGroup.defaultOptions = defaultOptions;
ListGroup.moduleName = LISTGROUP_MODULE_NAME;
ListGroup.folderName = LISTGROUP_FOLDER_NAME;

export default ListGroup;
