import Checkbox from "../checkbox.spec";

export const CheckboxWithLabelBefore = ({ children, id, ...other }: any) => (
    <>
        <label className={"k-checkbox-label"} htmlFor={id}>{children}</label>
        <Checkbox id={id} {...other} />
    </>
);
