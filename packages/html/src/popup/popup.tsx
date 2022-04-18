import * as React from 'react';
import { classNames } from '../utils';

export interface PopupProps {
    children?: React.ReactNode;
    className?: string;
}

export class Popup extends React.Component<PopupProps> {

    render() {
        const {
            className,
            children
        } = this.props;

        return (
            <div className={classNames(className, 'k-popup')}>
                {children}
            </div>
        );
    }
}
