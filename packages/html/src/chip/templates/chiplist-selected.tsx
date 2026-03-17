import { ChipList } from "../chip-list.spec";
import Chip from "../chip.spec";

export const ChipListSelected = (props: any) => (
    <ChipList {...props}>
        <Chip role="option" text="Chip 1" selected />
        <Chip role="option" aria-selected="false" text="Chip 2" />
        <Chip role="option" aria-selected="false" text="Chip 3" />
    </ChipList>
);
