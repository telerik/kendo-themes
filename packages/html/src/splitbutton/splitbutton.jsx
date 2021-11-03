import * as styles from '../../utils/styles';
import { Component, globalDefaultProps } from '../component/index';
import { ButtonStatic } from '../button/index';

class SplitButton extends Component {

    init() {
        this._props.text = this.element.innerHTML;
        this._props.children = [];
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
        styles.roundedClass( rounded )
    ];

    // Augment attributes
    htmlAttributes.disabled = disabled;

    let ariaAttr = aria
        ? {}
        : {};

    if (legacy) {

        let legacySplitButtonClasses = [
            ownClassName,
            'k-split-button',
            'k-button-group'
        ];

        return (
            <div className={legacySplitButtonClasses} {...ariaAttr} {...htmlAttributes}>
                <ButtonStatic
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
                ></ButtonStatic>
                <ButtonStatic
                    className="k-split-button-arrow"

                    icon={arrowIconName}

                    size={size}
                    rounded={rounded}
                    fillMode={fillMode}
                    themeColor={themeColor}

                    disabled={disabled}
                ></ButtonStatic>
            </div>
        );
    }

    return (
        <div className={splitButtonClasses} {...ariaAttr} {...htmlAttributes}>
            <ButtonStatic
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
            ></ButtonStatic>
            <ButtonStatic
                className="k-split-button-arrow"

                icon={arrowIconName}

                size={size}
                rounded={rounded}
                fillMode={fillMode}
                themeColor={themeColor}

                disabled={disabled}
            ></ButtonStatic>
        </div>
    );
}

SplitButtonStatic.defaultProps = {
    ...globalDefaultProps,

    text: '',
    icon: '',

    arrowIconName: 'arrow-s',

    className: '',
    type: 'button',

    size: 'medium',
    rounded: 'medium',

    fillMode: 'solid',
    themeColor: 'base'
};

SplitButtonStatic.propTypes = {
    text: typeof '',
    icon: typeof '',

    arrowIconName: typeof '',

    size: typeof [ null, 'small', 'medium', 'large' ],
    rounded: typeof [ null, 'small', 'medium', 'large', 'full' ],

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
