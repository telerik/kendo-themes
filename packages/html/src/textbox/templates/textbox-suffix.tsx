import Textbox from "../textbox.spec";
import { InputSuffix, InputSeparator } from "../../input";
import { Icon } from '../../icon';
import { IconButton } from '../../button';

export const TextboxSuffix = (props) => (
    <Textbox
        placeholder="suffix..."
        suffix={
            <InputSuffix>
                <InputSeparator></InputSeparator>
                <IconButton fillMode="clear" icon="calendar"></IconButton>
                <Icon icon="bell" />
            </InputSuffix>
        }
        {...props}
    />
);