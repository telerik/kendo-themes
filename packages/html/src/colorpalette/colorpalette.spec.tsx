import { classNames, stateClassNames, States, Size, optionClassNames } from '../misc';
import { ColorPaletteRow } from './colorpalette-row';
import { ColorPaletteTile } from './colorpalette-tile.spec';

import { KendoComponent } from '../_types/component';
import { COLORPALETTE_FOLDER_NAME, COLORPALETTE_MODULE_NAME } from './constants';
export const COLORPALETTE_CLASSNAME = `k-colorpalette`;

const states = [
    States.disabled
];

const options = {
    size: [ Size.undefined, Size.small, Size.medium, Size.large ]
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
    columns: 10
};

/**
 * @aria {role="grid"} The focusable wrapper announces its role as a grid.
 * @aria {aria-label|aria-labelledby} The component needs an accessible name including the currently selected value.
 * @aria {aria-activedescendant} Points to the focused cell in the table.
 * @aria {tabindex="0"} The element must be focusable.
 * @aria {aria-disabled="true"} Rendered only when the ColorPalette is disabled.
 * @aria {role="none"|\"presentation"} Negates the default role of the table element.
 * @aria {role="row"} Required as the semantic role of the parent table has been removed.
 */
export const ColorPalette: KendoComponent<KendoColorPaletteProps & KendoColorPaletteState & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoColorPaletteProps &
        KendoColorPaletteState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size,
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
            role="grid"
            aria-label="Color palette"
            tabIndex={0}
            aria-disabled={disabled ? 'true' : undefined}
            className={classNames(
                props.className,
                COLORPALETTE_CLASSNAME,
                stateClassNames(COLORPALETTE_CLASSNAME, {
                    disabled,
                }),
                optionClassNames(COLORPALETTE_CLASSNAME, { size }),
            )}>

            <table className="k-colorpalette-table" role="none">
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
ColorPalette.moduleName = COLORPALETTE_MODULE_NAME;
ColorPalette.folderName = COLORPALETTE_FOLDER_NAME;

/**
 * @keyboard {ArrowDown} Focuses the next cell below.
 * @keyboard {ArrowUp} Focuses the next cell above.
 * @keyboard {ArrowRight} Focuses the next cell on the right.
 * @keyboard {ArrowLeft} Focuses the next cell on the left.
 * @keyboard {Enter} Selects the color from the currently focused cell.
 */

export default ColorPalette;
