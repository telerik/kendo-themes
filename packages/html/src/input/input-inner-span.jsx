import { IconStatic } from '../icon/index';
import { Component, globalDefaultProps } from '../component';

class InputInnerSpan extends Component {
    render() {
        return <InputInnerSpanStatic {...this.props} />;
    }
}

function InputInnerSpanStatic(props) {

    const {
        className: ownClassName,

        value,
        placeholder,

        showValue,
        valueIcon,
        valueIconName,

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

    if (legacy) {

        let legacyClasses = [
            ownClassName,
            'k-input'
        ];

        return (
            <span className={legacyClasses} {...htmlAttributes}>
                {false && valueIcon}
                <IconStatic className="k-value-icon" name={valueIconName} />
                {value === '' && placeholder}
                {showValue && value && <span className="k-value-text">{value}</span>}
            </span>
        );
    }

    return (
        <span className={inputClasses} {...ariaAttr} {...htmlAttributes}>
            {false && valueIcon}
            <IconStatic className="k-value-icon" name={valueIconName} />
            {value === '' && placeholder}
            {showValue && value && <span className="k-value-text">{value}</span>}
        </span>
    );
}

InputInnerSpanStatic.defaultProps = {
    ...globalDefaultProps,

    value: '',
    placeholder: '',

    showValue: true,
    valueIconName: null,
};

InputInnerSpanStatic.propTypes = {
    className: typeof '',

    value: typeof '',
    placeholder: typeof '',

    showValue: typeof true,
    valueIcon: typeof '#fragment',
    valueIconName: typeof '',

    aria: typeof false,
    legacy: typeof false,

    htmlAttributes: typeof []
};

export { InputInnerSpan, InputInnerSpanStatic };
