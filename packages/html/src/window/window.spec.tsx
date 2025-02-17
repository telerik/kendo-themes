import { ActionButtons } from '../action-buttons';
import { Button } from '../button';
import { MenuButton } from '../menu-button';
import { classNames, optionClassNames, ThemeColor } from '../misc';

export const WINDOW_CLASSNAME = `k-window`;

const states = [];

const options = {
    themeColor: [
        ThemeColor.primary,
        ThemeColor.light,
        ThemeColor.dark
    ],
};

const defaultOptions = {};

export type KendoWindowOptions = {
  themeColor?: (typeof options.themeColor)[number] | null;
};

export type KendoWindowProps = KendoWindowOptions & {
    title?: string;
    actions?: string[];
    minimized?: boolean;
    actionButtons?: React.JSX.Element;
    actionButtonsAlign?: "start" | "end" | "center" | "stretched";
};

export const Window = (
    props: KendoWindowProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        title,
        actions,
        minimized,
        themeColor,
        actionButtons,
        actionButtonsAlign,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                WINDOW_CLASSNAME,
                optionClassNames(WINDOW_CLASSNAME, { themeColor }),
                {
                    [`${WINDOW_CLASSNAME}-minimized`]: minimized,
                }
            )}>

            {(title !== undefined || actions) &&
                <div className="k-window-titlebar">
                    {title !== undefined && <span className="k-window-title">{title}</span>}
                    {actions && <>
                        <div className="k-window-titlebar-actions">
                            {actions.map(actionName =>
                                actionName === "more-vertical" ?
                                    <MenuButton
                                        key={actionName}
                                        icon={actionName}
                                        fillMode="flat"
                                        showArrow={false}
                                        className="k-window-titlebar-action"
                                    ></MenuButton> :
                                    <Button
                                        key={actionName}
                                        icon={actionName}
                                        fillMode="flat"
                                        className="k-window-titlebar-action"
                                    ></Button>
                            )}
                        </div>
                    </>}
                </div>
            }
            <div className={classNames(
                "k-window-content",
                {
                    "k-hidden": minimized
                }
            )}>
                {props.children}
            </div>
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

export default Window;
