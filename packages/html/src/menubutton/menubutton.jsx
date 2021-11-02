import { Component, globalDefaultProps } from '../component/index';
import { ButtonStatic } from '../button/index';
import { IconStatic } from '../icon/index';

class MenuButton extends Component {

    init() {
        this._props.text = this.element.innerHTML;
        this._props.children = [];
    }

    render() {
        return <MenuButtonStatic {...this.props} />;
    }
}

function MenuButtonStatic(props) {
    const {
        className: ownClassName,

        text,

        size,
        rounded,

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

    let menuButtonClasses = [
        ownClassName,
        'k-menu-button'
    ];

    // Augment attributes
    htmlAttributes.disabled = disabled;

    let ariaAttr = aria
        ? {}
        : {};

    if (legacy) {

        let legacyMenuButtonClasses = [
            ownClassName,
            'k-menu-button'
        ];

        return (
            <ButtonStatic className={legacyMenuButtonClasses}
                text={text}
                icon={icon}

                size={size}
                rounded={rounded}
                fillMode={fillMode}
                themeColor={themeColor}

                hover={hover}
                focus={focus}
                active={active}
                selected={selected}
                disabled={disabled}

                {...ariaAttr}
                {...htmlAttributes}
            >
                <IconStatic className="k-button-icon" name={icon} />
                {text && <span className="k-button-text">{text}</span>}
                {showArrow && <span className="k-menu-button-arrow k-button-arrow"><IconStatic name={arrowIconName} /></span>}
            </ButtonStatic>
        );
    }

    return (
        <ButtonStatic className={menuButtonClasses}
            text={text}
            icon={icon}

            size={size}
            rounded={rounded}
            fillMode={fillMode}
            themeColor={themeColor}

            hover={hover}
            focus={focus}
            active={active}
            selected={selected}
            disabled={disabled}

            {...ariaAttr}
            {...htmlAttributes}
        >
            <IconStatic className="k-button-icon" name={icon} />
            {text && <span className="k-button-text">{text}</span>}
            {showArrow && <span className="k-menu-button-arrow k-button-arrow"><IconStatic name={arrowIconName} /></span>}
        </ButtonStatic>
    );
}

MenuButtonStatic.defaultProps = {
    ...globalDefaultProps,

    text: '',
    icon: '',

    className: '',

    size: 'medium',
    rounded: 'medium',

    showArrow: 'true',
    arrowIconName: 'arrow-s',

    fillMode: 'solid',
    themeColor: 'base'
};

MenuButtonStatic.propTypes = {
    text: typeof '',
    icon: typeof '',

    showArrow: typeof false,
    arrowIconName: typeof '',

    size: typeof [ null, 'small', 'medium', 'large' ],
    rounded: typeof [ null, '0', 'small', 'medium', 'large', 'full' ],

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

export { MenuButton, MenuButtonStatic };
