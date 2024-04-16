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
};

export type KendoColorPaletteTileState = { [K in (typeof states)[number]]?: boolean };


export const ColorPaletteTile = (
    props: KendoColorPaletteTileProps &
        KendoColorPaletteTileState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
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

    return (
        <td
            {...other}
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
