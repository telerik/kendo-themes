import { classNames, stateClassNames, optionClassNames, States, Size } from '../misc';

export const BREADCRUMB_CLASSNAME = `k-breadcrumb`;

const states = [
    States.focus
];

const options = {
    size: [ Size.small, Size.medium, Size.large ]
};

export type KendoBreadcrumbProps = {
    collapsing?: null | 'auto' | 'none' | 'wrap';
    size?: (typeof options.size)[number] | null;
};

export type KendoBreadcrumbState = { [K in (typeof states)[number]]?: boolean };

const defaultProps = {
    collapsing: 'auto',
    size: Size.medium
};

export const Breadcrumb = (
    props: KendoBreadcrumbProps &
    KendoBreadcrumbState &
        React.HTMLAttributes<HTMLElement>
) => {
    const {
        size = defaultProps.size,
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
                optionClassNames(BREADCRUMB_CLASSNAME, {
                    size,
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
