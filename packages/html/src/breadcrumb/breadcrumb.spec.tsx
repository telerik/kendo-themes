import { classNames, stateClassNames, States } from '../misc';

export const BREADCRUMB_CLASSNAME = `k-breadcrumb`;

const states = [
    States.focus
];

const options = {};

export type KendoBreadcrumbProps = {
    collapsing?: null | 'auto' | 'none' | 'wrap';
};

export type KendoBreadcrumbState = { [K in (typeof states)[number]]?: boolean };

const defaultProps = {
    collapsing: 'auto'
};

export const Breadcrumb = (
    props: KendoBreadcrumbProps &
    KendoBreadcrumbState &
        React.HTMLAttributes<HTMLElement>
) => {
    const {
        collapsing = defaultProps.collapsing,
        focus,
        ...other
    } = props;

    return (
        <nav
            {...other}
            className={classNames(
                props.className,
                BREADCRUMB_CLASSNAME,
                stateClassNames(BREADCRUMB_CLASSNAME, {
                    focus,
                }),
                {
                    'k-breadcrumb-wrap': collapsing === 'wrap'
                }
            )}>
            {props.children}
        </nav>
    );
};

Breadcrumb.states = states;
Breadcrumb.options = options;
Breadcrumb.className = BREADCRUMB_CLASSNAME;
Breadcrumb.defaultProps = defaultProps;

export default Breadcrumb;
