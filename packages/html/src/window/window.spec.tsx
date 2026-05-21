import { ActionButtons } from '../action-buttons';
import { Button } from '../button';
import { MenuButton } from '../menu-button';
import { classNames, nextId } from '../misc';
import { WindowContent } from './window-content.spec';

import { KendoComponent } from '../_types/component';
import { WINDOW_FOLDER_NAME, WINDOW_MODULE_NAME } from './constants';
import a11ySpec from './behavior/accessibility.json';
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

Window.ariaSpec = a11ySpec.ariaSpec;

export default Window;
