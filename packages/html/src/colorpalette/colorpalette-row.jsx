import { Component, globalDefaultProps } from '../component/index';

class ColorPaletteRow extends Component {
    render() {
        return <ColorPaletteRowStatic {...this.props} />;
    }
}

function ColorPaletteRowStatic(props) {
    const {
        className: ownClassName,

        aria,

        ...htmlAttributes
    } = props;

    let ariaAttr = aria
        ? {}
        : {};

    return (
        <tr {...ariaAttr} {...htmlAttributes}></tr>
    );
}

ColorPaletteRowStatic.defaultProps = {
    ...globalDefaultProps,
};

ColorPaletteRowStatic.propTypes = {
    className: typeof '',

    aria: typeof false,

    htmlAttributes: typeof []
};

export { ColorPaletteRow, ColorPaletteRowStatic };
