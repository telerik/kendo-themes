import Tooltip from "../tooltip.spec";

export const TooltipClosable = (props) => (
    <Tooltip
        content="Closeable tooltip content"
        closable={true}
        {...props}
    />
);