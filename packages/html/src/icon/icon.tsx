import * as React from 'react';
import { classNames } from '../utils';

export interface IconProps {
    className?: string;
    style?: React.CSSProperties;
    name?: string;
    size?: null | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
    rotate?: null | '0' | '45' | '90' | '135' | '180' | '225' | '270' | '315';
    flip?: null | 'v' | 'h';
}

export class Icon extends React.Component<IconProps> {

    render() {
        const {
            className,
            style,
            name,
            size,
            rotate,
            flip
        } = this.props;

        return (
            <>
                { name &&
                    <span
                        className={classNames(
                            className,
                            'k-icon',
                            {
                                [`k-i-${name}`]: name,
                                [`k-icon-${size}`]: size,
                                [`k-rotate-${rotate}`]: rotate,
                                [`k-flip-${flip}`]: flip
                            }
                        )}
                        style={style}>
                    </span>
                }
            </>
        );
    }
}
