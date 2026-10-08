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
    titleId?: string;
}

const defaultOptions = {};

/**
 * ID for the title element, used by aria-labelledby on the ActionSheet.
 * @aria {id} Referenced via aria-labelledby on the ActionSheet dialog.
 */
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
                        {title && <div>{title}</div>}
                        {subtitle && <div className="k-actionsheet-subtitle">{subtitle}</div>}
                    </div>
                }
                {children && <div className="k-actionsheet-title k-actionsheet-title-template" id={titleId}>{children}</div>}
                {actionsEnd && (
                    <div className="k-actionsheet-actions">
                        {actionsEnd}
                    </div>
                )}
            </div>
            {(input || filter) && (
                <div className="k-actionsheet-titlebar-group k-actionsheet-filter">
                    {input ? (
                        <Textbox value={inputValue} placeholder={inputPlaceholder} size="large" aria-label={title || inputPlaceholder || "Input"} />
                    ) : (
                        <Searchbox placeholder="Filter" size="large" aria-label="Filter options" />
                    )}
                </div>
            )}
        </div>
    );
};

ActionSheetHeader.className = ACTIONSHEETHEADER_CLASSNAME;
ActionSheetHeader.defaultOptions = defaultOptions;

export default ActionSheetHeader;
