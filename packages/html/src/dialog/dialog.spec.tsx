import { ActionButtons } from '../action-buttons';
import { Button } from '../button';
import { classNames, optionClassNames, ThemeColor } from '../misc';
import { WindowContent } from '../window/window-content.spec';

import { KendoComponent } from '../_types/component';
import { DIALOG_FOLDER_NAME, DIALOG_MODULE_NAME } from './constants';
import { Overlay } from '../overlay';
export const DIALOG_CLASSNAME = `k-dialog`;

const states = [];

const options = {
    themeColor: [
        ThemeColor.undefined,
        ThemeColor.primary,
        ThemeColor.light,
        ThemeColor.dark
    ],
};

const defaultOptions = {
    actionButtonsAlign: "stretched",
    modal: true
} as const;

export type KendoDialogOptions = {
  themeColor?: (typeof options.themeColor)[number] | null;
};

export type KendoDialogProps = KendoDialogOptions & {
    id?: string;
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
        id = 'k-dialog',
        title,
        actions,
        themeColor,
        actionButtons,
        actionButtonsAlign = defaultOptions.actionButtonsAlign,
        modal = defaultOptions.modal,
        ...other
    } = props;

    const titlebarId = `${id}-titlebar`;
    const contentId = `${id}-content`;

    // Check if this is a predefined dialog (alert, confirm, prompt)
    const isPredefinedDialog = props.className &&
        (props.className.includes('k-alert') ||
         props.className.includes('k-confirm') ||
         props.className.includes('k-prompt'));

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
                    optionClassNames(DIALOG_CLASSNAME, { themeColor })
                )}
                role={isPredefinedDialog ? "alertdialog" : "dialog"}
                {...(title !== undefined
                    ? { 'aria-labelledby': titlebarId }
                    : props['aria-label'] ? {} : { 'aria-label': 'Dialog' }
                )}
                aria-describedby={contentId}
                {...(modal && { 'aria-modal': 'true' })}
            >

                {(title !== undefined || actions) &&
                <div className="k-window-titlebar k-dialog-titlebar" id={titlebarId}>
                    {title !== undefined && <span className="k-window-title k-dialog-title">{title}</span>}
                    {actions && <>
                        <div className="k-window-titlebar-actions k-dialog-titlebar-actions">
                            {actions.map(actionName =>
                                <Button
                                    key={actionName}
                                    icon={actionName}
                                    fillMode="flat"
                                    className="k-window-titlebar-action k-dialog-titlebar-action"
                                    aria-label={actionName.charAt(0).toUpperCase() + actionName.slice(1)}
                                ></Button>
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

export default Dialog;
