import { Searchbox } from '../searchbox';
import { classNames } from '../misc';

export const ACTIONSHEETHEADER_CLASSNAME = `k-actionsheet-titlebar`;

export type KendoActionSheetHeaderProps = {
    title?: string;
    subTitle?: string;
    actionsStart?: React.JSX.Element | React.JSX.Element[];
    actionsEnd?: React.JSX.Element | React.JSX.Element[];
    filter?: boolean;
    adaptive?: boolean;
}

export const ActionSheetHeader = (
    props: KendoActionSheetHeaderProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        title,
        subTitle,
        actionsStart,
        actionsEnd,
        filter,
        adaptive,
        children,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                ACTIONSHEETHEADER_CLASSNAME
            )}>
            <div className="k-actionsheet-titlebar-group k-hbox">
                {actionsStart && (
                    <div className="k-actionsheet-actions">
                        {actionsStart}
                    </div>
                )}
                {!children && (title || subTitle) && (
                    <div className="k-actionsheet-title">
                        {title && <div className="k-text-center">{title}</div>}
                        {subTitle && <div className="k-actionsheet-subtitle k-text-center">{subTitle}</div>}
                    </div>
                )}
                {children && <div className="k-actionsheet-title">{children}</div>}
                {actionsEnd && (
                    <div className="k-actionsheet-actions">
                        {actionsEnd}
                    </div>
                )}
            </div>
            {filter && (
                <div className="k-actionsheet-titlebar-group k-actionsheet-filter">
                    <Searchbox placeholder="Filter" size={adaptive ? "large" : "medium"} />
                </div>
            )}
        </div>
    );
};
