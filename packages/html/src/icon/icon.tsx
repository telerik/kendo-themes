import * as React from 'react';
import { classNames } from '../utils';

export interface IconProps {
    className?: string;
    style?: React.CSSProperties;
    name?: string;
}

export class Icon extends React.Component<IconProps> {

    render() {
        const {
            className,
            style,
            name
        } = this.props;

        return (
            <>
                { name &&
                    <span
                        className={classNames(
                            className,
                            'k-icon',
                            {
                                [`k-i-${name}`]: name
                            }
                        )}
                        style={style}>
                    </span>
                }
            </>
        );
    }
}
