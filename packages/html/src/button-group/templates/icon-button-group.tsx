import { ButtonGroup } from "../button-group.spec";
import { Button } from "../../button";

export const IconButtonGroup = (props) => (
    <ButtonGroup children={
        <>
            <Button className="k-group-start" {...props} icon="bold" aria-label="Bold" />
            <Button {...props} icon="italic" aria-label="Italic" />
            <Button className="k-group-end" {...props} icon="underline" aria-label="Underline" />
        </>
    } />
);
