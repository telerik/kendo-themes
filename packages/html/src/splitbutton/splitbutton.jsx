import { Component, globalDefaultProps } from '../component';
import { ButtonStatic } from '../button/index';

class SplitButton extends Component {

    init() {
        this._props.text = this.element.innerHTML;
    }

    render() {
        return <SplitButtonStatic {...this.props} />;
    }
}

function SplitButtonStatic(props) {
    const {
        className: ownClassName,

        text,

        size,
        rounded,
        shape,

        fillMode,
        themeColor,

        icon,

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

    let splitButtonClasses = [
        ownClassName,
        'k-split-button',
        'k-button-group',
        {
            'k-focus': focus === true
        }
    ];


    let legacySplitButtonClasses = [
        ownClassName,
        'k-split-button',
        'k-button-group',
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
            <div className={legacySplitButtonClasses} {...ariaAttr} {...htmlAttributes}>
                <ButtonStatic legacy={true}></ButtonStatic>
            </div>
        );
    }

    return (
        <div className={splitButtonClasses} {...ariaAttr} {...htmlAttributes}>
            <ButtonStatic
                text={text}
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
            <ButtonStatic
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
                icon={arrowIconName ? arrowIconName : 'arrow-s'}></ButtonStatic>
        </div>
    );
}

SplitButtonStatic.defaultProps = {
    ...globalDefaultProps,

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

SplitButtonStatic.propTypes = {
    text: typeof '',
    icon: typeof '',

    arrowIconName: typeof '',

    size: typeof [ 'none', 'small', 'medium', 'large' ],
    rounded: typeof [ 'none', '0', 'small', 'medium', 'large', 'pill', 'circle' ],
    shape: typeof [ 'none', 'rectangle', 'square' ],

    fillMode: typeof [ 'none', 'solid', 'flat', 'outline', 'link' ],
    themeColor: typeof [ 'none', 'surface', 'base', 'primary' ],

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

export { SplitButton, SplitButtonStatic };
