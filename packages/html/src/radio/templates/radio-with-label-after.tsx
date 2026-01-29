import RadioButton from "../radio.spec";

export const RadioButtonWithLabelAfter = ({ children, id, ...other }: any) => {
    const textLabel = typeof children === 'string' || typeof children === 'number' ? String(children) : undefined;
    const ariaLabel = !id ? textLabel : undefined;

    return (
        <>
            <RadioButton {...other} id={id} aria-label={ariaLabel} />
            <label className="k-radio-label" htmlFor={id}>{children}</label>
        </>
    );
};

/**
 * @deprecated This template has been renamed to RadioButtonWithLabelAfter. Please update your code accordingly.
 */
export const RadioButtonLabel = RadioButtonWithLabelAfter;
