import Textbox from "../maskedtextbox.spec";
import { DropdownList } from "../../dropdownlist";

export const MaskedTextboxPrefix = (props) => (
    <Textbox
        prefix={
            <>
                <DropdownList value="Choose" fillMode="flat" aria-label="Prefix selector" />
            </>
        }
        {...props}
    />
);
