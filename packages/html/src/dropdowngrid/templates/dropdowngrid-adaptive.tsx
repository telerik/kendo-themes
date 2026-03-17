import DropdownGrid from "../dropdowngrid.spec";
import { nextId } from "../../misc";

export const DropdownGridAdaptive = (props) => (
    <DropdownGrid
        id={nextId('ddg')}
        aria-label="Select option"
        adaptive={true}
        adaptiveTitle="DropdownGrid"
        adaptiveSettings={{ id: nextId('ddg-as') }}
        {...props}
    />
);

