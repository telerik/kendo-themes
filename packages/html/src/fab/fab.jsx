import * as styles from '../../utils/styles';
import { Component, globalDefaultProps } from '../component/index';
import { IconStatic } from '../icon/index';

class Fab extends Component {

    init() {
        this._props.text = this.element.innerHTML;
    }

    render() {
        return <FabStatic {...this.props} />;
    }
}

function FabStatic(props) {
    const {
        className: ownClassName,

        text,
        type,

        size,
        rounded,
        shape,

        fillMode,
        themeColor,

        icon,

        position,

        hover,
        focus,
        active,
        selected,
        disabled,

        aria,
        legacy,

        ...htmlAttributes
    } = props;

    let buttonClasses = [
        ownClassName,
        'k-fab',
        styles.positionClass( position, 'k'),
        styles.shapeClass( shape, 'k-fab' ),
        styles.sizeClass( size, 'k-fab' ),
        styles.roundedClass( rounded ),
        styles.fillModeClass( fillMode, 'k-fab' ),
        styles.themeColorClass( fillMode, themeColor, 'k-fab' ),
        {
            'k-hover': hover === true,
            'k-focus': focus === true,
            'k-active': active === true,
            'k-selected': selected === true,
            'k-disabled': disabled === true
        }
    ];

    // Augment attributes
    htmlAttributes.disabled = disabled;

    let ariaAttr = aria
        ? {}
        : {};

    if (legacy) {
        let legacyClasses = [
            ownClassName,
            'k-fab',
            `k-fab-${themeColor}`,
            styles.roundedClass( rounded ),
            {
                'k-state-hover': hover === true,
                'k-state-focus': focus === true,
                'k-state-active': active === true,
                'k-state-selected': selected === true,
                'k-state-disabled': disabled === true
            },
            styles.positionClass( position, 'k'),
            styles.sizeClass( size, 'k-fab' )
        ];

        return (
            <button type={type} className={legacyClasses} {...ariaAttr} {...htmlAttributes}>
                <IconStatic className="k-fab-icon" name={icon} />
                {text && <span className="k-fab-text">{text}</span>}
            </button>
        );
    }

    return (
        <button type={type} className={buttonClasses} {...ariaAttr} {...htmlAttributes}>
            <IconStatic className="k-fab-icon" name={icon} />
            {text && <span className="k-fab-text">{text}</span>}
        </button>
    );
}

FabStatic.defaultProps = {
    ...globalDefaultProps,

    text: '',
    icon: '',

    className: '',
    type: 'button',

    size: 'medium',
    rounded: 'full',
    shape: 'rectangle',

    position: null,

    fillMode: 'solid',
    themeColor: 'primary'
};

FabStatic.propTypes = {
    text: typeof '',
    icon: typeof '',

    type: typeof [ 'button', 'submit', 'reset' ],

    size: typeof [ null, 'small', 'medium', 'large' ],
    rounded: typeof [ null, 'small', 'medium', 'large', 'full' ],
    shape: typeof [ null, 'rectangle', 'square' ],
    fillMode: typeof [ null, 'solid' ],
    themeColor: typeof [ null, 'primary', 'secondary', 'tertiary', 'info', 'success', 'warning', 'error', 'dark', 'light', 'inverse' ],

    position: typeof [ null, 'top-start', 'top-center', 'top-end', 'middle-start', 'middle-end', 'bottom-start', 'bottom-center', 'bottom-end' ],

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

export { Fab, FabStatic };
