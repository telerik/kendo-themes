import ToolbarAngular from "../toolbar-angular.spec";

export const ToolbarAngularNormal = ({ children, ...other }) => (
    <ToolbarAngular {...other}>
        {children}
    </ToolbarAngular>
);
