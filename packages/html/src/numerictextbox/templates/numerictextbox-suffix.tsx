import NumericTextbox from "../numerictextbox.spec";
import { InputSuffixText } from "../../input/input-suffix-text";

export const NumericTextboxSuffix = (props) => (
    <NumericTextbox
        suffix={
            <>
                <InputSuffixText>mm</InputSuffixText>
            </>
        }
        {...props}
    />
);
