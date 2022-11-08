import * as React from 'react';
import { ActionButtons } from '../action-buttons';
import { Button } from '../button';
import { classNames } from '../utils';

export interface WindowProps {
    children?: React.ReactNode;
    className?: string;
    title?: string;
    actions?: string[];
    minimized?: boolean;
    actionButtons?: boolean;
    actionButtonsAlign?: "start" | "end" | "center" | "stretched"
}

export class Window extends React.Component<WindowProps> {

    render() {
        const {
            className,
            children,
            title,
            actions,
            minimized,
            actionButtons,
            actionButtonsAlign,
        } = this.props;


        return (
            <div
                className={classNames(
                    "k-window",
                    {
                        "k-window-minimized": minimized
                    },
                    className
                )}>

                {(title !== undefined || actions) &&
                    <div className="k-window-titlebar">
                        {title !== undefined && <span className="k-window-title">{title}</span>}
                        {actions && <>
                            <div className="k-window-titlebar-actions">
                                {actions.map(actionName =>
                                    <Button key={actionName} icon={actionName} fillMode="flat" className="k-window-titlebar-action"></Button>
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
                    {children}
                </div>
                {actionButtons &&
                    <ActionButtons alignment={actionButtonsAlign} className="k-window-actions">
                        <Button>Cancel</Button>
                        <Button themeColor="primary">Update</Button>
                    </ActionButtons>
                }
            </div>
        );
    }
}
