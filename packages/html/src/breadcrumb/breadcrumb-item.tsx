import { classNames } from '../utils';

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
            {props.children}
        </li>
    );
};
