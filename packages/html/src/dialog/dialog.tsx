import * as React from 'react';
import { ActionButtons } from '../action-buttons';
import { Button } from '../button';
import { classNames } from '../utils';

export interface DialogProps {
    children?: React.ReactNode;
    className?: string;
    title?: string;
    actions?: string[];
    themeColor?: null | 'primary' | 'dark' | 'light';
    actionButtons?: boolean;
    actionButtonsAlign?: "start" | "end" | "center" | "stretched";
    style?: React.CSSProperties;
}

export class Dialog extends React.Component<DialogProps> {

    render() {
        const {
            className,
            children,
            title,
            actions,
            themeColor,
            actionButtons,
            actionButtonsAlign,
        } = this.props;


        return (
            <div
                style={this.props.style}
                className={classNames(
                    "k-window",
                    "k-dialog",
                    {
                        [`k-dialog-${themeColor}`]: themeColor,
                    },
                    className
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
                    {children}
                </div>
                {actionButtons &&
                    <ActionButtons alignment={actionButtonsAlign} className="k-window-actions k-dialog-actions">
                        <Button>Action</Button>
                        <Button themeColor="primary">Primary</Button>
                    </ActionButtons>
                }
            </div>
        );
    }
}
