import * as React from 'react';
import { classNames, kendoThemeMaps } from '../utils';
import { ListBoxActions, ListBoxActionsProps } from '../listbox';
import { List, ListProps } from '../list';

export interface ListBoxProps {
    actionsPosition: 'left' | 'right' | 'top' | 'bottom';
    className?: string;
    children?: React.ReactElement[];
    dir?: 'ltr' | 'rtl';
    disabled?: boolean;
    size?: null | 'small' | 'medium' | 'large';
}

export class ListBox extends React.Component<ListBoxProps> {

    static defaultProps = {
        actionsPosition: 'left',
        size: 'medium',
    };

    render() {

        const {
            actionsPosition,
            className,
            children,
            dir,
            disabled,
            size,
        } = this.props;

        const listBoxActions : React.ReactElement<ListBoxActionsProps>[] = [];
        const listBoxItems : React.ReactElement<ListProps>[] = [];

        if (children) {
            children.map((child, index) => {
                if ( child.type === ListBoxActions) {
                    listBoxActions.push(
                        <ListBoxActions
                            key={`listBoxActions-${index}`}
                            {...child.props}
                            size={size}
                        />
                    );
                } else {
                    listBoxItems.push(
                        <List
                            key={`listBoxItems-${index}`}
                            {...child.props}
                            size={size}
                        />
                    );
                }
            });
        }

        return (
            <div className={classNames(
                className,
                'k-listbox',
                {
                    [`k-listbox-${kendoThemeMaps.sizeMap[size!] || size}`]: size,
                    [`k-listbox-actions-${actionsPosition}`]: actionsPosition,
                    'k-disabled': disabled
                }
            )}
            dir={dir}>
                {listBoxActions}
                <div className={classNames(
                    'k-list-scroller',
                    'k-selectable'
                )}>
                    {listBoxItems}
                </div>
            </div>
        );
    }
}
