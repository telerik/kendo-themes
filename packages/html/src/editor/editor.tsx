import * as React from 'react';
import { classNames } from '../utils';

export interface EditorProps {
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    readonly?: boolean;
}

export class Editor extends React.Component<EditorProps> {

    render() {
        const {
            children,
            className,
            readonly,
        } = this.props;


        return (
            <div
                style={this.props.style}
                className={classNames(
                    'k-editor',
                    {
                        'k-readonly': readonly,
                    },
                    className
                )}>
                {children}
            </div>
        );
    }
}
