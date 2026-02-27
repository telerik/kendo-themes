import { classNames, stateClassNames, States, Size, optionClassNames } from '../misc';
import { ColorPaletteRow } from './colorpalette-row';
import { ColorPaletteTile } from './colorpalette-tile';

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
 * Accessibility specification for ColorPalette.
 *
 * @accessibility
 * - Wrapper has role=grid with aria-label and tabindex=0
 * - Table has role=none to negate default semantics
 * - Rows have role=row
 * - Tiles have role=gridcell with aria-label for color value
 * - Selected tile has aria-selected=true
 * - Disabled palette has aria-disabled=true
 *
 * @wcag 4.1.2 Name, Role, Value - grid pattern for color selection
 */
ColorPalette.ariaSpec = {
    selector: '.k-colorpalette',
    rules: [
        { selector: '.k-colorpalette', attribute: 'role=grid', usage: 'The focusable wrapper announces its role as a grid.' },
        { selector: '.k-colorpalette', attribute: 'aria-label or aria-labelledby', usage: 'The component needs an accessible name including the currently selected value.' },
        { selector: '.k-colorpalette', attribute: 'aria-activedescendant', usage: 'Points to the focused cell in the table.' },
        { selector: '.k-colorpalette', attribute: 'tabindex=0', usage: 'The element must be focusable.' },
        { selector: '.k-colorpalette.k-disabled', attribute: 'aria-disabled=true', usage: 'Rendered only when the ColorPalette is disabled.' },
        { selector: '.k-colorpalette-table', attribute: 'role=none or role=presentation', usage: 'Negates the default role of the table element.' },
        { selector: '.k-colorpalette-table>tbody>tr', attribute: 'role=row', usage: 'Required as the semantic role of the parent table has been removed.' },
        { selector: '.k-colorpalette-tile', attribute: 'role=gridcell', usage: 'Required as the semantic role of the parent table has been removed.' },
        { selector: '.k-colorpalette-tile', attribute: 'aria-label or title', usage: 'The text representation of the color value for the current cell.' },
        { selector: '.k-colorpalette-tile.k-selected', attribute: 'aria-selected=true', usage: 'Present on the currently selected cell.' },
    ]
};

export default ColorPalette;
