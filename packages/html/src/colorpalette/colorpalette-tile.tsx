import { classNames, stateClassNames, States } from '../misc';

export const COLORPALETTETILE_CLASSNAME = `k-colorpalette-tile`;

const states = [
    States.hover,
    States.focus,
    States.selected
];

const options = {};

export type KendoColorPaletteTileProps = {
    color?: string;
    tileSize?: string;
    id?: string;
};

export type KendoColorPaletteTileState = { [K in (typeof states)[number]]?: boolean };


export const getColorPaletteTileId = (id: string | undefined, color: string | undefined) => {
    if (id) {
        return id;
    }
    if (!color) {
        return undefined;
    }
    return `k-colorpalette-tile-${color.replace(/[^a-zA-Z0-9_-]/g, '')}`;
};

export const ColorPaletteTile = (
    props: KendoColorPaletteTileProps &
        KendoColorPaletteTileState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        id,
        color,
        tileSize,
        hover,
        focus,
        selected,
        ...other
    } = props;

    const styles = {
        'backgroundColor': color,
        'width': tileSize ? tileSize + 'px' : '',
        'height': tileSize ? tileSize + 'px' : ''
    };

    const tileId = getColorPaletteTileId(id, color);

    return (
        <td
            {...other}
            id={tileId}
            role="gridcell"
            aria-label={color}
            aria-selected={selected ? 'true' : undefined}
            className={classNames(
                props.className,
                COLORPALETTETILE_CLASSNAME,
                stateClassNames(COLORPALETTETILE_CLASSNAME, {
                    hover,
                    focus,
                    selected
                }),
            )}
            style={styles}
        >
        </td>
    );
};

ColorPaletteTile.states = states;
ColorPaletteTile.options = options;
ColorPaletteTile.className = COLORPALETTETILE_CLASSNAME;

export default ColorPaletteTile;
