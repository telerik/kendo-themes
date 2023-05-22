import { ButtonGroup } from "../button-group.spec";
import { Button } from "../../button";

export const IconTextButtonGroup = (props) => (
    <ButtonGroup>
        <Button {...props} icon="star">
      First
        </Button>
        <Button {...props} icon="star">
      Middle
        </Button>
        <Button {...props} icon="star">
      Last
        </Button>
    </ButtonGroup>
);
