import { Popover } from "..";
import { ActionButtons } from "../../action-buttons";
import { Button } from "../../button";

export const PopoverNormal = (props) => (
    <Popover
        title="Title"
        body={<>Body content</>}
        children={
            <ActionButtons className="k-popover-actions" alignment="stretched">
                <Button fillMode="flat">Action</Button>
                <Button fillMode="flat" themeColor="primary">Primary</Button>
            </ActionButtons>
        }
        {...props}
    />
);
