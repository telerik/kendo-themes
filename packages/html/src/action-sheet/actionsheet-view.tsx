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
        ...other
    } = props;

    const _ActionSheetHeader = header?.type === ActionSheetHeader && <ActionSheetHeader adaptive={adaptive} {...header?.props} />;
    const _ActionSheetFooter = footer?.type === ActionSheetFooter && <ActionSheetFooter {...footer?.props} />;

    return (
        <div {...other}
            className={classNames(
                props.className,
                ACTIONSHEETVIEW_CLASSNAME,
                {
                    [`${ACTIONSHEETVIEW_CLASSNAME}-animated`]: animated,
                }
            )}
        >
            {_ActionSheetHeader}
            <div className="k-actionsheet-content" >
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
