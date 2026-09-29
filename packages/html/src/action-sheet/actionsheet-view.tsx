import { classNames } from '../misc';
import { ActionSheetFooter } from './actionsheet-footer';
import { ActionSheetHeader } from './actionsheet-header';

export const ACTIONSHEETVIEW_CLASSNAME = `k-actionsheet-view`;

const states = [];

const options = {};

const defaultOptions = {};

export type KendoActionSheetViewProps = {
    children?: React.JSX.Element | React.JSX.Element[];
    header?: React.ReactElement<typeof ActionSheetHeader>;
    footer?: React.ReactElement<typeof ActionSheetFooter>;
    adaptive?: boolean;
    animated?: boolean;
    titleId?: string;
    side?: 'top' | 'right' | 'bottom' | 'left';
    /**
     * @ux {Resize handle} Renders a drag handle used to resize the ActionSheet.
     */
    resizable?: boolean;
    /**
     * @ux {Constrained width} Caps the content and footer width on wide viewports.
     */
    constrained?: boolean;
}

export const ActionSheetView = (
    props: KendoActionSheetViewProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        adaptive,
        animated,
        children,
        header,
        footer,
        titleId,
        side,
        resizable,
        constrained,
        ...other
    } = props;

    const _ActionSheetHeader = header?.type === ActionSheetHeader && <ActionSheetHeader adaptive={adaptive} titleId={titleId} {...header?.props} />;
    const _ActionSheetFooter = footer?.type === ActionSheetFooter && (
        <ActionSheetFooter
            {...footer?.props}
            className={classNames((footer?.props as { className?: string })?.className, { 'k-actionsheet-constrained': constrained })}
        />
    );

    // The handle sits on the edge opposite the anchored side, since that's the edge being dragged.
    const isHorizontal = resizable && (side === 'left' || side === 'right');
    const handle = resizable && <div className="k-actionsheet-resize-handle" aria-hidden="true" />;

    const body = (
        <div className="k-actionsheet-view-body">
            {_ActionSheetHeader}
            <div className={classNames('k-actionsheet-content', { 'k-actionsheet-constrained': constrained })}>
                {children}
            </div>
            {_ActionSheetFooter}
        </div>
    );

    return (
        <div {...other}
            className={classNames(
                props.className,
                ACTIONSHEETVIEW_CLASSNAME,
                {
                    [`${ACTIONSHEETVIEW_CLASSNAME}-animated`]: animated,
                    'k-actionsheet-resizable': resizable,
                    [`k-actionsheet-${side}`]: resizable && !!side,
                }
            )}
        >
            {isHorizontal ? (
                <>
                    {side === 'right' && handle}
                    {body}
                    {side === 'left' && handle}
                </>
            ) : (
                <>
                    {side !== 'top' && handle}
                    {body}
                    {side === 'top' && handle}
                </>
            )}
        </div >
    );
};

ActionSheetView.states = states;
ActionSheetView.options = options;
ActionSheetView.className = ACTIONSHEETVIEW_CLASSNAME;
ActionSheetView.defaultOptions = defaultOptions;

export default ActionSheetView;
