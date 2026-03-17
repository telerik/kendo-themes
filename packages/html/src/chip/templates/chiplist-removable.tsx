import { ChipList } from "../chip-list.spec";
import { ChipRemovable } from "./chip-removable";

export const ChipListRemovable = (props: any) => (
    <ChipList {...props}>
        <ChipRemovable role="option" aria-selected="false" aria-keyshortcuts="Enter Delete" />
        <ChipRemovable role="option" aria-selected="false" aria-keyshortcuts="Enter Delete" />
        <ChipRemovable role="option" aria-selected="false" aria-keyshortcuts="Enter Delete" />
    </ChipList>
);
