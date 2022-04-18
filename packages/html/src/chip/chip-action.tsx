import * as React from 'react';
import { Icon } from '../icon';
import { classNames } from '../utils';

export enum chipActionType {
    REMOVE = 'remove',
    MORE = 'more',
}

export interface ChipActionProps {
    className?: string;
    type?: chipActionType | string;
}

export class ChipAction extends React.Component<ChipActionProps> {

    render() {
        const {
            className,
            type,
        } = this.props;

        let icon;

        switch (type) {
            case chipActionType.REMOVE:
                icon = <Icon name="x-circle" />;
                break;
            case chipActionType.MORE:
                icon = <Icon name="more-vertical" />;
                break;
            default:
                return <Icon name={type} />;
        }

        return (
            <span
                className={classNames(
                    className,
                    'k-chip-action',
                    `k-chip-${type}-action`
                )}
            >
                {icon}
            </span>
        );
    }
}
