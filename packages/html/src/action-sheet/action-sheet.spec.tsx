import { classNames } from '../utils-new';
import { ActionSheetHeader, ActionSheetItems, ActionSheetFooter } from '../action-sheet';

export const ACTIONSHEET_CLASSNAME = `k-actionsheet`;

const states = [];

const options = {};

export type KendoActionSheetProps = {
    children: JSX.Element | JSX.Element[],
    title?: string;
    header?: typeof ActionSheetHeader;
    footer?: string | typeof ActionSheetFooter;
    actions?: string[];
    fullscreen?: boolean;
    adaptive?: boolean;
    side?: 'top' | 'right' | 'bottom' | 'left';
}

const defaultProps = {
    side: 'bottom',
    fullscreen: false,
    adaptive: false
};

// eslint-disable-next-line complexity
export const ActionSheet = (
    props: KendoActionSheetProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        children,
        title,
        header,
        footer,
        actions,
        side = defaultProps.side,
        fullscreen = defaultProps.fullscreen,
        adaptive = defaultProps.adaptive,
        ...other
    } = props;

    // eslint-disable-next-line no-nested-ternary
    const _ActionSheetHeader = title
        ? <ActionSheetHeader title={title} />
        : header
            ? header
            : Array.isArray(children) && children.find((child) => child.type === ActionSheetHeader);

    // eslint-disable-next-line no-nested-ternary
    const _ActionSheetFooter = actions
        ? <ActionSheetFooter className="k-actions" actions={actions} />
        // eslint-disable-next-line no-nested-ternary
        : footer
            ? typeof footer === 'string'
                ? <ActionSheetFooter>{footer}</ActionSheetFooter>
                : footer
            : Array.isArray(children) && children.find((child) => child.type === ActionSheetFooter);

    // eslint-disable-next-line no-nested-ternary
    const _ActionSheetContent = Array.isArray(children)
        ? children.filter(child => {
            switch (child.type) {
                case ActionSheetHeader:
                case ActionSheetFooter:
                    return false;
                default:
                    return true;
            }
            return true;
        })
        : children.type === ActionSheetItems
            ? children
            : <></>;

    return (
        <div className="k-actionsheet-container">
            <div className="k-overlay"></div>
            <div className="k-animation-container">
                <div className="k-child-animation-container"
                    style={{
                        [`${ fullscreen === true ? 'top' : side }`]: 0,
                        [`${ fullscreen === true ? 'width' : null }`]: '100%',
                        [`${ fullscreen === true ? 'height' : null }`]: '100%',
                        [`${ side === 'top' || side === 'bottom' ? 'width' : null }`]: '100%',
                        [`${ side === 'left' || side === 'right' ? 'height' : null }`]: '100%'
                    }}>
                    <div
                        {...other}
                        className={classNames(
                            props.className,
                            ACTIONSHEET_CLASSNAME,
                            {
                                [`k-actionsheet-${side}`]: fullscreen === false,
                                'k-actionsheet-fullscreen': fullscreen === true,
                                'k-adaptive-actionsheet': adaptive
                            },
                        )}>
                        <>
                            {_ActionSheetHeader}
                            <div className={classNames(
                                'k-actionsheet-content',
                                {
                                    '!k-overflow-hidden': adaptive
                                }
                            )}>
                                {_ActionSheetContent}
                            </div>
                            {_ActionSheetFooter}
                        </>
                    </div>
                </div>
            </div>
        </div>
    );
};

ActionSheet.states = states;
ActionSheet.options = options;
ActionSheet.className = ACTIONSHEET_CLASSNAME;

export default ActionSheet;
