import { Component, globalDefaultProps } from '../component/index';
import { ButtonStatic } from '../button/index';

class CaptchaImage extends Component {
    render() {
        return <CaptchaImageStatic {...this.props} />;
    }
}

function CaptchaImageStatic(props) {

    const {
        className: ownClassName,

        loading,

        aria,

        ...htmlAttributes

    } = props;


    let ariaAttr = aria
        ? {}
        : {};

    let CaptchaImageClasses = [
        ownClassName,
        'k-captcha-image-wrap',
        'k-hstack'
    ];

    const imgAttributes = {
        className: loading && "k-hidden",
        src: "../../../assets/captcha.jpg",
    };

    const buttonDisabled = loading === true;

    return (
        <div className={CaptchaImageClasses} {...ariaAttr} {...htmlAttributes}>
            <div className="k-captcha-image">
                <img {...imgAttributes} />
                {loading && <span style="width: 100%; height: 100%;" className="k-skeleton k-skeleton-rect"></span>}
            </div>
            <div className="k-captcha-image-controls k-vstack">
                <ButtonStatic icon="volume-up" disabled={buttonDisabled}></ButtonStatic>
                <ButtonStatic icon="reload" disabled={buttonDisabled}></ButtonStatic>
            </div>
            <div className="k-captcha-volume-control k-vstack k-pos-absolute k-hidden">
                <div className="k-widget k-slider k-slider-vertical"></div>
            </div>
        </div>
    );
}

CaptchaImageStatic.defaultProps = {
    ...globalDefaultProps,
    loading: false,
};

CaptchaImageStatic.propTypes = {
    className: typeof '',

    loading: typeof false,

    aria: typeof false,

    htmlAttributes: typeof []
};

export { CaptchaImage, CaptchaImageStatic };
