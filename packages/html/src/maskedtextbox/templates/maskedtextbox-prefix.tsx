import Textbox from "../maskedtextbox.spec";
import { DropdownList } from "../../dropdownlist/dropdownlist.spec";

export const MaskedTextboxPrefix = (props) => (
    <Textbox
        prefix={
            <>
                <DropdownList value="Choose" fillMode="flat" />
            </>
        }
        {...props}
    />
);
