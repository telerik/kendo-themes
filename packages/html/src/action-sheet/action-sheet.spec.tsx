import { classNames } from '../misc';
import { AnimationContainer } from '../animation-container';
import { ActionSheetFooter } from './actionsheet-footer';
import { ActionSheetHeader } from './actionsheet-header';
import { ActionSheetView } from './actionsheet-view';

import { KendoComponent } from '../_types/component';
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
    template?: React.JSX.Element | React.JSX.Element[];
    side?: 'top' | 'right' | 'bottom' | 'left';
}

const defaultOptions = {
    side: 'bottom',
    fullscreen: false,
    adaptive: false,
    overlay: true
};

export const ActionSheet: KendoComponent<KendoActionSheetProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoActionSheetProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        side = defaultOptions.side,
        fullscreen = defaultOptions.fullscreen,
        adaptive = defaultOptions.adaptive,
        overlay = defaultOptions.overlay,
        template,
        children,
        header,
        footer,
        ...other
    } = props;

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
                    {template ? template :
                        <ActionSheetView header={header} footer={footer} adaptive={adaptive} {...props}>
                            {children}
                        </ActionSheetView>
                    }
                </div>
            </AnimationContainer>
        </div>
    );
};

ActionSheet.states = states;
ActionSheet.options = options;
ActionSheet.className = ACTIONSHEET_CLASSNAME;
ActionSheet.defaultOptions = defaultOptions;
ActionSheet.moduleName = "action-sheet";
ActionSheet.folderName = ActionSheet.moduleName;

export default ActionSheet;
