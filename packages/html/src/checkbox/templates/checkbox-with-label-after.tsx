import Checkbox from "../checkbox.spec";

export const CheckboxWithLabelAfter = ({ children = "Label", id = "cb-label-after", ...other }: any) => (
    <>
        <Checkbox id={id} {...other} />
        <label className={"k-checkbox-label"} htmlFor={id}>{children}</label>
    </>
);
