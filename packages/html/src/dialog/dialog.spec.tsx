import { ActionButtons } from '../action-buttons';
import { Button } from '../button';
import { classNames, nextId } from '../misc';
import { WindowContent } from '../window/window-content.spec';

import { KendoComponent } from '../_types/component';
import { DIALOG_FOLDER_NAME, DIALOG_MODULE_NAME } from './constants';
import { Overlay } from '../overlay';
export const DIALOG_CLASSNAME = `k-dialog`;

const states = [];

const options = {};

const defaultOptions = {
    actionButtonsAlign: "stretched",
    modal: true
} as const;

export type KendoDialogOptions = {};

export type KendoDialogProps = KendoDialogOptions & {
    title?: string;
    actions?: string[];
    actionButtons?: React.JSX.Element;
    actionButtonsAlign?: "start" | "end" | "center" | "stretched";
    modal?: boolean;
};

/**
 * @aria {role="dialog"|\"alertdialog"} Announces the dialog or alertdialog role of the component.
 * @aria {aria-labelledby} Associate the title of the dialog.
 * @aria {aria-describedby} Associate the dialog content to the wrap element.
 * @aria {aria-modal="true"} Announces that the dialog is modal. Attribute is added only when the dialog is modal.
 * @ux {Modal overlay} Renders a backdrop that blocks interaction with the underlying page.
 * @ux {Close button} An optional × button in the title bar dismisses the dialog.
 * @ux {Action buttons} Footer buttons let the user confirm or cancel the operation.
 * @ux {Draggable} The dialog can be repositioned by dragging its title bar.
 * @ux {Resizable} The dialog can be resized by dragging its edges or corners.
 */
export const Dialog: KendoComponent<KendoDialogProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoDialogProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        title,
        actions,
        actionButtons,
        actionButtonsAlign = defaultOptions.actionButtonsAlign,
        modal = defaultOptions.modal,
        ...other
    } = props;

    const titlebarId = title !== undefined ? nextId('dialog-titlebar') : undefined;
    const contentId = nextId('dialog-content');

    return (
        <div className="k-dialog-wrapper">
            { modal &&
            <Overlay />}
            <div
                {...other}
                className={classNames(
                    props.className,
                    DIALOG_CLASSNAME,
                    "k-window",
                )}
                role="dialog"
                aria-labelledby={titlebarId}
                aria-describedby={contentId}
                {...(modal && { 'aria-modal': 'true' })}>

                {(title !== undefined || actions) &&
                <div className="k-window-titlebar k-dialog-titlebar" id={titlebarId}>
                    {title !== undefined && <span className="k-window-title k-dialog-title">{title}</span>}
                    {actions && <>
                        <div className="k-window-titlebar-actions k-dialog-titlebar-actions">
                            {actions.map(actionName =>
                                <Button key={actionName} icon={actionName} fillMode="flat" size="xsmall" className="k-window-titlebar-action k-dialog-titlebar-action" aria-label={actionName}></Button>
                            )}
                        </div>
                    </>}
                </div>
                }
                <WindowContent className="k-dialog-content" id={contentId}>
                    {props.children}
                </WindowContent>
                {actionButtons &&
                <ActionButtons alignment={actionButtonsAlign} className="k-window-actions k-dialog-actions">
                    {actionButtons}
                </ActionButtons>
                }
            </div>
        </div>
    );
};

Dialog.states = states;
Dialog.options = options;
Dialog.className = DIALOG_CLASSNAME;
Dialog.defaultOptions = defaultOptions;
Dialog.moduleName = DIALOG_MODULE_NAME;
Dialog.folderName = DIALOG_FOLDER_NAME;

/**
 * @keyboard {Tab} Focus is moved between the elements in the dialog and is trapped into the component.
 * @keyboard {Escape} Closes the dialog. When the dialog is modal, the focus should be returned to the element that triggered the open.
 *
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog/ ARIA practices Modal Dialog Example
 */

export default Dialog;
