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
 * Accessibility specification for Dialog.
 *
 * @accessibility
 * - Dialog has role=dialog with aria-labelledby and aria-describedby
 * - Modal dialogs have aria-modal=true
 * - Action buttons have aria-label
 *
 * @wcag 4.1.2 Name, Role, Value - dialog pattern
 */
Dialog.ariaSpec = {
    selector: '.k-dialog',
    rules: [
        { selector: '.k-dialog', attribute: 'role=dialog or role=alertdialog', usage: 'Announces the dialog or alertdialog role of the component.' },
        { selector: '.k-dialog', attribute: 'aria-labelledby', usage: 'Associate the title of the dialog.' },
        { selector: '.k-dialog', attribute: 'aria-describedby', usage: 'Associate the dialog content to the wrap element.' },
        { selector: '.k-overlay + .k-dialog', attribute: 'aria-modal=true', usage: 'Announces that the dialog is modal. Attribute is added only when the dialog is modal.' },
    ]
};

export default Dialog;
