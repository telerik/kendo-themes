import { ButtonGroup } from "../button-group.spec";
import { Button } from "../../button";

export const MixedButtonGroup = (props) => (
    <ButtonGroup>
        <Button {...props}>First</Button>
        <Button {...props} icon="star">
      Middle
        </Button>
        <Button {...props} icon="star" />
    </ButtonGroup>
);
