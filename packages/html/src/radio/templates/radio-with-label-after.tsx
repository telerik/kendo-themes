import RadioButton from "../radio.spec";

export const RadioButtonWithLabelAfter = ({ children, id, ...other }: any) => (
    <>
        <RadioButton {...other} id={id} />
        <label className="k-radio-label" htmlFor={id}>{children}</label>
    </>
);

/**
 * @deprecated This template has been renamed to RadioButtonWithLabelAfter. Please update your code accordingly.
 */
export const RadioButtonLabel = RadioButtonWithLabelAfter;

export default RadioButtonWithLabelAfter;
