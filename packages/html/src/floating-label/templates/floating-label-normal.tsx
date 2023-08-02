import FloatingLabel from "../floating-label.spec";

export const FloatingLabelNormal = ({ children, ...other }) => (
    <FloatingLabel {...other}>
        {children}
    </FloatingLabel>
);
