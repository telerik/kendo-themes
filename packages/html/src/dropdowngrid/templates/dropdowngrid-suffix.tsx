import { IconButton } from "../../button";
import DropdownGrid from "../dropdowngrid.spec";
import { nextId } from "../../misc";

export const DropdownGridSuffix = (props) => (
    <DropdownGrid
        id={nextId('ddg')}
        aria-label="Select option"
        suffix={
            <>
                <IconButton icon="copy" fillMode="clear" aria-label="Copy"/>
            </>
        }
        {...props}
    />
);
