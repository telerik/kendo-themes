import Textbox from "../textbox.spec";
import { Icon } from '../../icon';

export const TextboxPrefix = (props) => (
    <Textbox
        prefix={
            <>
                <Icon icon="envelop" />
            </>
        }
        {...props}
    />
);
