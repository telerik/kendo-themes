import Checkbox from "../checkbox.spec";

export const CheckboxWithLabel = ({ children, id, ...other }: any) => (
    <>
        <Checkbox id={id} {...other} />
        <label className={"k-checkbox-label"} htmlFor={id}>{children}</label>
    </>
);

/**
 * @deprecated This template has been renamed to CheckboxWithLabel. Please update your code accordingly.
 */
export const CheckboxLabel = CheckboxWithLabel;
