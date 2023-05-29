import Chip from "../chip.spec";
import { ChipAction } from "../chip-action";

export const ChipRemovable = (props: any) => <Chip {...props} actions={ <ChipAction type="remove"/>} />;
