import Textarea from "../textarea.spec";
import { IconButton } from '../../button';

export const TextareaSuffix = (props) => (
    <Textarea
        suffix={
            <>
                <IconButton icon="volume-up" fillMode="clear" />
            </>
        }
        {...props}
    />
);
