import { Component, globalDefaultProps } from '../component/index';
import { ColorPaletteRowStatic } from './colorpalette-row.jsx';
import { ColorPaletteTileStatic } from './colorpalette-tile.jsx';
import { PALETTEPRESETS } from './colorpalette-presets.jsx';

class ColorPalette extends Component {

    init() {
        let preset = PALETTEPRESETS[this._props.palette];
        let columns = this._props.columns;
        let tileSize = this._props.tileSize;
        let newChildren = [];

        if (!preset) { return; }

        columns = columns || preset.columns;

        Array.from({ length: Math.ceil(preset.colors.length / columns) }, (_, i) => {
            let row = <ColorPaletteRowStatic></ColorPaletteRowStatic>;

            preset.colors.slice(i * columns, (i + 1) * columns)
                .map((color) => {
                    row.props.children.push( <ColorPaletteTileStatic color={color} tileSize={tileSize} /> );
                });

            newChildren.push(row);
        });

        this._props.children = newChildren;
    }

    render() {
        return <ColorPaletteStatic {...this.props} />;
    }
}

function ColorPaletteStatic(props) {
    const {
        className: ownClassName,
        children,

        disabled,

        aria,

        ...htmlAttributes
    } = props;

    let colorPaletteClasses = [
        ownClassName,
        'k-colorpalette',
        {
            'k-disabled': disabled === true
        }
    ];

    let ariaAttr = aria
        ? {}
        : {};

    return (
        <div className={colorPaletteClasses} {...ariaAttr} {...htmlAttributes}>
            <div className="k-colorpalette-table-wrap">
                <table className="k-colorpalette-table k-palette">
                    {children}
                </table>
            </div>
        </div>
    );
}

ColorPaletteStatic.defaultProps = {
    ...globalDefaultProps,

    className: '',

    palette: 'office',
    columns: 10,
    tileSize: ''
};

ColorPaletteStatic.propTypes = {
    children: typeof [],

    palette: typeof '',
    columns: typeof '',
    tileSize: typeof '',

    disabled: typeof false,

    aria: typeof false,
    legacy: typeof false,

    className: typeof '',
    htmlAttributes: typeof []
};

export { ColorPalette, ColorPaletteStatic };
