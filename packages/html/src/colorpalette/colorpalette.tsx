import * as React from 'react';
import { classNames } from '../utils';
import { ColorPaletteRow, ColorPaletteTile, ColorPaletteTileProps } from '../colorpalette';
import { PALETTEPRESETS } from './colorpalette-presets';

export interface ColorPaletteProps {
    children?: React.ReactNode;
    className?: string;
    palette?: null | 'basic' | 'office' | 'apex' | 'austin' | 'clarity' | 'slipstream' | 'metro' | 'flow' | 'hardcover' | 'trek' | 'verve' | 'monochrome';
    columns?: number;
    tileSize?: string;
    disabled?: boolean;
}


export class ColorPalette extends React.Component<ColorPaletteProps> {

    static defaultProps = {
        columns: 10,
    };

    render() {
        const {
            children,
            className,
            palette,
            columns,
            tileSize,
            disabled,
        } = this.props;

        const newChildren : React.ReactNode[] = [];

        if (palette) {
            const preset = PALETTEPRESETS[palette];

            if (preset) {
                const cols = columns || preset.columns;

                Array.from({ length: Math.ceil(preset.colors.length / cols) }, (_, i) => {
                    const items : React.ReactElement<ColorPaletteTileProps>[] = [];

                    preset.colors.slice(i * cols, (i + 1) * cols)
                        .map((color) => {
                            items.push( <ColorPaletteTile color={color} tileSize={tileSize} /> );
                        });

                    const row = <ColorPaletteRow>{items}</ColorPaletteRow>;

                    newChildren.push(row);
                });
            }
        }


        return (
            <div
                className={classNames(
                    className,
                    'k-colorpalette',
                    {
                        'k-disabled': disabled
                    }
                )}>
                <div className="k-colorpalette-table-wrap">
                    <table className="k-colorpalette-table k-palette">
                        {newChildren.length > 0 ? newChildren : children}
                    </table>
                </div>
            </div>
        );
    }
}
