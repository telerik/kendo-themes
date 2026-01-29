import * as React from 'react';
import { classNames, stateClassNames, States } from '../misc';
import { BreadcrumbItemText } from './breadcrumb-item-text';

export const BREADCRUMBLINK_CLASSNAME = ``;

const states = [
    States.hover,
    States.focus,
    States.disabled,
];

export type KendoBreadcrumbLinkProps = {
    root?: boolean;
    icon?: boolean;
    icontext?: boolean;
};

export type KendoBreadcrumbLinkState = { [K in (typeof states)[number]]?: boolean };

export const BreadcrumbLink = (
    props: KendoBreadcrumbLinkProps &
    KendoBreadcrumbLinkState &
        React.HTMLAttributes<HTMLElement>
) => {
    const {
        root,
        icon,
        icontext,
        hover,
        focus,
        disabled,
        'aria-label': ariaLabel,
        ...other
    } = props;

    const hasTextContent = (node: React.ReactNode): boolean => {
        if (typeof node === 'string' || typeof node === 'number') {
            return true;
        }

        if (React.isValidElement(node)) {
            if (node.type === BreadcrumbItemText) {
                return true;
            }

            if (typeof node.props?.text === 'string' || typeof node.props?.text === 'number') {
                return true;
            }

            return React.Children.toArray(node.props?.children).some(hasTextContent);
        }

        return false;
    };

    const hasImageElement = (node: React.ReactNode): boolean => {
        if (React.isValidElement(node)) {
            if (node.type === 'img') {
                return true;
            }

            return React.Children.toArray(node.props?.children).some(hasImageElement);
        }

        return false;
    };

    const applyAltToImg = (node: React.ReactNode, altText: string): React.ReactNode => {
        if (!React.isValidElement(node)) {
            return node;
        }

        if (node.type === 'img') {
            const imgProps = node.props as React.ImgHTMLAttributes<HTMLImageElement>;
            if (imgProps.alt == null || imgProps.alt === '') {
                return React.cloneElement(node, { alt: altText });
            }
        }

        if (node.props?.children) {
            const mappedChildren = React.Children.map(node.props.children, (child) => applyAltToImg(child, altText));
            return React.cloneElement(node, undefined, mappedChildren);
        }

        return node;
    };

    const childrenArray = React.Children.toArray(props.children);
    const hasText = childrenArray.some(hasTextContent);
    const hasImage = childrenArray.some(hasImageElement);

    let resolvedAriaLabel = ariaLabel || (icon && !icontext ? 'Breadcrumb item' : undefined);

    if (!resolvedAriaLabel && hasImage && !hasText) {
        resolvedAriaLabel = 'Breadcrumb item';
    }

    const resolvedChildren = React.Children.map(props.children, (child) =>
        applyAltToImg(child, resolvedAriaLabel || 'Breadcrumb item')
    );
    const resolvedStyle = { minWidth: '24px', minHeight: '24px', ...props.style };

    return (
        <a
            href="#"
            {...other}
            className={classNames(
                props.className,
                stateClassNames(BREADCRUMBLINK_CLASSNAME, {
                    hover,
                    focus,
                    disabled
                }),
                {
                    'k-breadcrumb-link': !root,
                    'k-breadcrumb-root-link': root,
                    'k-breadcrumb-icon-link': icon,
                    'k-breadcrumb-icontext-link': icontext,
                },
            )}
            {...(resolvedAriaLabel && { 'aria-label': resolvedAriaLabel })}
            style={resolvedStyle}>
            {resolvedChildren}
        </a>
    );
};

BreadcrumbLink.states = states;
