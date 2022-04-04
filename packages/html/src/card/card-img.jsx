import { Component, globalDefaultProps } from '../component/index';

class CardImage extends Component {
    render() {
        return <CardImageStatic {...this.props} />;
    }
}

function CardImageStatic(props) {
    const {
        className: ownClassName,

        children,

        src,

        aria,

        ...htmlAttributes
    } = props;

    let cardImageClasses = [
        ownClassName,
        'k-card-image',
    ];

    let ariaAttr = aria
        ? {}
        : {};


    return (
        <>
            { Boolean( src ) === true
                ? <img className={cardImageClasses} {...ariaAttr} {...htmlAttributes} src={src} />
                : <span className={cardImageClasses} {...ariaAttr} {...htmlAttributes}> <>{children}</> </span>
            }
        </>

    );
}

CardImageStatic.defaultProps = {
    ...globalDefaultProps,
    children: [],

    className: '',
    src: '',
};

CardImageStatic.propTypes = {
    className: typeof '',
    children: typeof [],

    src: typeof '',
    aria: typeof false,

    htmlAttributes: typeof []
};

export { CardImage, CardImageStatic };
