import { Button } from "../../button";
import { ButtonGroup } from "../button-group.spec";

export const DisabledButtonGroup = (props: React.HTMLAttributes<HTMLDivElement>) => (
    <ButtonGroup disabled {...props}>
        <Button className="k-group-start" disabled>Previous</Button>
        <Button disabled>Today</Button>
        <Button className="k-group-end" disabled>Next</Button>
    </ButtonGroup>
);
