import { List, ListContent, ListItem } from "../../list";
import { SmartBox, SmartBoxSendButton }  from "../";
import { Icon } from '../../icon';
import { IconButton } from '../../button';

export const SmartBoxOpenedFocused = (props) => (
    <SmartBox
        opened
        focus
        separators={false}
        inputAriaLabel="AI-powered search"
        inputAriaControls="smart-box-listbox"
        inputAriaAutocomplete="list"
        inputAriaActiveDescendant="smart-box-item-1"
        prefix={
            <>
                <Icon icon="sparkles" className="k-accent-icon" aria-hidden="true" />
            </>
        }
        suffix={
            <>
                <IconButton icon="microphone-outline" fillMode="clear" rounded="full" size="small" aria-label="Start voice input" />
                <SmartBoxSendButton />
            </>
        }
        popup={
            <>
                <List>
                    <ListContent listboxId="smart-box-listbox" aria-label="Suggestions">
                        <ListItem id="smart-box-item-1" focus>List item 1</ListItem>
                        <ListItem id="smart-box-item-2">List item 2</ListItem>
                    </ListContent>
                </List>
            </>
        }
        {...props}
    />
);
