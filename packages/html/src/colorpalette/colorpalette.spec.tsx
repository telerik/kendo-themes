import { classNames, stateClassNames, States, Size, optionClassNames } from '../misc';
import { ColorPaletteRow } from './colorpalette-row';
import { ColorPaletteTile } from './colorpalette-tile';

import { KendoComponent } from '../_types/component';
export const COLORPALETTE_CLASSNAME = `k-colorpalette`;

const states = [
    States.disabled
];

const options = {
    size: [ Size.small, Size.medium, Size.large ]
};

export type KendoColorPaletteOptions = {
    size?: (typeof options.size)[number] | null;
};

export type KendoColorPaletteProps = KendoColorPaletteOptions & {
    palette?: Array<string> | any;
    columns?: number;
    tileSize?: string;
};

export type KendoColorPaletteState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    columns: 10,
    size: Size.medium
};

export const ColorPalette: KendoComponent<KendoColorPaletteProps & KendoColorPaletteState & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoColorPaletteProps &
        KendoColorPaletteState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size = defaultOptions.size,
        palette,
        columns = defaultOptions.columns,
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
                optionClassNames(COLORPALETTE_CLASSNAME, { size }),
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
ColorPalette.defaultOptions = defaultOptions;
ColorPalette.moduleName = "color-palette";
ColorPalette.folderName = ColorPalette.moduleName;

export default ColorPalette;
