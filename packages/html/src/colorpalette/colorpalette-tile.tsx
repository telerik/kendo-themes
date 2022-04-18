import * as React from 'react';
import { classNames } from '../utils';

export interface ColorPaletteTileProps {
    className?: string;
    color?: string;
    tileSize?: string;
    hover?: boolean;
    focus?: boolean;
    selected?: boolean;
}

export class ColorPaletteTile extends React.Component<ColorPaletteTileProps> {


    render() {
        const {
            className,
            color,
            tileSize,
            hover,
            focus,
            selected,
        } = this.props;

        const styles = {
            'background-color': color,
            'width': tileSize ? tileSize + 'px' : '',
            'height': tileSize ? tileSize + 'px' : ''
        };

        return (
            <td
                className={classNames(
                    className,
                    'k-colorpalette-tile',
                    {
                        'k-hover': hover,
                        'k-focus': focus,
                        'k-selected': selected,
                    }
                )}
                style={styles}
            >
            </td>
        );
    }
}
