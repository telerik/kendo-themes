import { ActionButtons } from '../action-buttons';
import { Button } from '../button';
import { classNames, optionClassNames, ThemeColor } from '../misc';

export const DIALOG_CLASSNAME = `k-dialog`;

const states = [];

const options = {
    themeColor: [
        ThemeColor.primary,
        ThemeColor.light,
        ThemeColor.dark
    ],
};

const defaultProps = {
    actionButtonsAlign: "stretched",
    modal: true
} as const;

export type KendoDialogOptions = {
  themeColor?: (typeof options.themeColor)[number] | null;
};

export type KendoDialogProps = KendoDialogOptions & {
    title?: string;
    actions?: string[];
    actionButtons?: JSX.Element;
    actionButtonsAlign?: "start" | "end" | "center" | "stretched";
    modal?: boolean;
};

export const Dialog = (
    props: KendoDialogProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        title,
        actions,
        themeColor,
        actionButtons,
        actionButtonsAlign = defaultProps.actionButtonsAlign,
        modal = defaultProps.modal,
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
                <div className="k-window-content k-dialog-content">
                    {props.children}
                </div>
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
Dialog.defaultProps = defaultProps;

export default Dialog;
