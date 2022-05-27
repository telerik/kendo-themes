import { Component, globalDefaultProps } from '../component/index';

class Typography extends Component {
    render() {
        return <TypographyStatic {...this.props} />;
    }
}

function TypographyStatic(props) {

    const {
        className: ownClassName,

        type,

        children,

        aria,

        ...htmlAttributes
    } = props;

    const typeClass = type === 'p' ? 'paragraph' : type;

    let TypographyClasses = [
        ownClassName,
        type && `k-${typeClass}`,
    ];

    const Component = type === null || type.includes('display') ? 'div' : type;

    let ariaAttr = aria
        ? {}
        : {};


    return (
        <Component className={TypographyClasses} {...ariaAttr} {...htmlAttributes}>
            {children}
        </Component>
    );
}

TypographyStatic.defaultProps = {
    ...globalDefaultProps,

    children: [],
    type: null,
};

TypographyStatic.propTypes = {
    children: typeof [],
    className: typeof '',

    type: typeof [ null, 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'code', 'pre', 'display-1', 'display-2', 'display-3', 'display-4' ],

    aria: typeof false,

    htmlAttributes: typeof []
};

export { Typography, TypographyStatic };
