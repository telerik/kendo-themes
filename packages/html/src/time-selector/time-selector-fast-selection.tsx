import * as React from 'react';
import { Button } from '../button';
import { ActionButtons } from '../action-buttons';
import { classNames } from '../utils';

export interface TimeSelectorFastSelectionProps {
    className?: null | string;
}

export class TimeSelectorFastSelection extends React.Component<TimeSelectorFastSelectionProps> {

    render() {

        const {
            className
        } = this.props;


        return (
            <>
                <ActionButtons alignment="start" className={classNames(
                    'k-time-fast-selection',
                    className
                )}
                >
                    <Button>1 d</Button>
                    <Button>1 h</Button>
                    <Button>15 m</Button>
                </ActionButtons>
            </>
        );


    }

}
