import Textbox from "../textbox.spec";
import { Icon } from '../../icon/icon.spec';

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
