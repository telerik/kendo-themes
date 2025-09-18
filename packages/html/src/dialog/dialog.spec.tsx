import { ActionButtons } from '../action-buttons';
import { Button } from '../button';
import { classNames, optionClassNames, ThemeColor } from '../misc';
import { WindowContent } from '../window/window-content.spec';

import { KendoComponent } from '../_types/component';
export const DIALOG_CLASSNAME = `k-dialog`;

const states = [];

const options = {
    themeColor: [
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
        themeColor,
        actionButtons,
        actionButtonsAlign = defaultOptions.actionButtonsAlign,
        modal = defaultOptions.modal,
        ...other
    } = props;

    return (
        <div className="k-dialog-wrapper">
            { modal &&
            <div className="k-overlay"></div>}
            <div
                {...other}
                className={classNames(
                    props.className,
                    DIALOG_CLASSNAME,
                    "k-window",
                    optionClassNames(DIALOG_CLASSNAME, { themeColor })
                )}>

                {(title !== undefined || actions) &&
                <div className="k-window-titlebar k-dialog-titlebar">
                    {title !== undefined && <span className="k-window-title k-dialog-title">{title}</span>}
                    {actions && <>
                        <div className="k-window-titlebar-actions k-dialog-titlebar-actions">
                            {actions.map(actionName =>
                                <Button key={actionName} icon={actionName} fillMode="flat" className="k-window-titlebar-action k-dialog-titlebar-action"></Button>
                            )}
                        </div>
                    </>}
                </div>
                }
                <WindowContent className="k-dialog-content">
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
Dialog.moduleName = "dialog";
Dialog.folderName = Dialog.moduleName;

export default Dialog;
