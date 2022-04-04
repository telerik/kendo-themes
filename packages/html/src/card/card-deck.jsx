import { Component, globalDefaultProps } from '../component/index';

class CardDeck extends Component {
    render() {
        return <CardDeckStatic {...this.props} />;
    }
}

function CardDeckStatic(props) {
    const {
        className: ownClassName,

        children,

        aria,

        ...htmlAttributes
    } = props;

    let CardDeckClasses = [
        ownClassName,
        'k-card-deck',
    ];

    let ariaAttr = aria
        ? {}
        : {};


    return (
        <div className={CardDeckClasses} {...ariaAttr} {...htmlAttributes}>
            {children}
        </div>
    );
}

CardDeckStatic.defaultProps = {
    ...globalDefaultProps,

    className: '',
    children: [],
};

CardDeckStatic.propTypes = {
    className: typeof '',
    children: typeof [],

    aria: typeof false,

    htmlAttributes: typeof []
};

export { CardDeck, CardDeckStatic };
