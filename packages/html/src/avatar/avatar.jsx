import * as styles from '../../utils/styles';
import { Component, globalDefaultProps } from '../component';

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
        shape,
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

    let legacyClasses = [
        ownClassName,
        'k-avatar',
        `k-avatar-${themeColor}`,
        styles.sizeClass( size, 'k-avatar' ),
        styles.shapeClass( shape, 'k-avatar' ),
        styles.fillModeClass( fillMode, 'k-avatar' ),
        styles.borderedClass( bordered, 'k-avatar' ),
    ];

    let ariaAttr = aria
        ? {}
        : {};

    if (legacy) {
        return (
            <avatar className={legacyClasses} {...ariaAttr} {...htmlAttributes}>
                <span className={`k-avatar-${type}`}>
                    {children}
                </span>
            </avatar>
        );
    }

    return (
        <avatar className={avatarClasses} {...ariaAttr} {...htmlAttributes}>
            <span className={`k-avatar-${type}`}>
                {children}
            </span>
        </avatar>
    );
}

AvatarStatic.defaultProps = {
    ...globalDefaultProps,

    className: '',
    children: [],

    type: '',

    size: 'medium',
    shape: 'square',
    rounded: 'circle',
    bordered: false,

    fillMode: 'solid',
    themeColor: 'primary'
};

AvatarStatic.propTypes = {
    className: typeof '',
    children: typeof [],

    type: typeof '',

    size: typeof [ 'none', 'small', 'medium', 'large', 'circle' ],
    shape: typeof [ 'none', 'square', 'circle', 'rounded' ],
    rounded: typeof [ 'none', '0', 'small', 'medium', 'large' ],
    bordered: typeof false,

    fillMode: typeof [ 'none', 'solid', 'outline' ],
    themeColor: typeof [ 'none', 'primary' ],

    aria: typeof false,
    legacy: typeof false,

    htmlAttributes: typeof []
};

export { Avatar, AvatarStatic };
