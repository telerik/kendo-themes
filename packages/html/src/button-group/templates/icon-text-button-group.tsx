import { ButtonGroup } from "../button-group.spec";
import { Button } from "../../button";

export const IconTextButtonGroup = (props) => (
    <ButtonGroup children={
        <>
            <Button className="k-group-start" {...props} icon="star">First</Button>
            <Button {...props} icon="star">Middle</Button>
            <Button className="k-group-end" {...props} icon="star">Last</Button>
        </>
    } />
);

export default IconTextButtonGroup;
