import * as React from 'react';
import { classNames } from '../utils';

export interface ListBoxActionsProps {
    className?: string;
    children?: React.ReactElement[];
    size?: null | 'small' | 'medium' | 'large';
}

export class ListBoxActions extends React.Component<ListBoxActionsProps> {

    render() {

        const {
            className,
            children,
            size
        } = this.props;

        return (
            <div className={classNames(
                className,
                'k-listbox-actions'
            )}>
                { children?.map(child => React.cloneElement(child, { size })) }
            </div>
        );
    }
}
