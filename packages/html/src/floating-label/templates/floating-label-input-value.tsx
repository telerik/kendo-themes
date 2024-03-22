import FloatingLabel from "../floating-label.spec";
import { Textbox } from '../../textbox';

export const FloatingLabelInputValue = (props) => (
    <FloatingLabel
        label="Label"
        children={
            <Textbox showClearButton={false} value="Value"/>
        }
        {...props}
    >
    </FloatingLabel>
);
