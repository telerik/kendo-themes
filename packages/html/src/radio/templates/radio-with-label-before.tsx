import RadioButton from "../radio.spec";

export const RadioButtonWithLabelBefore = ({ children, id, ...other }: any) => (
    <>
        <label className="k-radio-label" htmlFor={id}>{children}</label>
        <RadioButton {...other} id={id} />
    </>
);

export default RadioButtonWithLabelBefore;
