import * as React from 'react';
import { classNames } from '../utils';
import { Button } from '../button';

export interface ActionSheetContentProps {
    title?: string;
    subTitle?: string;
    actions?: string[];
    children?: React.ReactNode;
    className?: string;
}


export class ActionSheetContent extends React.Component<ActionSheetContentProps> {

    render() {
        const {
            title,
            subTitle,
            children,
            actions,
            className
        } = this.props;


        return (
            <div
                className={classNames(
                    className,
                    'k-actionsheet-titlebar'
                )}>
                <>
                    {!children && (title || subTitle) && <>
                        <div className="k-actionsheet-title">
                            {title !== '' && <div>{title}</div>}
                            {subTitle !== '' && <div>{subTitle}</div>}
                        </div>
                    </>}
                    {children && <div className="k-actionsheet-title">{children}</div>}
                    {actions && <>
                        <div className="k-actionsheet-actions">
                            {actions.map(actionName => <Button key={actionName} icon={actionName} fillMode="flat"></Button>)}
                        </div>
                    </>}
                </>
            </div>
        );
    }
}
