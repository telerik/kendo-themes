import NumericTextbox from "../numerictextbox.spec";
import { Button } from "../../button";

export const NumericTextboxPrefix = (props) => (
    <NumericTextbox
        prefix={
            <>
                <Button fillMode="flat" aria-label="Unit">mm</Button>
            </>
        }
        {...props}
    />
);
