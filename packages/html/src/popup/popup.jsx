import * as styles from '../../utils/styles';
import { Component, globalDefaultProps } from '../component/index';

class Popup extends Component {
    render() {
        return <PopupStatic {...this.props} />;
    }
}

function PopupStatic(props) {

    const {
        className: ownClassName,

        children,

        size,
        rounded,

        aria,
        legacy,

        ...htmlAttributes
    } = props;

    let PopupClasses = [
        ownClassName,
        'k-popup',
        styles.sizeClass( size, 'k-popup' ),
        styles.roundedClass( rounded )
    ];

    let ariaAttr = aria
        ? {}
        : {};

    if (legacy) {

        let legacyClasses = [
            ownClassName,
            'k-popup'
        ];

        return (
            <div className={legacyClasses} {...htmlAttributes}>
                {children}
            </div>
        );
    }

    return (
        <div className={PopupClasses} {...ariaAttr} {...htmlAttributes}>
            {children}
        </div>
    );
}

PopupStatic.defaultProps = {
    ...globalDefaultProps,

    children: [],

    size: 'medium',
    rounded: 'medium'
};

PopupStatic.propTypes = {
    children: typeof [],
    className: typeof '',

    size: typeof [ null, 'small', 'medium', 'large' ],
    rounded: typeof [ null, 'small', 'medium', 'large', 'pill' ],

    aria: typeof false,
    legacy: typeof false,

    htmlAttributes: typeof []
};

export { Popup, PopupStatic };
