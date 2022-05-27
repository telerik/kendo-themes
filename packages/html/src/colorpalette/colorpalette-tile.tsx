import { Component, globalDefaultProps } from '../component/index';

class ColorPaletteTile extends Component {
    render() {
        return <ColorPaletteTileStatic {...this.props} />;
    }
}

function ColorPaletteTileStatic(props) {
    const {
        className: ownClassName,

        color,
        tileSize,

        hover,
        focus,
        selected,

        aria,

        ...htmlAttributes
    } = props;

    let colorPaletteTileClasses = [
        ownClassName,
        'k-colorpalette-tile',
        {
            'k-hover': hover === true,
            'k-focus': focus === true,
            'k-selected': selected === true
        }
    ];

    let styles = {
        'background-color': color,
        'width': tileSize ? tileSize + "px" : '',
        'height': tileSize ? tileSize + "px" : ''
    };

    let ariaAttr = aria;

    return (
        <td className={colorPaletteTileClasses} {...ariaAttr} {...htmlAttributes} style={styles}></td>
    );
}

ColorPaletteTileStatic.defaultProps = {
    ...globalDefaultProps,

    color: '',
    tileSize: ''
};

ColorPaletteTileStatic.propTypes = {
    className: typeof '',

    color: typeof '',
    tileSize: typeof '',

    hover: typeof false,
    focus: typeof false,
    selected: typeof false,

    aria: typeof false,
    legacy: typeof false,

    htmlAttributes: typeof []
};

export { ColorPaletteTile, ColorPaletteTileStatic };
