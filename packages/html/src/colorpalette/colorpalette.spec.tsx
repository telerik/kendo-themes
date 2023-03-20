import { classNames, stateClassNames, States } from '../utils';
import { PALETTEPRESETS } from './colorpalette-presets';
import { ColorPaletteRow } from './colorpalette-row';
import { ColorPaletteTile } from './colorpalette-tile';

export const COLORPALETTE_CLASSNAME = `k-colorpalette`;

const states = [
    States.disabled
];

const options = {};

export type KendoColorPaletteProps = {
    palette?: null | 'basic' | 'office' | 'apex' | 'austin' | 'clarity' | 'slipstream' | 'metro' | 'flow' | 'hardcover' | 'trek' | 'verve' | 'monochrome';
    columns?: number;
    tileSize?: string;
};

export type KendoColorPaletteState = { [K in (typeof states)[number]]?: boolean };

const defaultProps = {
    columns: 10,
};

export const ColorPalette = (
    props: KendoColorPaletteProps &
        KendoColorPaletteState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        palette,
        columns = defaultProps.columns,
        tileSize,
        disabled,
        ...other
    } = props;

    const newChildren : JSX.Element[] = [];

    if (palette) {
        const preset = PALETTEPRESETS[palette];

        if (preset) {
            const cols = columns || preset.columns;

            Array.from({ length: Math.ceil(preset.colors.length / cols) }, (_, i) => {
                const items : JSX.Element[] = [];

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
            {...other}
            className={classNames(
                props.className,
                COLORPALETTE_CLASSNAME,
                stateClassNames(COLORPALETTE_CLASSNAME, {
                    disabled,
                }),
            )}>
            <div className="k-colorpalette-table-wrap">
                <table className="k-colorpalette-table k-palette">
                    {newChildren.length > 0 ? newChildren : props.children}
                </table>
            </div>
        </div>
    );
};

ColorPalette.states = states;
ColorPalette.options = options;
ColorPalette.className = COLORPALETTE_CLASSNAME;

export default ColorPalette;
