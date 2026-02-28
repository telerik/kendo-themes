import { IconButton } from "../../button";
import DropdownGrid from "../dropdowngrid.spec";

export const DropdownGridSuffix = (props) => (
    <DropdownGrid
        id="ddg-suffix"
        aria-label="Select option"
        suffix={
            <>
                <IconButton icon="copy" fillMode="clear" aria-label="Copy"/>
            </>
        }
        {...props}
    />
);
