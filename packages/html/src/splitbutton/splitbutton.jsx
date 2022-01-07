import * as styles from '../../utils/styles';
import { Component, globalDefaultProps } from '../component/index';
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
        styles.roundedClass( rounded ),
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

export { SplitButton, SplitButtonStatic };
