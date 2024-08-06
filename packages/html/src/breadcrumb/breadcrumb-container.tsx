import { classNames } from '../misc';

export const BREADCRUMBCONTAINER_CLASSNAME = `k-breadcrumb-container`;

export type KendoBreadcrumbContainerProps = {
    collapsing?: null | 'auto' | 'none' | 'wrap';
};

export const BreadcrumbContainer = (
    props: KendoBreadcrumbContainerProps &
        React.HTMLAttributes<HTMLElement>
) => {
    const {
        collapsing = 'auto',
        ...other
    } = props;

    return (
        <ol
            {...other}
            className={classNames(
                props.className,
                BREADCRUMBCONTAINER_CLASSNAME,
                {
                    '!k-flex-wrap': collapsing === 'wrap',
                    'k-flex-none': collapsing === 'none',
                }
            )}>
            {props.children}
        </ol>
    );
};
