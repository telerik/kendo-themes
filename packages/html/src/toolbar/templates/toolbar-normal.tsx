import ToolBar from "../toolbar.spec";

export const ToolbarNormal = ({ children, ...other }) => (
    <ToolBar {...other}>
        {children}
    </ToolBar>
);
