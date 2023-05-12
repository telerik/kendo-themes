import { ButtonGroup } from "../button-group.spec";
import { Button } from "../../button";

export const IconButtonGroup = (props) => (
    <ButtonGroup>
        <Button {...props} icon="star" />
        <Button {...props} icon="star" />
        <Button {...props} icon="star" />
    </ButtonGroup>
);
