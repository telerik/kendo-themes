import { ButtonGroup } from "../button-group.spec";
import { Button } from "../../button";

export const ButtonGroupDisabled = (props) => (
    <ButtonGroup disabled children={
        <>
            <Button className="k-group-start" disabled {...props}>First</Button>
            <Button disabled {...props}>Middle</Button>
            <Button className="k-group-end" disabled {...props}>Last</Button>
        </>
    } />
);
