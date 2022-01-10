import * as styles from '../../utils/styles';
import { Component, globalDefaultProps } from '../component/index';

class Avatar extends Component {
    render() {
        return <AvatarStatic {...this.props} />;
    }
}

function AvatarStatic(props) {
    const {
        className: ownClassName,

        children,

        type,

        size,
        rounded,
        bordered,

        fillMode,
        themeColor,

        aria,
        legacy,

        ...htmlAttributes
    } = props;

    let avatarClasses = [
        ownClassName,
        'k-avatar',
        styles.sizeClass( size, 'k-avatar' ),
        styles.roundedClass( rounded ),
        styles.fillModeClass( fillMode, 'k-avatar' ),
        styles.themeColorClass( fillMode, themeColor, 'k-avatar' ),
        styles.borderedClass( bordered, 'k-avatar' ),
    ];

    let ariaAttr = aria
        ? {}
        : {};

    if (legacy) {

        let legacyClasses = [
            ownClassName,
            'k-avatar',
            `k-avatar-${themeColor}`,
            styles.roundedClass( rounded ),
            styles.sizeClass( size, 'k-avatar' ),
            styles.fillModeClass( fillMode, 'k-avatar' ),
            styles.borderedClass( bordered, 'k-avatar' ),
        ];

        return (
            <span className={legacyClasses} {...ariaAttr} {...htmlAttributes}>
                <span className={`k-avatar-${type}`}>
                    {children}
                </span>
            </span>
        );
    }

    return (
        <span className={avatarClasses} {...ariaAttr} {...htmlAttributes}>
            <span className={`k-avatar-${type}`}>
                {children}
            </span>
        </span>
    );
}

AvatarStatic.defaultProps = {
    ...globalDefaultProps,

    className: '',
    children: [],

    type: '',

    size: 'medium',
    rounded: 'full',
    bordered: false,

    fillMode: 'solid',
    themeColor: 'primary'
};

AvatarStatic.propTypes = {
    className: typeof '',
    children: typeof [],

    type: typeof '',

    size: typeof [ null, 'small', 'medium', 'large' ],
    rounded: typeof [ null, 'small', 'medium', 'large', 'full' ],
    bordered: typeof false,

    fillMode: typeof [ null, 'solid', 'outline' ],
    themeColor: typeof [ null, 'primary' ],

    aria: typeof false,
    legacy: typeof false,

    htmlAttributes: typeof []
};

export { Avatar, AvatarStatic };
