import RadioButton from "../radio.spec";

export const RadioButtonNormal = (props: any) => (
    <RadioButton
        aria-label={props['aria-label'] || "Radio option"}
        {...props}
    />
);
