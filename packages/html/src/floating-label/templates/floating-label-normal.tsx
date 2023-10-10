import FloatingLabel from "../floating-label.spec";
import { Textbox } from '../../textbox';

export const FloatingLabelNormal = (props) => (
    <FloatingLabel
        label="Label"
        children={[
            <Textbox />
        ]}
        {...props}
    >
    </FloatingLabel>
);
