import * as React from 'react';
import { classNames } from '../utils';

export interface ListViewItemProps {
    className?: string;
    children?: any;
    focus?: boolean;
    selected?: boolean;
}
export class ListViewItem extends React.Component<ListViewItemProps> {

    render(): JSX.Element {
        const {
            children,
            focus,
            selected
        } = this.props;


        function modifyChildren(child) {
            const className = classNames(
                child.props.className,
                "k-listview-item",
                {
                    'k-focus': focus,
                    'k-selected': selected
                }
            );

            const props = {
                className
            };

            return React.cloneElement(child, props);
        }

        return (
            <>
                {React.Children.map(children, child => modifyChildren(child))}
            </>
        );
    }
}
