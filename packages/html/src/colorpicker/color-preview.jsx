import { Component, globalDefaultProps } from '../component/index';
import { IconStatic } from '../icon/index';

class ColorPreview extends Component {
    render() {
        return <ColorPreviewStatic {...this.props} />;
    }
}

function ColorPreviewStatic(props) {
    const {
        className: ownClassName,

        color,
        iconName,

        aria,
        legacy,

        ...htmlAttributes
    } = props;

    let colorPreviewClasses = [
        ownClassName,
        'k-color-preview',
        {
            'k-icon-color-preview': iconName !== '',
            'k-no-color': color === ''
        }
    ];

    let styles = {
        'background-color': color
    };

    let ariaAttr = aria
        ? {}
        : {};

    if (legacy) {

        let legacyClasses = [
            ownClassName,
            'k-selected-color',
            {
                'k-no-color': color === ''
            }
        ];

        let legacyStyles = {
            'background-color': color
        };

        if (iconName === '') {
            return (
                <span className={legacyClasses} style={legacyStyles}></span>
            );
        }

        return (
            <IconStatic className="k-tool-icon" name={iconName}>
                <span className={legacyClasses} style={legacyStyles}></span>
            </IconStatic>
        );

    }

    return (
        <span className={colorPreviewClasses} {...ariaAttr} {...htmlAttributes}>
            {iconName && <IconStatic name={iconName} className="k-color-preview-icon" />}
            <span className="k-color-preview-mask" style={styles}></span>
        </span>
    );
}

ColorPreviewStatic.defaultProps = {
    ...globalDefaultProps,

    color: '',
    iconName: ''
};
ColorPreviewStatic.propTypes = {
    className: typeof '',

    color: typeof '',
    iconName: typeof '',

    aria: typeof false,
    legacy: typeof false,

    htmlAttributes: typeof []
};

export { ColorPreview, ColorPreviewStatic };
