import MultiSelect from "../multiselect.spec";
import { nextId } from "../../misc";
import { Chip, ChipAction } from '../../chip';

export const MultiSelectValue = ({ size, rounded, children = "Tag", ...other }: any) => (
    <>
        <MultiSelect id={nextId('ms')} aria-label="Select options" size={size} rounded={rounded} tags={(
            <Chip text={children} actions={ <ChipAction type="remove"/>} size={size} rounded={rounded} role="option" selected />
        )}
        {...other}
        />
    </>
);
