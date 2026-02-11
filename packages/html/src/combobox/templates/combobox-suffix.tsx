import Combobox from "../combobox.spec";
import { IconButton } from '../../button/templates/icon-button';

export const ComboboxSuffix = (props) => (
    <Combobox
        suffix={
            <>
                <IconButton icon="copy" fillMode="clear"/>
            </>
        }
        {...props}
    />
);
