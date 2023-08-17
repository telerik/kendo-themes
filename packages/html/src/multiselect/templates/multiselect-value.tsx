import MultiSelect from "../multiselect.spec";
import { Chip, ChipAction } from '../../chip';

export const MultiSelectValue = ({ size, rounded, children, ...other }: any) => (
    <>
        <MultiSelect size={size} rounded={rounded} tags={(
            <Chip text={children} actions={ <ChipAction type="remove"/>} size={size} rounded={rounded} />
        )}
        {...other}
        />
    </>
);