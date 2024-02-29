import { ListBox } from "..";
import { ListItem } from '../../list';

export const ListBoxNormal = (props) => (
    <ListBox
        actions={[ 'up', 'down', 'left', 'right', 'to', 'from', 'x' ]}
        children={
            [
                <ListItem key="ListItem1" >List item 1</ListItem>,
                <ListItem key="ListItem2" >List item 2</ListItem>,
                <ListItem key="ListItem3" >List item 3</ListItem>,
                <ListItem key="ListItem4" >List item 4</ListItem>,
                <ListItem key="ListItem5" >List item 5</ListItem>,
                <ListItem key="ListItem6" >List item 6</ListItem>
            ]
        }
        {...props}
    />
);
