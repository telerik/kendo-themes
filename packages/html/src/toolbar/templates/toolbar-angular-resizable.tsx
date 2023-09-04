import ToolbarAngular from "../toolbar-angular.spec";

export const ToolbarAngularResizable = ({ children, ...other }) => (
    <ToolbarAngular {...other} resizable>
        {children}
    </ToolbarAngular>
);
