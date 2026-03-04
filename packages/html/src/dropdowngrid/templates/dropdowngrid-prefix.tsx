import DropdownGrid from "../dropdowngrid.spec";
import { Icon } from '../../icon';
import { nextId } from "../../misc";

export const DropdownGridPrefix = (props) => (
    <DropdownGrid
        id={nextId('ddg')}
        aria-label="Select option"
        prefix={
            <>
                <Icon icon="map-marker-target" />
            </>
        }
        {...props}
    />
);
