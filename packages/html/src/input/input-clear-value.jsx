import { IconStatic } from '../icon/index';

function InputClearValueStatic(inputProps) {

    const {
        value,

        showClearButton,

        readonly,
        loading,
        disabled,

        aria
    } = inputProps;

    if (disabled || readonly || loading || !showClearButton || value === '' ) {
        return <></>;
    }

    let ariaAttr = aria
        ? {}
        : {};

    return (
        <span className="k-clear-value" {...ariaAttr}><IconStatic name="x" /></span>
    );

}

export { InputClearValueStatic };
