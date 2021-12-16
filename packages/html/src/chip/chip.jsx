import * as styles from '../../utils/styles';
import { Component, globalDefaultProps } from '../component/index';
import { IconStatic } from '../icon/index';
import { ChipSelectedIconStatic } from '../chip/index';
import { ChipRemoveIconStatic } from '../chip/index';
import { ChipAvatarStatic } from '../chip/index';

class Chip extends Component {
    render() {
        return <ChipStatic {...this.props} />;
    }
}

function ChipStatic(props) {
    const {
        className: ownClassName,

        children,

        text,

        size,
        rounded,

        fillMode,
        themeColor,

        icon,
        showAvatar,

        hover,
        focus,
        active,
        selected,
        disabled,

        aria,
        legacy,

        ...htmlAttributes
    } = props;

    let chipClasses = [
        ownClassName,
        'k-chip',
        styles.sizeClass( size, 'k-chip' ),
        styles.roundedClass( rounded ),
        styles.fillModeClass( fillMode, 'k-chip' ),
        styles.themeColorClass( fillMode, themeColor, 'k-chip' ),
        {
            'k-chip-has-icon': icon !== '' || showAvatar,
            'k-hover': hover === true,
            'k-focus': focus === true,
            'k-active': active === true,
            'k-selected': selected === true,
            'k-disabled': disabled === true
        }
    ];

    let legacyClasses = [
        ownClassName,
        'k-chip',
        {
            'k-chip-has-icon': icon !== '' || showAvatar,
            'k-chip-outline': fillMode === 'outline',
            'k-chip-solid': fillMode === 'solid',
            'k-state-hover': hover === true,
            'k-state-focus': focus === true,
            'k-state-active': active === true,
            'k-state-selected': selected === true,
            'k-state-disabled': disabled === true
        }
    ];

    // Augment attributes
    htmlAttributes.disabled = disabled;

    let ariaAttr = aria
        ? {}
        : {};

    if (legacy) {
        return (
            <div className={legacyClasses} {...ariaAttr} {...htmlAttributes}>
                <IconStatic className="k-chip-icon" name={icon} />
                <ChipSelectedIconStatic {...props} />
                <ChipAvatarStatic {...props} />
                <span className="k-chip-content">
                    { children.length
                        ? children
                        : text &&
                        <span className="k-chip-label">{text}</span>}
                </span>
                <ChipRemoveIconStatic {...props} />
            </div>
        );
    }

    return (
        <div className={chipClasses} {...ariaAttr} {...htmlAttributes}>
            <IconStatic className="k-chip-icon" name={icon} />
            <ChipSelectedIconStatic {...props} />
            <ChipAvatarStatic {...props} />
            <span className="k-chip-content">
                { children.length
                    ? children
                    : text &&
                    <span className="k-chip-label k-text-ellipsis">{text}</span>}
            </span>
            <ChipRemoveIconStatic {...props} />
        </div>
    );
}

ChipStatic.defaultProps = {
    ...globalDefaultProps,

    children: [],

    text: '',
    icon: '',
    showRemoveIcon: false,
    showAvatar: false,
    showSelectedIcon: false,

    className: '',

    size: 'medium',
    rounded: 'medium',

    fillMode: 'solid',
    themeColor: 'base'
};

ChipStatic.propTypes = {
    children: typeof [],

    text: typeof '',
    icon: typeof '',
    showRemoveIcon: typeof false,
    showAvatar: typeof false,
    showSelectedIcon: typeof false,

    size: typeof [ null, 'small', 'medium', 'large' ],
    rounded: typeof [ null, 'small', 'medium', 'large', 'full' ],

    fillMode: typeof [ null, 'solid', 'outline' ],
    themeColor: typeof [ null, 'base', 'error', 'warning', 'info', 'success' ],

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

export { Chip, ChipStatic };
