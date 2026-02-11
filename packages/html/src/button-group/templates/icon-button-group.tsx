import { ButtonGroup } from "../button-group.spec";
import { Button } from "../../button/button.spec";

export const IconButtonGroup = (props) => (
    <ButtonGroup children={
        <>
            <Button className="k-group-start" {...props} icon="bold" />
            <Button {...props} icon="italic" />
            <Button className="k-group-end" {...props} icon="underline" />
        </>
    } />
);
