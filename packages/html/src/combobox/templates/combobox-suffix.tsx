import Combobox from "../combobox.spec";
import { IconButton } from "../../button";

export const ComboboxSuffix = (props) => (
    <Combobox
        suffix={
            <>
                <IconButton icon="copy" fillMode="clear" aria-label="Copy"/>
            </>
        }
        {...props}
    />
);
