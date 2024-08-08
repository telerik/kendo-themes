import FloatingLabel from "../floating-label.spec";
import { Textbox } from '../../textbox';

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

export default FloatingLabelNormal;
