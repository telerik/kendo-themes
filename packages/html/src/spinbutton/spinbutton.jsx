import { Component, globalDefaultProps } from '../component';
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
            <ButtonStatic className="k-spinner-increase k-numeric-increase" icon="arrow-n" />
            <ButtonStatic className="k-spinner-decrease k-numeric-decrease" icon="arrow-s" />
        </span>
    );
}

SpinButtonStatic.defaultProps = {
    ...globalDefaultProps
};

SpinButtonStatic.propTypes = {
    className: typeof '',

    aria: typeof false,
    legacy: typeof false,

    htmlAttributes: typeof []
};

export { SpinButton, SpinButtonStatic };
