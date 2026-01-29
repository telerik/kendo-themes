import { classNames, stateClassNames, States } from '../misc';

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

    const resolvedAriaLabel = ariaLabel || (icon && !icontext ? 'Breadcrumb item' : undefined);
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
            {props.children}
        </a>
    );
};

BreadcrumbLink.states = states;
