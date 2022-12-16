import * as React from 'react';
import { classNames } from '../utils';

export interface EditorContentProps {
    children?: React.ReactNode;
    className?: string;
    focus?: boolean;
}

export class EditorContent extends React.Component<EditorContentProps> {

    render() {
        const {
            children,
            className,
            focus,
        } = this.props;


        return (
            <div
                className={classNames(
                    'k-editor-content',
                    {
                        'k-focus': focus
                    },
                    className
                )}>
                {children}
            </div>
        );
    }
}
