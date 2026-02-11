import Combobox from "../combobox.spec";
import { Icon } from '../../icon/icon.spec';

export const ComboboxPrefix = (props) => (
    <Combobox
        prefix={
            <>
                <Icon icon="map-marker-target" />
            </>
        }
        {...props}
    />
);
