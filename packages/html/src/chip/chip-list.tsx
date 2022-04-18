import * as React from 'react';
import { ChipProps } from '../chip';
import { classNames, kendoThemeMaps } from '../utils';

export interface ChipListProps {
    children?: React.ReactElement<ChipProps> | React.ReactElement<ChipProps>[];
    className?: string;
    size?: null | 'small' | 'medium' | 'large';
}

export class ChipList extends React.Component<ChipListProps> {

    static defaultProps = {
        size: 'medium',
        selection: null
    };

    render() {
        const {
            children,
            className,
            size
        } = this.props;

        return (
            <div
                className={classNames(
                    className,
                    'k-chip-list',
                    {
                        [`k-chip-list-${kendoThemeMaps.sizeMap[size!] || size}`]: size,
                    }
                )}
            >
                {children}
            </div>
        );
    }
}
