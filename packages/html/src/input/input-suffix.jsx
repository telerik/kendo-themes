import { Component, globalDefaultProps } from '../component';

class InputSuffix extends Component {
    render() {
        return <InputSuffix {...this.props} />;
    }
}

function InputSuffixStatic(props) {

    const {
        className: ownClassName,

        children,

        ...htmlAttributes
    } = props;

    let inputSuffixClasses = [
        ownClassName,
        'k-input-suffix'
    ];

    let childCount = children.childNodes.length;

    if (childCount === 0) {
        return <></>;
    }

    return (
        <span className={inputSuffixClasses} {...htmlAttributes}>
            {children}
        </span>
    );
}

InputSuffixStatic.defaultProps = {
    ...globalDefaultProps,

    children: [],

    className: ''
};

InputSuffixStatic.propTypes = {
    children: typeof [],

    className: typeof '',

    htmlAttributes: typeof []
};

export { InputSuffix, InputSuffixStatic };
