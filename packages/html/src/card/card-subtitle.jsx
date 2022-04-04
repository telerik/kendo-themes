import { Component, globalDefaultProps } from '../component/index';

class CardSubtitle extends Component {
    render() {
        return <CardSubtitleStatic {...this.props} />;
    }
}

function CardSubtitleStatic(props) {
    const {
        className: ownClassName,

        children,

        aria,

        ...htmlAttributes
    } = props;

    let cardSubtitleClasses = [
        ownClassName,
        'k-card-subtitle',
    ];

    let ariaAttr = aria
        ? {}
        : {};


    return (
        <div className={cardSubtitleClasses} {...ariaAttr} {...htmlAttributes}>
            {children}
        </div>
    );
}

CardSubtitleStatic.defaultProps = {
    ...globalDefaultProps,

    className: '',
    children: [],
};

CardSubtitleStatic.propTypes = {
    className: typeof '',
    children: typeof [],

    aria: typeof false,

    htmlAttributes: typeof []
};

export { CardSubtitle, CardSubtitleStatic };
