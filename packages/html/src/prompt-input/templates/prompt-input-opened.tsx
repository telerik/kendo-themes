import { List, ListItemNew } from "../../list";
import PromptInput from "../prompt-input";
import { Icon } from '../../icon';
import { IconButton } from '../../button';

export const PromptInputOpened = (props) => (
    <PromptInput
        opened
        popup={
            <>
                <div style={{border: "2px solid red"}}>Segmented control</div>
                <List>
                    <ListItemNew showIcon iconName="gear" description='Long long long description'>List item</ListItemNew>
                    <ListItemNew>List item</ListItemNew>
                    <ListItemNew showIcon iconName="gear">List item</ListItemNew>
                    <ListItemNew description='Long long long description' endContent={
                            <>
                                <IconButton icon="star" />
                                <Icon icon="star" />
                                <IconButton icon="star" />
                            </>
                        }>List item</ListItemNew>
                </List>
            </>
        }
        {...props}
    />
);
