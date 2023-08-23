import Checkbox from "../checkbox.spec";

export const CheckboxLabel = ({ children, id, ...other }: any) => (
    <>
        <Checkbox id={id} {...other} />
        <label className={"k-checkbox-label"} htmlFor={id}>{children}</label>
    </>
);
