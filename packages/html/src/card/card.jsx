import * as styles from '../../utils/styles';
import { Component, globalDefaultProps } from '../component/index';
import { CardCalloutStatic } from '../card/index';

class Card extends Component {
    render() {
        return <CardStatic {...this.props} />;
    }
}

function CardStatic(props) {
    const {
        className: ownClassName,

        children,

        orientation,
        themeColor,
        callout,

        title,
        subtitle,

        hover,
        focus,
        selected,
        disabled,

        aria,

        ...htmlAttributes
    } = props;

    let cardClasses = [
        ownClassName,
        'k-card',
        themeColor && `k-card-${themeColor}`,
        styles.orientationClass( orientation, 'k-card' ),
        {
            'k-hover': hover === true,
            'k-focus': focus === true,
            'k-selected': selected === true,
            'k-disabled': disabled === true,
            'k-card-with-callout': Boolean( callout ) === true
        }
    ];

    let ariaAttr = aria
        ? {}
        : {};


    return (
        <div className={cardClasses} {...ariaAttr} {...htmlAttributes}>
            <CardCalloutStatic callout={callout} />
            <>{children}</>
        </div>
    );
}

CardStatic.defaultProps = {
    ...globalDefaultProps,

    className: '',
    children: [],

    orientation: null,
    themeColor: null,
    callout: null,

    title: '',
    subtitle: '',

};

CardStatic.propTypes = {
    className: typeof '',
    children: typeof [],

    orientation: [null, 'vertical', 'horizontal'],
    themeColor: typeof [ null, 'primary', 'info', 'success', 'warning', 'error' ],
    callout: typeof [ null, "true", 'top', 'bottom', 'left', 'right'],

    title: typeof '',
    subtitle: typeof '',

    hover: typeof false,
    focus: typeof false,
    selected: typeof false,
    disabled: typeof false,

    aria: typeof false,

    htmlAttributes: typeof []
};

export { Card, CardStatic };
