import Textbox from "../maskedtextbox.spec";
import { Icon } from "../../icon";

export const MaskedTextboxPrefix = (props) => (
    <Textbox
        prefix={
            <>
                <Icon icon="globe" />
            </>
        }
        {...props}
    />
);
