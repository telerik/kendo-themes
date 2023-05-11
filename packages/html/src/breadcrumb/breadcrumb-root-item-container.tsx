import { classNames } from '../misc';

export const BREADCRUMBROOTITEMCONTAINER_CLASSNAME = `k-breadcrumb-root-item-container`;

export const BreadcrumbRootItemContainer = (
    props: React.HTMLAttributes<HTMLElement>
) => {
    const {
        ...other
    } = props;

    return (
        <ol
            {...other}
            className={classNames(
                props.className,
                BREADCRUMBROOTITEMCONTAINER_CLASSNAME,
            )}>
            {props.children}
        </ol>
    );
};
