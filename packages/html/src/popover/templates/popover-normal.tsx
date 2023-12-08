import Popover from "../popover.spec";

export const PopoverNormal = (props) => (
    <Popover {...props}>
        {props.children}
    </Popover>
);
