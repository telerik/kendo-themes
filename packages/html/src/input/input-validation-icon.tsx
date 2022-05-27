import { IconStatic } from '../icon/index';

function InputValidationIconStatic(inputProps) {

    const {
        showValidationIcon,

        valid,
        invalid,
        loading,
        disabled,

        aria
    } = inputProps;

    if (disabled || loading || !showValidationIcon ) {
        return <></>;
    }

    let iconName = invalid ? 'warning' : 'check';
    let renderValidationIcon = Boolean( valid || invalid );

    let ariaAttr = aria
        ? {}
        : {};

    if (renderValidationIcon === false) {
        return <></>;
    }

    return (
        <IconStatic name={iconName} className="k-input-validation-icon" {...ariaAttr} />
    );

}

export { InputValidationIconStatic };
