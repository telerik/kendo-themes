import { IconButton } from '../../button/templates/icon-button';
import DropdownGrid from '../dropdowngrid.spec';

export const DropdownGridSuffix = (props) => (
    <DropdownGrid
        suffix={
            <>
                <IconButton icon="copy" fillMode="clear"/>
            </>
        }
        {...props}
    />
);
