import * as React from 'react';
import { Toolbar } from '../toolbar';
import { classNames } from '../utils';

export interface EditorToolbarProps {
    children?: React.ReactElement[] | React.ReactElement;
    className?: string;
    resizable?: boolean;
}

export class EditorToolbar extends React.Component<EditorToolbarProps> {

    render() {
        const {
            children,
            className,
            resizable,
        } = this.props;


        return (
            <Toolbar className={classNames(
                'k-editor-toolbar',
                className
            )} resizable={resizable}>
                {children}
            </Toolbar>
        );
    }
}
