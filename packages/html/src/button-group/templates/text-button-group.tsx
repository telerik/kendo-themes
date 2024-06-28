import { ButtonGroup } from "../button-group.spec";
import { Button } from "../../button";

export const TextButtonGroup = (props) => (
    <ButtonGroup children={
        <>
            <Button className="k-group-start" {...props}>First</Button>
            <Button {...props}>Middle</Button>
            <Button className="k-group-end" {...props}>Last</Button>
        </>
    } />
);

export default TextButtonGroup;
