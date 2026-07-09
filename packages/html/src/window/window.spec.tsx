import { ActionButtons } from '../action-buttons';
import { Button } from '../button';
import { MenuButton } from '../menu-button';
import { classNames, nextId } from '../misc';
import { WindowContent } from './window-content.spec';

import { KendoComponent } from '../_types/component';
import { WINDOW_FOLDER_NAME, WINDOW_MODULE_NAME } from './constants';
export const WINDOW_CLASSNAME = `k-window`;

const states = [];

const options = {};

const defaultOptions = {};

export type KendoWindowOptions = {};

export type KendoWindowProps = KendoWindowOptions & {
    title?: string;
    actions?: string[];
    minimized?: boolean;
    actionButtons?: React.JSX.Element;
    actionButtonsAlign?: "start" | "end" | "center" | "stretched";
};

/**
 * @aria {role="dialog"} Announces the dialog role of the component.
 * @aria {aria-labelledby} Associate the title of the dialog.
 */
export const Window: KendoComponent<KendoWindowProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoWindowProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        title,
        actions,
        minimized,
        actionButtons,
        actionButtonsAlign,
        ...other
    } = props;

    const titleId = title !== undefined ? nextId('window-title') : undefined;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                WINDOW_CLASSNAME,
                {
                    [`${WINDOW_CLASSNAME}-minimized`]: minimized,
                }
            )}
            role="dialog"
            aria-labelledby={titleId}>

            {(title !== undefined || actions) &&
                <div className="k-window-titlebar">
                    {title !== undefined && <span className="k-window-title" id={titleId}>{title}</span>}
                    {actions && <>
                        <div className="k-window-titlebar-actions">
                            {actions.map(actionName =>
                                actionName === "more-vertical" ?
                                    <MenuButton
                                        key={actionName}
                                        icon={actionName}
                                        fillMode="flat"
                                        size="xsmall"
                                        showArrow={false}
                                        className="k-window-titlebar-action"
                                        aria-label="More actions"
                                    ></MenuButton> :
                                    <Button
                                        key={actionName}
                                        icon={actionName}
                                        fillMode="flat"
                                        size="xsmall"
                                        className="k-window-titlebar-action"
                                        aria-label={actionName}
                                    ></Button>
                            )}
                        </div>
                    </>}
                </div>
            }
            <WindowContent className={classNames(
                {
                    "k-hidden": minimized
                }
            )}>
                {props.children}
            </WindowContent>
            {actionButtons &&
                <ActionButtons alignment={actionButtonsAlign} className="k-window-actions">
                    {actionButtons}
                </ActionButtons>
            }
        </div>
    );
};

Window.states = states;
Window.options = options;
Window.className = WINDOW_CLASSNAME;
Window.defaultOptions = defaultOptions;
Window.moduleName = WINDOW_MODULE_NAME;
Window.folderName = WINDOW_FOLDER_NAME;

/**
 * @keyboard {Alt/Opt(Mac) + ArrowDown} Minimizes or restores the state, if the focused element is the window
 * @keyboard {Alt/Opt(Mac) + ArrowUp} Maximizes or restores the state, if the focused element is the window
 * @keyboard {Arrow Keys} Move the window to the respective direction (UP
 * @keyboard {Control/Cmd(Mac) + ArrowUp} Decreases the height of the window triggering the resizing capabilities. Applicable only when the component is resizable.
 * @keyboard {Control/Cmd(Mac) + ArrowDown} Increases the height of the window triggering the resizing capabilities. Applicable only when the component is resizable.
 * @keyboard {Control/Cmd(Mac) + ArrowLeft} Decreases the width of the window triggering the resizing capabilities. Applicable only when the component is resizable.
 * @keyboard {Control/Cmd(Mac) + ArrowRight} Increases the width of the window triggering the resizing capabilities. Applicable only when the component is resizable.
 * @keyboard {Escape} Closes the window. When the window is modal, the focus should be returned to the element that triggered the open.
 *
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog/ ARIA practices Modal Dialog Example
 */

export default Window;
