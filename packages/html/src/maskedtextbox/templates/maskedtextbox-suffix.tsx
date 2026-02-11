import Textbox from "../maskedtextbox.spec";
import { Icon } from '../../icon/icon.spec';

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
