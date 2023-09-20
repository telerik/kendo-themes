import ToolBar from "../toolbar.spec";

export const ToolbarResizable = ({ children, ...other }) => (
    <ToolBar {...other} resizable>
        {children}
    </ToolBar>
);
