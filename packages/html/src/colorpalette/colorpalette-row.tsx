import * as React from 'react';
import { ColorPaletteTileProps } from '../colorpalette';

export interface ColorPaletteRowProps {
    className?: string;
    children?: React.ReactElement<ColorPaletteTileProps> | React.ReactElement<ColorPaletteTileProps>[];

}

export class ColorPaletteRow extends React.Component<ColorPaletteRowProps> {

    render() {
        const {
            children,
        } = this.props;

        return (
            <tr>{children}</tr>
        );
    }
}
