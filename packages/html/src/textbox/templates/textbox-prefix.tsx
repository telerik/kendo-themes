import Textbox from "../textbox.spec";
import { InputPrefix, InputSeparator } from "../../input";
import { Icon } from '../../icon';
import { IconButton } from '../../button';

export const TextboxPrefix = (props) => (
    <Textbox
        placeholder="prefix..."
        prefix={
            <InputPrefix>
                <Icon icon="bell" />
                <IconButton fillMode="clear" icon="calendar"></IconButton>
                <InputSeparator></InputSeparator>
            </InputPrefix>
        }
        {...props}
    />
);