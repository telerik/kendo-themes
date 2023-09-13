import Checkbox from "../checkbox.spec";

export const CheckboxWithLabelAfter = ({ children, id, ...other }: any) => (
    <>
        <Checkbox id={id} {...other} />
        <label className={"k-checkbox-label"} htmlFor={id}>{children}</label>
    </>
);

/**
 * @deprecated This template has been renamed to CheckboxWithLabelAfter. Please update your code accordingly.
 */
export const CheckboxLabel = CheckboxWithLabelAfter;
/**
 * @deprecated This template has been renamed to CheckboxWithLabelAfter. Please update your code accordingly.
 */
export const CheckboxWithLabel = CheckboxWithLabelAfter;
