import * as React from 'react';
import { ButtonProps } from '../button';
import { classNames } from '../utils';

export interface TimeSelectorHederProps {
    children?: React.ReactElement<ButtonProps> | React.ReactElement<ButtonProps>[];
    className?: null | string;
    title?: string;
}

export class TimeSelectorHeader extends React.Component<TimeSelectorHederProps> {

    render() {

        const {
            children,
            className,
            title
        } = this.props;


        return (
            <>
                <div className={classNames(
                    'k-time-header',
                    className
                )}
                >
                    {title != null && (
                        <span className="k-title">{title}</span>
                    )}
                    {children}
                </div>
            </>
        );


    }

}
