import { classNames } from '../misc';
import { AnimationContainer } from '../animation-container';
import { ActionSheetHeader, ActionSheetFooter } from '..';

export const ACTIONSHEET_CLASSNAME = `k-actionsheet`;

const states = [];

const options = {};

export type KendoActionSheetProps = {
    children?: React.JSX.Element | React.JSX.Element[];
    header?: React.ReactElement<typeof ActionSheetHeader>;
    footer?: React.ReactElement<typeof ActionSheetFooter>;
    fullscreen?: boolean;
    adaptive?: boolean;
    overlay?: boolean;
    side?: 'top' | 'right' | 'bottom' | 'left';
}

const defaultOptions = {
    side: 'bottom',
    fullscreen: false,
    adaptive: false,
    overlay: true
};

export const ActionSheet = (
    props: KendoActionSheetProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        side = defaultOptions.side,
        fullscreen = defaultOptions.fullscreen,
        adaptive = defaultOptions.adaptive,
        overlay = defaultOptions.overlay,
        children,
        header,
        footer,
        ...other
    } = props;

    const _ActionSheetHeader = header?.type === ActionSheetHeader && <ActionSheetHeader adaptive={adaptive} {...header?.props} />;
    const _ActionSheetFooter = footer?.type === ActionSheetFooter && <ActionSheetFooter {...footer?.props} />;

    return (
        <div className="k-actionsheet-container">
            {overlay && <div className="k-overlay"></div>}
            <AnimationContainer
                animationStyle={{
                    [`${fullscreen === true ? 'top' : side}`]: 0,
                    [`${fullscreen === true ? 'width' : null}`]: '100%',
                    [`${fullscreen === true ? 'height' : null}`]: '100%',
                    [`${side === 'top' || side === 'bottom' ? 'width' : null}`]: '100%',
                    [`${side === 'left' || side === 'right' ? 'height' : null}`]: '100%'
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
                        <div className="k-actionsheet-content">
                            {children}
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
ActionSheet.defaultOptions = defaultOptions;

export default ActionSheet;
