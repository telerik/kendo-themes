import FloatingLabel from "../floating-label.spec";
import { Textbox } from '../../textbox/textbox.spec';

export const FloatingLabelNormal = (props) => (
    <FloatingLabel
        label="Label"
        empty
        children={
            <Textbox showClearButton={false} />
        }
        {...props}
    >
    </FloatingLabel>
);
