import { Component, globalDefaultProps } from '../component/index';

class FloatingLabel extends Component {
    render() {
        return <FloatingLabelStatic {...this.props} />;
    }
}

function FloatingLabelStatic(props) {

    const {
        className: ownClassName,

        children,

        label,

        focus,
        valid,
        invalid,
        empty,
        disabled,

        aria,

        ...htmlAttributes
    } = props;


    htmlAttributes.empty = empty;


    let ariaAttr = aria
        ? {}
        : {};

    let floatingLabelClasses = [
        ownClassName,
        'k-floating-label-container',
        {
            'k-focus': focus === true,
            'k-valid': valid === true,
            'k-invalid': invalid === true,
            'k-empty': empty === true,
            'k-disabled': disabled === true,
        }
    ];

    return (
        <span className={floatingLabelClasses} {...ariaAttr} {...htmlAttributes} >
            <>{children}</>
            { label && <label className="k-label">{label}</label> }
        </span>
    );
}

FloatingLabelStatic.defaultProps = {
    ...globalDefaultProps,
};

FloatingLabelStatic.propTypes = {
    className: typeof '',
    children: typeof [],

    label: typeof '',

    focus: typeof false,
    valid: typeof false,
    invalid: typeof false,
    empty: typeof false,
    disabled: typeof false,

    aria: typeof false,

    htmlAttributes: typeof []
};

export { FloatingLabel, FloatingLabelStatic };
