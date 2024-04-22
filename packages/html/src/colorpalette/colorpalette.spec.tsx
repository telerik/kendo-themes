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

const defaultProps = {
    columns: 10
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

        const cols = columns || palette.columns;

        const colors = palette.colors ? palette.colors : palette;

        if (Array.isArray(colors)) {
            Array.from({ length: Math.ceil(colors.length / cols) }, (_, i) => {
                const items : JSX.Element[] = [];

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
ColorPalette.defaultProps = defaultProps;

export default ColorPalette;
