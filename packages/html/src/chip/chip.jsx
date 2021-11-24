import * as styles from '../../utils/styles';
import { Component, globalDefaultProps } from '../component/index';
import { IconStatic } from '../icon/index';
import { ChipAvatarStatic } from './chip-avatar.jsx';
import { ChipActionsStatic } from './chip-actions.jsx';

class Chip extends Component {

    init() {
        let actions = this._props.actions;
        let newActions = [];

        if (actions === undefined) {
            this._props.actions = [];
            return;
        }

        if (Array.isArray(actions)) {
            return;
        }

        actions.split(',').forEach(action => {
            newActions.push(action.trim());
        });

        this._props.actions = newActions;
    }

    render() {
        return <ChipStatic {...this.props} />;
    }
}

function ChipStatic(props) {
    const {
        className: ownClassName,

        children,

        text,
        icon,
        actions,

        showAvatar,

        size,
        rounded,

        fillMode,
        themeColor,

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
            'k-chip',
            `k-chip-${themeColor}`,
            {
                'k-chip-outline': fillMode === 'outline',
                'k-chip-solid': fillMode === 'solid',
                'k-state-hover': hover === true,
                'k-state-focus': focus === true,
                'k-state-active': active === true,
                'k-state-selected': selected === true,
                'k-state-disabled': disabled === true
            }
        ];

        return (
            <div className={legacyClasses} {...ariaAttr} {...htmlAttributes}>
                <IconStatic className="k-chip-icon" name={icon} />
                {showAvatar && <ChipAvatarStatic {...props} />}
                <span className="k-chip-content">
                    { children.length
                        ? children
                        : text && <span className="k-chip-label">{text}</span>
                    }
                </span>
                { actions.length > 0 && <ChipActionsStatic actions={actions} />}
            </div>
        );
    }

    return (
        <div className={chipClasses} {...ariaAttr} {...htmlAttributes}>
            <IconStatic className="k-chip-icon" name={icon} />
            {showAvatar && <ChipAvatarStatic {...props} />}
            <span className="k-chip-content">
                { children.length
                    ? children
                    : text && <span className="k-chip-label k-text-ellipsis">{text}</span>
                }
            </span>
            { actions.length > 0 && <ChipActionsStatic actions={actions} />}
        </div>
    );
}

ChipStatic.defaultProps = {
    ...globalDefaultProps,

    children: [],

    text: '',
    icon: '',
    actions: [],
    showAvatar: false,

    className: '',

    size: 'medium',
    rounded: 'medium',

    fillMode: 'solid',
    themeColor: 'base'
};

ChipStatic.propTypes = {
    className: typeof '',
    children: typeof [],

    text: typeof '',
    icon: typeof '',
    actions: typeof [],
    showAvatar: typeof false,

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

    htmlAttributes: typeof []
};

export { Chip, ChipStatic };
