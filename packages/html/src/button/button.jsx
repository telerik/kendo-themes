import * as styles from '../../utils/styles';
import { Component, globalDefaultProps } from '../component/index';
import { IconStatic } from '../icon/index';

class Button extends Component {

    init() {
        this._props.text = this.element.innerHTML;
        this._props.children = [];
    }

    render() {
        return <ButtonStatic {...this.props} />;
    }
}

function ButtonStatic(props) {
    const {
        className: ownClassName,
        children,

        text,
        type,

        size,
        rounded,
        shape,

        fillMode,
        themeColor,

        icon,

        hover,
        focus,
        active,
        selected,
        disabled,

        aria,

        ...htmlAttributes
    } = props;

    const isIconButton = Boolean( icon ) === true && Boolean( text ) === false;

    let buttonClasses = [
        ownClassName,
        'k-button',
        styles.sizeClass( size, 'k-button' ),
        styles.roundedClass( rounded ),
        styles.shapeClass( shape, 'k-button' ),
        styles.fillModeClass( fillMode, 'k-button' ),
        styles.themeColorClass( fillMode, themeColor, 'k-button' ),
        {
            'k-hover': hover === true,
            'k-focus': focus === true,
            'k-active': active === true,
            'k-selected': selected === true,
            'k-disabled': disabled === true,
            'k-icon-button': isIconButton
        }
    ];

    // Augment attributes
    htmlAttributes.disabled = disabled;

    let ariaAttr = aria
        ? {}
        : {};

    return (
        <button type={type} className={buttonClasses} {...ariaAttr} {...htmlAttributes}>
            { children.length === 0
                ? <>
                    <IconStatic className="k-button-icon" name={icon} />
                    {text && <span className="k-button-text">{text}</span>}
                </>
                : children
            }
        </button>
    );
}

ButtonStatic.defaultProps = {
    ...globalDefaultProps,

    children: [],

    text: '',
    icon: '',

    className: '',
    type: 'button',

    size: 'medium',
    rounded: 'medium',
    shape: 'rectangle',

    fillMode: 'solid',
    themeColor: 'base'
};

ButtonStatic.propTypes = {
    children: typeof [],
    text: typeof '',
    icon: typeof '',

    type: typeof [ 'button', 'submit', 'reset' ],

    size: typeof [ null, 'small', 'medium', 'large' ],
    rounded: typeof [ null, 'small', 'medium', 'large', 'full' ],
    shape: typeof [ null, 'rectangle', 'square' ],

    fillMode: typeof [ null, 'solid', 'flat', 'outline', 'link' ],
    themeColor: typeof [ null, 'surface', 'base', 'primary' ],

    hover: typeof false,
    focus: typeof false,
    active: typeof false,
    selected: typeof false,
    disabled: typeof false,

    aria: typeof false,
    legacy: typeof false,

    className: typeof '',
    htmlAttributes: typeof []
};

export { Button, ButtonStatic };
