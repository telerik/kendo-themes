import Textbox from "../maskedtextbox.spec";
import { Button } from "../../button";

export const MaskedTextboxPrefix = (props) => (
    <Textbox
        prefix={
            <>
                <Button fillMode="flat" aria-label="Prefix action">Choose</Button>
            </>
        }
        {...props}
    />
);
