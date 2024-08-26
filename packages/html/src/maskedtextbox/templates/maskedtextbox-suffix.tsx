import Textbox from "../maskedtextbox.spec";
import { Icon } from '../../icon';

export const MaskedTextboxSuffix = (props) => (
    <Textbox
        suffix={
            <>
                <Icon icon="lock" />
            </>
        }
        {...props}
    />
);

export default MaskedTextboxSuffix;
