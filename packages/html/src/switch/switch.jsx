import * as styles from '../../utils/styles';
import { Component, globalDefaultProps } from '../component/index';

class Switch extends Component {
    render() {
        return <SwitchStatic {...this.props} />;
    }
}

function SwitchStatic(props) {
    const {
        className: ownClassName,

        checked,

        onLabel,
        offLabel,

        size,
        trackRounded,
        thumbRounded,

        hover,
        focus,
        disabled,

        aria,
        legacy,

        ...htmlAttributes
    } = props;

    let switchClasses = [
        ownClassName,
        'k-switch',
        styles.sizeClass( size, 'k-switch' ),
        styles.roundedClass( trackRounded ),
        {
            'k-hover': hover === true,
            'k-focus': focus === true,
            'k-disabled': disabled === true,
            'k-switch-on': checked === true,
            'k-switch-off': checked === false
        }
    ];

    let legacyClasses = [
        ownClassName,
        'k-switch',
        'k-widget',
        {
            'k-state-hover': hover === true,
            'k-state-focused': focus === true,
            'k-state-disabled': disabled === true,
            'k-switch-on': checked === true,
            'k-switch-off': checked === false
        }
    ];

    let switchTrackClasses = [
        'k-switch-track',
        styles.roundedClass( trackRounded )
    ];

    let switchThumbClasses = [
        'k-switch-thumb',
        styles.roundedClass( thumbRounded )
    ];

    let ariaAttr = aria
        ? {}
        : {};

    if (legacy) {
        return (
            <span className={legacyClasses} {...ariaAttr} {...htmlAttributes}>
                <span className="k-switch-container">
                    <span className="k-switch-label-on">{onLabel}</span>
                    <span className="k-switch-label-off">{offLabel}</span>
                    <span className="k-switch-handle"></span>
                </span>
            </span>
        );
    }

    return (
        <span className={switchClasses} {...ariaAttr} {...htmlAttributes}>
            <span className={switchTrackClasses}>
                {onLabel && <span className="k-switch-label-on">{onLabel}</span>}
                {offLabel && <span className="k-switch-label-off">{offLabel}</span>}
            </span>
            <span className="k-switch-thumb-wrap">
                <span className={switchThumbClasses}></span>
            </span>
        </span>
    );
}

SwitchStatic.defaultProps = {
    ...globalDefaultProps,

    checked: false,

    onLabel: '',
    offLabel: '',

    size: 'medium',
    trackRounded: 'pill',
    thumbRounded: 'pill'
};
SwitchStatic.propTypes = {
    checked: typeof false,

    onLabel: typeof '',
    offLabel: typeof '',

    size: typeof [ null, 'small', 'medium', 'large' ],
    trackRounded: typeof [ null, '0', 'small', 'medium', 'large', 'pill', 'circle' ],
    thumbRounded: typeof [ null, '0', 'small', 'medium', 'large', 'pill', 'circle' ],

    hover: typeof false,
    focus: typeof false,
    disabled: typeof false,

    aria: typeof false,
    legacy: typeof false,

    className: typeof '',
    htmlAttributes: typeof []
};

export { Switch, SwitchStatic };
