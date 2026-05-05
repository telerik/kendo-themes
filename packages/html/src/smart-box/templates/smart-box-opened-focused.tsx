import { List, ListContent, ListItem } from "../../list";
import { nextId } from "../../misc";
import { SmartBox, SmartBoxSendButton }  from "../";
import { Icon } from '../../icon';
import { IconButton } from '../../button';

export const SmartBoxOpenedFocused = (props) => {
    const listboxId = nextId('sb-listbox');
    const item1Id = nextId('sb-item');
    const item2Id = nextId('sb-item');

    return (
        <SmartBox
            opened
            focus
            separators={false}
            inputAriaLabel="AI-powered search"
            inputAriaControls={listboxId}
            inputAriaAutocomplete="list"
            inputAriaActiveDescendant={item1Id}
            prefix={
                <>
                    <Icon icon="sparkles" className="k-accent-icon" aria-hidden="true" />
                </>
            }
            suffix={
                <>
                    <IconButton icon="microphone" fillMode="clear" rounded="full" size="small" aria-label="Start voice input" />
                    <SmartBoxSendButton />
                </>
            }
            popup={
                <>
                    <List>
                        <ListContent listboxId={listboxId} aria-label="Suggestions">
                            <ListItem id={item1Id} focus>List item 1</ListItem>
                            <ListItem id={item2Id}>List item 2</ListItem>
                        </ListContent>
                    </List>
                </>
            }
            {...props}
        />
    );
};
