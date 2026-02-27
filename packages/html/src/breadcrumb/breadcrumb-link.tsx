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
    /** @aria Last item in breadcrumb gets aria-current="page" and aria-disabled="true" */
    last?: boolean;
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
        last,
        ...other
    } = props;

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
            {...(last && { 'aria-current': 'page' as const })}
            {...(last && { 'aria-disabled': 'true' })}
        >
            {props.children}
        </a>
    );
};

BreadcrumbLink.states = states;
