import { classNames, stateClassNames, States } from '../misc';
import { ColorPaletteRow } from './colorpalette-row';
import { ColorPaletteTile } from './colorpalette-tile';

export const COLORPALETTE_CLASSNAME = `k-colorpalette`;

const states = [
    States.disabled
];

const options = {};

export type KendoColorPaletteProps = {
    palette?: Array<string> | any;
    columns?: number;
    tileSize?: string;
};

export type KendoColorPaletteState = { [K in (typeof states)[number]]?: boolean };

export const ColorPalette = (
    props: KendoColorPaletteProps &
        KendoColorPaletteState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        palette,
        columns = 10,
        tileSize,
        disabled,
        ...other
    } = props;

    const newChildren : React.JSX.Element[] = [];

    if (palette) {

        const cols = columns || palette.columns;

        const colors = palette.colors ? palette.colors : palette;

        if (Array.isArray(colors)) {
            Array.from({ length: Math.ceil(colors.length / cols) }, (_, i) => {
                const items : React.JSX.Element[] = [];

                colors.slice(i * cols, (i + 1) * cols)
                    .map((color, index) => {
                        items.push( <ColorPaletteTile key={index} color={color} tileSize={tileSize} /> );
                    });

                const row = <ColorPaletteRow key={i}>{items}</ColorPaletteRow>;

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

            <table className="k-colorpalette-table">
                <tbody>
                    {newChildren.length > 0 ? newChildren : props.children}
                </tbody>
            </table>

        </div>
    );
};

ColorPalette.states = states;
ColorPalette.options = options;
ColorPalette.className = COLORPALETTE_CLASSNAME;

export default ColorPalette;
