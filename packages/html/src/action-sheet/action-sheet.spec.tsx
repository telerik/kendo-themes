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
    overlay?: boolean;
    template?: React.JSX.Element | React.JSX.Element[];
    id?: string;
    resizable?: boolean;
    maximized?: boolean;
}

const defaultOptions = {
    fullscreen: false,
    overlay: true
};

/**
 * @aria {role="dialog"} Announces the dialog role of the component.
 * @aria {aria-hidden="true"|\"false"} Announces the hidden state of the ActionSheet container.
 * @aria {aria-modal="true"} Announces that the action sheet is modal.
 * @aria {id} Used to associate the title with the action sheet wrapper element.
 * @aria {aria-labelledby} references ${id}-title
 * @ux {Overlay} Renders over the page content and prevents interaction with the rest of the UI.
 * @ux {Title and subtitle} Optionally renders a title and subtitle to describe the available actions.
 * @ux {Items} Each action item consists of a label and an optional icon.
 * @ux {Dismiss} Closes when the user taps the overlay backdrop or presses Escape.
 */
export const ActionSheet: KendoComponent<KendoActionSheetProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoActionSheetProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        fullscreen = defaultOptions.fullscreen,
        overlay = defaultOptions.overlay,
        template,
        children,
        header,
        footer,
        id,
        resizable,
        maximized,
        ...other
    } = props;

    const titleId = id && !template && header ? `${id}-title` : undefined;

    return (
        <div className="k-actionsheet-container">
            {overlay && <Overlay />}
            <AnimationContainer
                animationStyle={fullscreen === true
                    ? { top: 0, width: '100%', height: '100%' }
                    : { bottom: 0, width: '100%' }}>
                <div
                    {...other}
                    id={id}
                    role="dialog"
                    aria-modal={overlay ? "true" : undefined}
                    aria-labelledby={titleId}
                    className={classNames(
                        props.className,
                        ACTIONSHEET_CLASSNAME,
                        {
                            'k-actionsheet-bottom': fullscreen === false,
                            'k-actionsheet-fullscreen': fullscreen === true,
                            'k-actionsheet-maximized': maximized
                        },
                    )}>
                    {template ? template :
                        <ActionSheetView header={header} footer={footer} titleId={titleId} resizable={resizable} {...props}>
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
 * @keyboard {Escape} Dismisses the ActionSheet.
 * @keyboard {Tab} Moves focus to the next focusable item.
 * @keyboard {Shift + Tab} Moves focus to the previous focusable item.
 * @keyboard {Enter} Triggers the action associated with the currently focused item.
 * @keyboard {Page Up} Expands a resizable ActionSheet to its maximum height.
 * @keyboard {Page Down} Collapses a resizable ActionSheet at maximum height back to its initial height.
 *
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/ ARIA practices Modal Dialog Example
 */

export default ActionSheet;
