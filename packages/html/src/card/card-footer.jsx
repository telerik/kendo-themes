import { Component, globalDefaultProps } from '../component/index';

class CardFooter extends Component {
    render() {
        return <CardFooterStatic {...this.props} />;
    }
}

function CardFooterStatic(props) {
    const {
        className: ownClassName,

        children,

        aria,

        ...htmlAttributes
    } = props;

    let cardFooterClasses = [
        ownClassName,
        'k-card-footer',
    ];

    let ariaAttr = aria
        ? {}
        : {};


    return (
        <div className={cardFooterClasses} {...ariaAttr} {...htmlAttributes}>
            {children}
        </div>
    );
}

CardFooterStatic.defaultProps = {
    ...globalDefaultProps,

    className: '',
    children: [],
};

CardFooterStatic.propTypes = {
    className: typeof '',
    children: typeof [],

    aria: typeof false,

    htmlAttributes: typeof []
};

export { CardFooter, CardFooterStatic };
