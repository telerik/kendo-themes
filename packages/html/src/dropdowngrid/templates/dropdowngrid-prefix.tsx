import DropdownGrid from "../dropdowngrid.spec";
import { Icon } from '../../icon';

export const DropdownGridPrefix = (props) => (
    <DropdownGrid
        prefix={
            <>
                <Icon icon="map-marker-target" />
            </>
        }
        {...props}
    />
);
