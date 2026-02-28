import MultiSelectTree from "../multiselecttree.spec";
import { Chip, ChipAction } from '../../chip';

export const MultiSelectTreeValue = ({ size, rounded, children = "Tag", ...other }: any) => (
    <>
        <MultiSelectTree id="mst-value" aria-label="Select options" size={size} rounded={rounded} tags={(
            <Chip text={children} actions={ <ChipAction type="remove"/>} size={size} rounded={rounded} role="option" selected />
        )}
        {...other}
        />
    </>
);
