import { classNames } from '../misc';
import { ActionSheetHeader, ActionSheetItems, ActionSheetFooter } from '../action-sheet';
import { AnimationContainer } from '../animation-container';

export const ACTIONSHEET_CLASSNAME = `k-actionsheet`;

const states = [];

const options = {};

export type KendoActionSheetProps = {
    children: React.JSX.Element | React.JSX.Element[],
    title?: string;
    header?: typeof ActionSheetHeader;
    footer?: string | typeof ActionSheetFooter;
    actions?: string[];
    fullscreen?: boolean;
    adaptive?: boolean;
    overlay?: boolean;
    side?: 'top' | 'right' | 'bottom' | 'left';
}


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
        side = "bottom",
        fullscreen = false,
        adaptive = false,
        overlay = true,
        ...other
    } = props;

    const _ActionSheetHeader = title
        ? <ActionSheetHeader title={title} />
        : header
            ? header
            : Array.isArray(children) && children.find((child) => child.type === ActionSheetHeader);

    const _ActionSheetFooter = actions
        ? <ActionSheetFooter className="k-actions" actions={actions} />
        : footer
            ? typeof footer === 'string'
                ? <ActionSheetFooter>{footer}</ActionSheetFooter>
                : footer
            : Array.isArray(children) && children.find((child) => child.type === ActionSheetFooter);

    const _ActionSheetContent = Array.isArray(children)
        ? children.filter(child => {
            switch (child.type) {
                case ActionSheetHeader:
                case ActionSheetFooter:
                    return false;
                default:
                    return true;
            }
        })
        : children.type === ActionSheetItems
            ? children
            : <></>;

    return (
        <div className="k-actionsheet-container">
            {overlay && <div className="k-overlay"></div>}
            <AnimationContainer
                animationStyle={{
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
            </AnimationContainer>
        </div>
    );
};

ActionSheet.states = states;
ActionSheet.options = options;
ActionSheet.className = ACTIONSHEET_CLASSNAME;

export default ActionSheet;
