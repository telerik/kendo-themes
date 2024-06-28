import Textbox from "../textbox.spec";
import { TextButton } from '../../button';

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

export default TextboxSuffix;
