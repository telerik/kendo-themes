import RadioButton from "../radio.spec";

export const RadioButtonInvalid = (props: any) => (
    <RadioButton
        invalid
        aria-label={props['aria-label'] || "Invalid radio option"}
        {...props}
    />
);
