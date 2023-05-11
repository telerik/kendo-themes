import { ButtonGroup } from "../button-group.spec";
import { Button } from "../../button";

export const TextButtonGroup = (props) => (
    <ButtonGroup>
        <Button {...props}>First</Button>
        <Button {...props}>Middle</Button>
        <Button {...props}>Last</Button>
    </ButtonGroup>
);
