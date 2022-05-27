import { Component, globalDefaultProps } from '../component/index';

class InputInnerTextarea extends Component {
    render() {
        return <InputInnerTextareaStatic {...this.props} />;
    }
}

function InputInnerTextareaStatic(props) {

    const {
        className: ownClassName,

        value,
        placeholder,

        aria,

        ...htmlAttributes
    } = props;

    let ariaAttr = aria
        ? {}
        : {};

    let inputClasses = [
        ownClassName,
        'k-input-inner'
    ];

    htmlAttributes.value = value;
    htmlAttributes.placeholder = placeholder;

    return (
        <textarea className={inputClasses} {...ariaAttr} {...htmlAttributes}>
            {value}
        </textarea>
    );
}

InputInnerTextareaStatic.defaultProps = {
    ...globalDefaultProps,

    value: '',
    placeholder: ''
};

InputInnerTextareaStatic.propTypes = {
    className: typeof '',

    value: typeof '',
    placeholder: typeof '',

    aria: typeof false,
    legacy: typeof false,

    htmlAttributes: typeof []
};

export { InputInnerTextarea, InputInnerTextareaStatic };
