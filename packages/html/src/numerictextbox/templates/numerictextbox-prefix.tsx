import NumericTextbox from "../numerictextbox.spec";
import { Icon } from "../../icon";

export const NumericTextboxPrefix = (props) => (
    <NumericTextbox
        prefix={
            <>
                <Icon icon="calendar" />
            </>
        }
        {...props}
    />
);
