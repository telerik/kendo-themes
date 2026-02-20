import { Searchbox } from '../searchbox';
import { classNames } from '../misc';
import { Textbox } from '../textbox';

export const ACTIONSHEETHEADER_CLASSNAME = `k-actionsheet-titlebar`;

export type KendoActionSheetHeaderProps = {
    title?: string;
    subtitle?: string;
    actionsStart?: React.JSX.Element | React.JSX.Element[];
    actionsEnd?: React.JSX.Element | React.JSX.Element[];
    filter?: boolean;
    input?: boolean;
    inputValue?: string;
    inputPlaceholder?: string;
    adaptive?: boolean;
    /**
     * ID for the title element, used by aria-labelledby on the ActionSheet.
     * @aria Referenced by aria-labelledby on the ActionSheet dialog
     */
    titleId?: string;
}

const defaultOptions = {};

export const ActionSheetHeader = (
    props: KendoActionSheetHeaderProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        title,
        subtitle,
        actionsStart,
        actionsEnd,
        filter,
        input,
        inputValue,
        inputPlaceholder,
        adaptive,
        titleId,
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
            <div className="k-actionsheet-titlebar-group">
                {actionsStart && (
                    <div className="k-actionsheet-actions">
                        {actionsStart}
                    </div>
                )}
                {!children &&
                    <div className="k-actionsheet-title" id={titleId}>
                        {title && <div className="k-text-center">{title}</div>}
                        {subtitle && <div className="k-actionsheet-subtitle k-text-center">{subtitle}</div>}
                    </div>
                }
                {children && <div className="k-actionsheet-title" id={titleId}>{children}</div>}
                {actionsEnd && (
                    <div className="k-actionsheet-actions">
                        {actionsEnd}
                    </div>
                )}
            </div>
            {(input || filter) && (
                <div className="k-actionsheet-titlebar-group k-actionsheet-filter">
                    {input ? (
                        <Textbox value={inputValue} placeholder={inputPlaceholder} size={adaptive ? "large" : "medium"} aria-label={title || inputPlaceholder || "Input"} />
                    ) : (
                        <Searchbox placeholder="Filter" size={adaptive ? "large" : "medium"} aria-label="Filter options" />
                    )}
                </div>
            )}
        </div>
    );
};

ActionSheetHeader.className = ACTIONSHEETHEADER_CLASSNAME;
ActionSheetHeader.defaultOptions = defaultOptions;

export default ActionSheetHeader;
