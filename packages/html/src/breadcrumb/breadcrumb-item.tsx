import * as React from 'react';
import { classNames } from '../misc';
import { BreadcrumbLink } from './breadcrumb-link';

export const BREADCRUMBITEM_CLASSNAME = `k-breadcrumb-item`;

export type KendoBreadcrumbItemProps = {
    root?: boolean;
    last?: boolean;
};

export const BreadcrumbItem = (
    props: KendoBreadcrumbItemProps &
        React.HTMLAttributes<HTMLElement>
) => {
    const {
        root,
        last,
        ...other
    } = props;

    const resolvedChildren = last
        ? React.Children.map(props.children, (child) => {
            if (React.isValidElement<React.ComponentProps<typeof BreadcrumbLink>>(child)
                && child.type === BreadcrumbLink
            ) {
                return React.cloneElement(child, {
                    'aria-current': 'page',
                    'aria-disabled': 'true'
                });
            }

            return child;
        })
        : props.children;

    return (
        <li
            {...other}
            className={classNames(
                props.className,
                BREADCRUMBITEM_CLASSNAME,
                {
                    'k-breadcrumb-root-item': root,
                    'k-breadcrumb-last-item': last,
                }
            )}>
            {resolvedChildren}
        </li>
    );
};
