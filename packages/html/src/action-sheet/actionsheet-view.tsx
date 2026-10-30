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
    /** @deprecated Legacy design. Kept for backwards compatibility. */
    adaptive?: boolean;
    /** @deprecated Legacy design markup (centered title). Kept for backwards compatibility. */
    legacy?: boolean;
    animated?: boolean;
    titleId?: string;
    /**
     * @ux {Resize handle} Renders a drag handle used to resize the ActionSheet.
     */
    resizable?: boolean;
}

export const ActionSheetView = (
    props: KendoActionSheetViewProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        adaptive,
        legacy,
        animated,
        children,
        header,
        footer,
        titleId,
        resizable,
        ...other
    } = props;

    const _ActionSheetHeader = header?.type === ActionSheetHeader && <ActionSheetHeader adaptive={adaptive} legacy={legacy || adaptive} titleId={titleId} {...header?.props} />;
    const _ActionSheetFooter = footer?.type === ActionSheetFooter && <ActionSheetFooter {...footer?.props} />;

    const handle = resizable && <div className="k-actionsheet-resize-handle" aria-hidden="true" />;

    return (
        <div {...other}
            className={classNames(
                props.className,
                ACTIONSHEETVIEW_CLASSNAME,
                {
                    [`${ACTIONSHEETVIEW_CLASSNAME}-animated`]: animated,
                    'k-actionsheet-resizable': resizable,
                }
            )}
        >
            {handle}
            {_ActionSheetHeader}
            <div className="k-actionsheet-content">
                {children}
            </div>
            {_ActionSheetFooter}
        </div >
    );
};

ActionSheetView.states = states;
ActionSheetView.options = options;
ActionSheetView.className = ACTIONSHEETVIEW_CLASSNAME;
ActionSheetView.defaultOptions = defaultOptions;

export default ActionSheetView;
