import React from 'react';
import { classNames } from '../misc';

const className = `k-treeview-group`;

export type KendoTreeviewGroupProps = {
    children?: React.ReactNode;
    dir?: 'ltr' | 'rtl';
    level?: number;
    /** @aria role - "tree" for root, "group" for nested */
    role?: string;
};

export const TreeviewGroup = (
    props: KendoTreeviewGroupProps &
    React.HTMLAttributes<HTMLUListElement>
) => {
    const {
        children,
        dir,
        level = 1,
        role = 'group',
        ...other
    } = props;

    return (
        <ul
            {...other}
            className={classNames(props.className, className)}
            role={role}
        >
            {React.Children.map(children, (child, index) =>
                React.isValidElement(child)
                    ? React.cloneElement(child, { dir, level, key: index } as React.Attributes)
                    : child
            )}
        </ul>
    );
};
