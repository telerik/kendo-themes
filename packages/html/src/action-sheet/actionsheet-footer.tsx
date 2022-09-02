import * as React from 'react';
import { Button } from '../button';
import { ActionButtons } from '../action-buttons';

export interface ActionSheetFooterProps {
    actions?: string[];
    children?: React.ReactNode;
    className?: string;
}


export class ActionSheetFooter extends React.Component<ActionSheetFooterProps> {

    render() {
        const {
            children,
            actions
        } = this.props;


        return (
            <ActionButtons className="k-actionsheet-footer" alignment="stretched">
                <>
                    {actions && actions.map( (action, index) => {
                        if (action === '|') {
                            return <span key={index} className="k-separator"></span>;
                        }
                        if (action === ' ') {
                            return <span key={index} className="k-spacer"></span>;
                        }

                        const importantFlag = action.startsWith('!');
                        const actionName = importantFlag ? action.substring(1) : action;

                        return <Button key={index} text={actionName} size="large" themeColor={importantFlag ? 'primary' : 'base'} />;
                    })}
                    {!actions && children}
                </>
            </ActionButtons>
        );
    }
}
