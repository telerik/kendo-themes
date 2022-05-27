import { IconStatic } from '../icon/index';

function InputLoadingIconStatic(inputProps) {

    const {
        showLoadingIcon,

        loading,
        disabled,

        aria
    } = inputProps;

    if (disabled || !showLoadingIcon || !loading) {
        return <></>;
    }

    let ariaAttr = aria
        ? {}
        : {};

    return (
        <IconStatic name="loading" className="k-input-loading-icon" {...ariaAttr} />
    );

}

export { InputLoadingIconStatic };
