import { Component, globalDefaultProps } from '../component';

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
        legacy,

        ...htmlAttributes
    } = props;

    let ariaAttr = aria
        ? {}
        : {};

    let inputClasses = [
        ownClassName,
        'k-input-inner'
    ];

    let legacyClasses = [
        ownClassName,
        'k-input'
    ];

    htmlAttributes.value = value;
    htmlAttributes.placeholder = placeholder;

    if (legacy) {
        return (
            <textarea className={legacyClasses} {...ariaAttr} {...htmlAttributes}>
                {value}
            </textarea>
        );
    }

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
