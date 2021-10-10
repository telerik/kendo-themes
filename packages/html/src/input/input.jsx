import { Component, globalDefaultProps } from '../component';

class Input extends Component {
    render() {
        return <InputStatic {...this.props} />;
    }
}

function InputStatic(props) {

    const {
        className: ownClassName,

        value,
        placeholder,
        autocomplete,

        renderAs,

        aria,
        ...htmlAttributes
    } = props;

    let inputClasses = [
        ownClassName,
        'k-input'
    ];

    let ariaAttr = aria
        ? {}
        : {};

    // console.log( value );

    if (renderAs === 'span') {
        return (
            <span className={inputClasses} {...ariaAttr} {...htmlAttributes}>
                {value !== '' && placeholder}
                {value}
            </span>
        );
    }

    if (renderAs === 'textarea') {
        htmlAttributes.placeholder = placeholder;

        return (
            <textarea className={inputClasses} {...ariaAttr} {...htmlAttributes}>
                {value}
            </textarea>
        );
    }

    htmlAttributes.value = value;
    htmlAttributes.placeholder = placeholder;
    htmlAttributes.autocomplete = autocomplete;

    return (
        <input type="text"
            className={inputClasses}
            {...ariaAttr}
            {...htmlAttributes} />
    );
}

InputStatic.defaultProps = {
    ...globalDefaultProps,

    value: '',
    placeholder: '',
    autocomplete: 'off',

    renderAs: 'input'
};

InputStatic.propTypes = {
    value: typeof '',
    placeholder: typeof '',
    autocomplete: typeof [ 'on', 'off' ],

    renderAs: typeof [ 'input', 'span', 'textarea' ],

    className: typeof '',

    aria: typeof false,
    htmlAttributes: typeof []
};

export { Input, InputStatic };
