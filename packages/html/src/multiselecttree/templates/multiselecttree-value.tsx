import MultiSelectTree from "../multiselecttree.spec";
import { Chip, ChipAction } from '../../chip';

export const MultiSelectTreeValue = ({ size, rounded, children, ...other }: any) => (
    <>
        <MultiSelectTree size={size} rounded={rounded} tags={(
            <Chip text={children} actions={ <ChipAction type="remove"/>} size={size} rounded={rounded} />
        )}
        {...other}
        />
    </>
);

export default MultiSelectTreeValue;
