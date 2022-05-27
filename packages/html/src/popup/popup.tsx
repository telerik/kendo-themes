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
    rounded: typeof [ null, 'small', 'medium', 'large' ],

    aria: typeof false,
    legacy: typeof false,

    htmlAttributes: typeof []
};

export { Popup, PopupStatic };
