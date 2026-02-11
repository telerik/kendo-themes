import Textarea from "../textarea.spec";
import { Icon } from "../../icon/icon.spec";

export const TextareaPrefix = (props) => (
    <Textarea
        prefix={
            <>
                <Icon icon="comment"/>
            </>
        }
        {...props}
    />
);
