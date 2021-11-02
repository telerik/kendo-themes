import { Component, globalDefaultProps } from '../component/index';
import { ButtonStatic } from '../button/index';

class DropDownButton extends Component {

    init() {
        this._props.text = this.element.innerHTML;
    }

    render() {
        return <DropDownButtonStatic {...this.props} />;
    }
}

function DropDownButtonStatic(props) {
    const {
        className: ownClassName,

        text,

        size,
        rounded,
        shape,

        fillMode,
        themeColor,

        icon,

        showArrow,
        arrowIconName,

        hover,
        focus,
        active,
        selected,
        disabled,

        aria,
        legacy,

        ...htmlAttributes
    } = props;

    let dropDownButtonClasses = [
        ownClassName,
        'k-dropdown-button',
        {
            'k-focus': focus === true
        }
    ];


    let legacyDropDownButtonClasses = [
        ownClassName,
        'k-widget',
        'k-dropdown-button',
        {
            'k-state-focused': focus === true
        }
    ];

    // Augment attributes
    htmlAttributes.disabled = disabled;

    let ariaAttr = aria
        ? {}
        : {};

    if (legacy) {
        return (
            <div className={legacyDropDownButtonClasses} {...ariaAttr} {...htmlAttributes}>
                <ButtonStatic legacy={true}></ButtonStatic>
            </div>
        );
    }

    let renderText = ( text === '' && !showArrow )
        ? undefined
        : <>
            {text}
            {showArrow && <span className={`k-icon k-i-${arrowIconName || 'arrow-s'}`}></span>}
        </>;

    return (
        <div className={dropDownButtonClasses} {...ariaAttr} {...htmlAttributes}>
            <ButtonStatic
                text={renderText}
                disabled={disabled}
                hover={hover}
                active={active}
                selected={selected}
                focus={focus}
                size={size}
                rounded={rounded}
                shape={shape}
                fillMode={fillMode}
                themeColor={themeColor}
                icon={icon}></ButtonStatic>
        </div>
    );
}

DropDownButtonStatic.defaultProps = {
    ...globalDefaultProps,

    text: '',
    icon: '',

    className: '',

    size: 'medium',
    rounded: 'medium',
    shape: 'rectangle',

    fillMode: 'solid',
    themeColor: 'base'
};

DropDownButtonStatic.propTypes = {
    text: typeof '',
    icon: typeof '',

    showArrow: typeof false,
    arrowIconName: typeof '',

    size: typeof [ null, 'small', 'medium', 'large' ],
    rounded: typeof [ null, '0', 'small', 'medium', 'large', 'full' ],
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

export { DropDownButton, DropDownButtonStatic };
