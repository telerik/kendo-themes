import { ButtonGroup } from "../button-group.spec";
import { Button } from "../../button";

export const ButtonGroupSelected = (props) => (
    <ButtonGroup children={
        <>
            <Button className="k-group-start" aria-pressed="false" {...props}>First</Button>
            <Button selected aria-pressed="true" {...props}>Middle</Button>
            <Button className="k-group-end" aria-pressed="false" {...props}>Last</Button>
        </>
    } />
);
