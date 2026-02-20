import { classNames } from '../misc';
import { AnimationContainer } from '../animation-container';
import { ActionSheetFooter } from './actionsheet-footer';
import { ActionSheetHeader } from './actionsheet-header';
import { ActionSheetView } from './actionsheet-view';

import { KendoComponent } from '../_types/component';
import { ACTION_SHEET_FOLDER_NAME, ACTION_SHEET_MODULE_NAME } from './constants';
import { Overlay } from '../overlay';
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
    /**
     * Unique identifier for the ActionSheet. Used for aria-labelledby.
     * @aria aria-labelledby references ${id}-title
     */
    id?: string;
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
        id,
        ...other
    } = props;

    const titleId = id && !template && header ? `${id}-title` : undefined;

    return (
        <div className="k-actionsheet-container">
            {overlay && <Overlay />}
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
                    role="dialog"
                    aria-modal={overlay ? "true" : undefined}
                    aria-labelledby={titleId}
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
                        <ActionSheetView header={header} footer={footer} adaptive={adaptive} titleId={titleId} {...props}>
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
ActionSheet.moduleName = ACTION_SHEET_MODULE_NAME;
ActionSheet.folderName = ACTION_SHEET_FOLDER_NAME;

/**
 * Accessibility specification for ActionSheet.
 *
 * @accessibility
 * - Has role="dialog" with aria-modal="true" when overlay is enabled
 * - aria-labelledby references the title element
 * - Content is arbitrary; components using ActionSheet in adaptive mode
 *   are responsible for their internal content's ARIA attributes
 *
 * @wcag 4.1.2 Name, Role, Value - dialog pattern with labeled title
 */
ActionSheet.ariaSpec = {
    selector: '.k-actionsheet',
    rules: [
        { selector: '.k-actionsheet', attribute: 'role=dialog', usage: 'Announces the dialog role of the component.' },
        { selector: '.k-actionsheet', attribute: 'aria-labelledby (when has title)', usage: 'Associates the title of the action sheet.' },
        { selector: '.k-actionsheet', attribute: 'aria-hidden=true/false (when hidden)', usage: 'Announces the hidden state of the ActionSheet container.' },
        { selector: '.k-actionsheet', attribute: 'aria-modal=true (when modal)', usage: 'Announces that the action sheet is modal.' },
        { selector: '.k-actionsheet .k-actionsheet-title', attribute: 'id', usage: 'Used to associate the title with the action sheet wrapper element.' },
    ]
};

export default ActionSheet;
