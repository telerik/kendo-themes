import RadioButton from "../radio.spec";

export const RadioButtonLabel = ({ children, id, ...other }: any) => (
    <>
        <RadioButton {...other} id={id} />
        <label className="k-radio-label" htmlFor={id}>{children}</label>
    </>
);