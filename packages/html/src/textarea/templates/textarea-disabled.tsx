import Textarea from "../textarea.spec";

export const TextareaDisabled = (props) => (
    <Textarea aria-label={props['aria-label'] || "Disabled textarea"} {...props} disabled />
);
