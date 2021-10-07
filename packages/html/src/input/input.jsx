import { Component, globalDefaultProps } from '../component';

class Input extends Component {
    render() {
        return <InputStatic {...this.props} />;
    }
}

function InputStatic(props) {

    const {
        className: ownClassName,
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

    className: ''
};

InputStatic.propTypes = {
    value: typeof '',
    placeholder: typeof '',
    autocomplete: typeof [ 'on', 'off' ],

    className: typeof '',

    aria: typeof false,

    htmlAttributes: typeof []
};

export { Input, InputStatic };
