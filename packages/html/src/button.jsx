import * as styles from '../utils/styles';
import { Component } from './component';
import { IconStatic } from './icon.jsx';

class Button extends Component {

    init() {
        this._props.text = this.element.innerHTML;
    }

    render() {
        return <ButtonStatic {...this.props} />;
    }
}

function ButtonStatic(props) {
    const {
        text,
        className: ownClassName,
        type,

        size,
        rounded,
        shape,

        fillMode,
        themeColor,

        icon,

        aria,
        legacy
    } = props;

    let buttonClasses = [
        ownClassName,
        'k-button',
        styles.sizeClass( size, 'k-button' ),
        styles.roundedClass( rounded ),
        styles.shapeClass( shape, 'k-button' ),
        styles.fillModeClass( fillMode, 'k-button' ),
        styles.themeColorClass( fillMode, themeColor, 'k-button' )
    ];

    let legacyClasses = [
        'k-button',
        {
            'k-primary': themeColor === 'primary'
        }
    ];

    let ariaAttr = aria
        ? {}
        : {};

    if (legacy) {
        return (
            <button type={type} className={legacyClasses} {...ariaAttr}>
                <IconStatic name={icon} />
                { text }
            </button>
        );
    }

    return (
        <button type={type} className={buttonClasses} {...ariaAttr}>
            <IconStatic className="k-button-icon" name={icon} />
            <span className="k-button-text">{ text }</span>
        </button>
    );
}

ButtonStatic.defaultProps = {
    text: '',
    icon: '',

    className: '',
    type: 'button',

    size: 'medium',
    rounded: 'medium',
    shape: 'rectangle',

    fillMode: 'solid',
    themeColor: 'base',

    aria: false,
    legacy: false
};

ButtonStatic.propTypes = {
    text: typeof '',
    icon: typeof '',

    className: typeof '',
    type: typeof [ 'button', 'submit', 'reset' ],

    size: typeof [ 'none', 'small', 'medium', 'large' ],
    rounded: typeof [ 'none', '0', 'small', 'medium', 'large', 'pill', 'circle' ],
    shape: typeof [ 'none', 'rectangle', 'square' ],

    fillMode: typeof [ 'none', 'solid', 'flat', 'outline' ],
    themeColor: typeof [ 'none', 'surface', 'base', 'primary' ],

    aria: typeof false,
    legacy: typeof false
};

export { Button, ButtonStatic };
