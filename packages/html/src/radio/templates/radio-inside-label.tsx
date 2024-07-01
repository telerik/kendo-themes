import RadioButton from "../radio.spec";

export const RadioButtonInsideLabel = ({ children, ...other }: any) => (
    <>
        <label className="k-radio-label">
            <RadioButton {...other} />
            {children}
        </label>
    </>
);

export default RadioButtonInsideLabel;
