import Chip from "../chip.spec";
import { ChipAction } from "../chip-action";

export const ChipRemovable = (props: any) => <Chip text="Removable" {...props} actions={ <ChipAction type="remove" />} />;
