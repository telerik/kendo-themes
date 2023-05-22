import { classNames } from '../misc';

export const BREADCRUMBITEMTEXT_CLASSNAME = `k-breadcrumb-item-text`;

export type KendoBreadcrumbItemTextProps = {
    text?: string;
};

export const BreadcrumbItemText = (
    props: KendoBreadcrumbItemTextProps &
        React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        text,
        ...other
    } = props;

    const textOrChildren = text
        ? text
        : props.children;

    return (
        <span
            {...other}
            className={classNames(
                props.className,
                BREADCRUMBITEMTEXT_CLASSNAME
            )}>
            {textOrChildren}
        </span>
    );
};
