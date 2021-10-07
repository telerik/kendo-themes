import { Component, globalDefaultProps } from '../component';

class InputPrefix extends Component {
    render() {
        return <InputPrefixStatic {...this.props} />;
    }
}

function InputPrefixStatic(props) {

    const {
        className: ownClassName,

        children,

        ...htmlAttributes
    } = props;

    let inputPrefixClasses = [
        ownClassName,
        'k-input-prefix'
    ];

    let childCount = children.childNodes.length;

    if (childCount === 0) {
        return <></>;
    }

    return (
        <span className={inputPrefixClasses} {...htmlAttributes}>
            {children}
        </span>
    );
}

InputPrefixStatic.defaultProps = {
    ...globalDefaultProps,

    children: [],

    className: ''
};

InputPrefixStatic.propTypes = {
    children: typeof [],

    className: typeof '',

    htmlAttributes: typeof []
};

export { InputPrefix, InputPrefixStatic };
