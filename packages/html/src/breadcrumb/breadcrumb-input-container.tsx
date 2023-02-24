import { classNames } from '../utils';

export const BREADCRUMBINPUTCONTAINER_CLASSNAME = `k-breadcrumb-input-container`;

export const BreadcrumbInputContainer = (
    props: React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                BREADCRUMBINPUTCONTAINER_CLASSNAME
            )}>
            {props.children}
        </div>
    );
};
