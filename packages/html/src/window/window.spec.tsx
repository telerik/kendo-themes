import { ActionButtons } from '../action-buttons';
import { Button } from '../button';
import { MenuButton } from '../menu-button';
import { classNames, optionClassNames, ThemeColor } from '../misc';
import { WindowContent } from './window-content.spec';

import { KendoComponent } from '../_types/component';
import { WINDOW_FOLDER_NAME, WINDOW_MODULE_NAME } from './constants';
export const WINDOW_CLASSNAME = `k-window`;

const states = [];

const options = {
    themeColor: [
        ThemeColor.undefined,
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
    id?: string;
    title?: string;
    actions?: string[];
    minimized?: boolean;
    modal?: boolean;
    actionButtons?: React.JSX.Element;
    actionButtonsAlign?: "start" | "end" | "center" | "stretched";
};

export const Window: KendoComponent<KendoWindowProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoWindowProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        id = 'k-window',
        title,
        actions,
        minimized,
        modal,
        themeColor,
        actionButtons,
        actionButtonsAlign,
        ...other
    } = props;

    const titleId = `${id}-title`;

    return (
        <>
        {modal && <div className="k-overlay"></div>}
        <div
            {...other}
            className={classNames(
                props.className,
                WINDOW_CLASSNAME,
                optionClassNames(WINDOW_CLASSNAME, { themeColor }),
                {
                    [`${WINDOW_CLASSNAME}-minimized`]: minimized,
                }
            )}
            role="dialog"
            {...(modal && { 'aria-modal': 'true' })}
            {...(title !== undefined
                ? { 'aria-labelledby': titleId }
                : props['aria-label'] ? {} : { 'aria-label': 'Window' }
            )}
        >

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
                                        showArrow={false}
                                        className="k-window-titlebar-action"
                                        aria-label="More actions"
                                    ></MenuButton> :
                                    <Button
                                        key={actionName}
                                        icon={actionName}
                                        fillMode="flat"
                                        className="k-window-titlebar-action"
                                        aria-label={actionName.charAt(0).toUpperCase() + actionName.slice(1)}
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
        </>
    );
};

Window.states = states;
Window.options = options;
Window.className = WINDOW_CLASSNAME;
Window.defaultOptions = defaultOptions;
Window.moduleName = WINDOW_MODULE_NAME;
Window.folderName = WINDOW_FOLDER_NAME;

export default Window;
