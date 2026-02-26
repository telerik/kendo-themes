import NumericTextbox from "../numerictextbox.spec";
import { DropdownList } from "../../dropdownlist";

export const NumericTextboxPrefix = (props) => (
    <NumericTextbox
        prefix={
            <>
                <DropdownList fillMode="flat" value="mm" aria-label="Unit selector"></DropdownList>
            </>
        }
        {...props}
    />
);
