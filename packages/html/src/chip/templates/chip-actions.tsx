import Chip from "../chip.spec";
import { ChipAction } from "../chip-action";

export const ChipActions = (props: any) =>
    <Chip
        text="All actions"
        actions={
            <>
                <ChipAction type="more" />
                <ChipAction type="remove" />
            </>
        }
        {...props}
    />;
