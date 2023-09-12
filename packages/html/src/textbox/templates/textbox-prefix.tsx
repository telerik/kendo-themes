import Textbox from "../textbox.spec";
import { InputSeparator } from "../../input";
import { Icon } from '../../icon';
import { IconButton } from '../../button';

export const TextboxPrefix = (props) => (
    <Textbox
        placeholder="prefix..."
        prefix={
            <>
                <Icon icon="bell" />
                <IconButton fillMode={'clear'} icon="calendar"></IconButton>
                <InputSeparator></InputSeparator>
            </>
        }
        {...props}
    />
);
