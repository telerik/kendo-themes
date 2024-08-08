import { ButtonGroup } from "../button-group.spec";
import { Button } from "../../button";

export const MixedButtonGroup = (props) => (
    <ButtonGroup children={
        <>
            <Button className="k-group-start" {...props}>First</Button>
            <Button {...props} icon="star">Middle</Button>
            <Button className="k-group-end" {...props} icon="star" />
        </>
    } />
);

export default MixedButtonGroup;
