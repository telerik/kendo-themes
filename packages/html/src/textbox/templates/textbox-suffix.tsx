import Textbox from "../textbox.spec";
import { TextButton } from '../../button/templates/text-button';

export const TextboxSuffix = (props) => (
    <Textbox
        suffix={
            <>
                <TextButton fillMode="clear">Send</TextButton>
            </>
        }
        {...props}
    />
);
