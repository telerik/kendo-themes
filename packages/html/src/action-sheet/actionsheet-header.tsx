import * as React from 'react';
import { classNames } from '../utils';
import { Button } from '../button';
import { Searchbox } from '../searchbox';

export interface ActionSheetHeaderProps {
    title?: string;
    subTitle?: string;
    actions?: string[];
    children?: React.ReactNode;
    className?: string;
    filter?: boolean;
}

export class ActionSheetHeader extends React.Component<ActionSheetHeaderProps> {

    render() {
        const {
            title,
            subTitle,
            children,
            actions,
            filter,
            className
        } = this.props;

        return (
            <div
                className={classNames(
                    className,
                    'k-actionsheet-titlebar'
                )}>
                <>
                    <div className="k-actionsheet-titlebar-group k-hbox">
                        {!children && (title || subTitle) && <>
                            <div className="k-actionsheet-title">
                                {title !== '' && <div className="k-text-center">{title}</div>}
                                {subTitle !== '' && <div className="k-actionsheet-subtitle k-text-center">{subTitle}</div>}
                            </div>
                        </>}
                        {children && <div className="k-actionsheet-title">{children}</div>}
                        {actions && <>
                            <div className="k-actionsheet-actions">
                                {actions.map(actionName => <Button key={actionName} icon={actionName} size="large" fillMode="flat"></Button>)}
                            </div>
                        </>}
                    </div>
                    {filter && <>
                        <div className="k-actionsheet-titlebar-group k-actionsheet-filter">
                            <Searchbox placeholder="Filter" size="large" />
                        </div>
                    </>}
                </>
            </div>
        );
    }
}
