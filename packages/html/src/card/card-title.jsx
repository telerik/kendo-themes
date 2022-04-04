import { Component, globalDefaultProps } from '../component/index';

class CardTitle extends Component {
    render() {
        return <CardTitleStatic {...this.props} />;
    }
}

function CardTitleStatic(props) {
    const {
        className: ownClassName,

        children,

        hover,
        focus,

        aria,

        ...htmlAttributes
    } = props;

    let cardTitleClasses = [
        ownClassName,
        'k-card-title',
        {
            'k-hover': hover === true,
            'k-focus': focus === true,
        }
    ];

    let ariaAttr = aria
        ? {}
        : {};


    return (
        <div className={cardTitleClasses} {...ariaAttr} {...htmlAttributes}>
            {children}
        </div>
    );
}

CardTitleStatic.defaultProps = {
    ...globalDefaultProps,

    className: '',
    children: [],
};

CardTitleStatic.propTypes = {
    className: typeof '',
    children: typeof [],

    hover: typeof false,
    focus: typeof false,

    aria: typeof false,

    htmlAttributes: typeof []
};

export { CardTitle, CardTitleStatic };
