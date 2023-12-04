import Popover from "../popover.spec";

export const PopoverNormal = ({ children, ...other }) => (
    <Popover {...other}>
        {children}
    </Popover>
);
