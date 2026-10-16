import { ButtonGroup } from "../button-group.spec";
import { Button } from "../../button";

export const EndIconTextButtonGroup = (props) => (
    <ButtonGroup children={
        <>
            <Button className="k-group-start" {...props} endIcon="star">First</Button>
            <Button {...props} endIcon="star">Middle</Button>
            <Button className="k-group-end" {...props} endIcon="star">Last</Button>
        </>
    } />
);
