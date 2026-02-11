import MultiSelect from "../multiselect.spec";
import { Chip } from '../../chip/chip.spec';
import { ChipAction } from '../../chip/chip-action';

export const MultiSelectValue = ({ size, rounded, children, ...other }: any) => (
    <>
        <MultiSelect size={size} rounded={rounded} tags={(
            <Chip text={children} actions={ <ChipAction type="remove"/>} size={size} rounded={rounded} />
        )}
        {...other}
        />
    </>
);
