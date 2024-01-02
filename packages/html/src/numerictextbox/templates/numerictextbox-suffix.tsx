import NumericTextbox from "../numerictextbox.spec";
import { InputSuffixText } from "../../input";

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
