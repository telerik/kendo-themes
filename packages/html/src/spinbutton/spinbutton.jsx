import { Component, globalDefaultProps } from '../component/index';
import { IconStatic } from '../icon/index';
import { ButtonStatic } from '../button/index';

class SpinButton extends Component {
    render() {
        return <SpinButtonStatic {...this.props} />;
    }
}

function SpinButtonStatic(props) {

    const {
        className: ownClassName,

        size,
        fillMode,

        aria,
        legacy,

        ...htmlAttributes
    } = props;

    let spinButtonClasses = [
        ownClassName,
        'k-spin-button'
    ];

    let ariaAttr = aria
        ? {}
        : {};

    if (legacy) {
        return (
            <span className="k-select">
                <span className="k-link k-link-increase">
                    <IconStatic name="arrow-60-up" />
                </span>
                <span className="k-link k-link-decrease">
                    <IconStatic name="arrow-60-down" />
                </span>
            </span>
        );
    }

    return (
        <span className={spinButtonClasses} {...ariaAttr} {...htmlAttributes}>
            <ButtonStatic className="k-spinner-increase" icon="arrow-n" shape={null} rounded={null} size={size} fillMode={fillMode} />
            <ButtonStatic className="k-spinner-decrease" icon="arrow-s" shape={null} rounded={null} size={size} fillMode={fillMode} />
        </span>
    );
}

SpinButtonStatic.defaultProps = {
    ...globalDefaultProps
};

SpinButtonStatic.propTypes = {
    className: typeof '',

    size: typeof '',
    fillMode: typeof '',

    aria: typeof false,
    legacy: typeof false,

    htmlAttributes: typeof []
};

export { SpinButton, SpinButtonStatic };
