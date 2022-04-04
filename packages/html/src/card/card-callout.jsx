import * as styles from '../../utils/styles';
import { Component, globalDefaultProps } from '../component/index';

class CardCallout extends Component {
    render() {
        return <CardCalloutStatic {...this.props} />;
    }
}

function CardCalloutStatic(props) {
    const {
        className: ownClassName,
        callout,
    } = props;

    let CardCalloutClasses = [
        ownClassName,
        'k-card-callout',
        styles.calloutClass( callout ),

    ];

    if (callout === null || callout === "true") {
        return <></>;
    }

    return (
        <span className={CardCalloutClasses}></span>
    );
}

CardCalloutStatic.defaultProps = {
    ...globalDefaultProps,

    className: '',

    callout: null,
};

CardCalloutStatic.propTypes = {
    className: typeof '',

    callout: typeof [ null, "true", 'top', 'bottom', 'left', 'right'],
};

export { CardCallout, CardCalloutStatic };
