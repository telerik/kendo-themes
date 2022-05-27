import { Component, globalDefaultProps } from '../component/index';
import { CaptchaImageStatic } from '../captcha/index';
import { TextboxStatic } from '../textbox/index';

class Captcha extends Component {
    render() {
        return <CaptchaStatic {...this.props} />;
    }
}

function CaptchaStatic(props) {

    const {
        className: ownClassName,

        loading,
        value,

        valid,
        invalid,
        disabled,

        aria,

        ...htmlAttributes

    } = props;

    htmlAttributes.disabled = disabled;

    let ariaAttr = aria
        ? {}
        : {};

    let captchaClasses = [
        ownClassName,
        'k-captcha',
        {
            'k-captcha-loading': loading === true,
            'k-disabled': disabled === true,
        }
    ];

    const textBoxAttributes = {
        value,
        showClearButton: false,
        invalid,
        disabled: loading === true
    };


    return (
        <div className={captchaClasses} {...ariaAttr} {...htmlAttributes}>
            <CaptchaImageStatic loading={loading}></CaptchaImageStatic>

            <div className="k-captcha-input k-vstack">
                <TextboxStatic {...textBoxAttributes}></TextboxStatic>
                {valid && !loading && <span className="k-captcha-validation-message k-text-success">Verification Success</span>}
            </div>
        </div>
    );
}

CaptchaStatic.defaultProps = {
    ...globalDefaultProps,
    loading: false,
    value: '',
};

CaptchaStatic.propTypes = {
    className: typeof '',

    loading: typeof false,
    value: typeof '',

    valid: typeof false,
    invalid: typeof false,
    disabled: typeof false,

    aria: typeof false,

    htmlAttributes: typeof []
};

export { Captcha, CaptchaStatic };
