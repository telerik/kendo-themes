import NumericTextbox from "../numerictextbox.spec";
import { DropdownList } from "../../dropdownlist/dropdownlist.spec";

export const NumericTextboxPrefix = (props) => (
    <NumericTextbox
        prefix={
            <>
                <DropdownList fillMode="flat" value="mm"></DropdownList>
            </>
        }
        {...props}
    />
);
