import { ListBox } from "..";
import { ListItem } from '../../list';

export const ListBoxNormal = (props) => (
    <ListBox
        actions={[ 'up', 'down', 'left', 'right', 'to', 'from', 'x' ]}
        children={
            [
                <ListItem key="ListItem1" role="option" aria-selected="true" tabIndex={0} focus selected>List item 1</ListItem>,
                <ListItem key="ListItem2" role="option" aria-selected="false" tabIndex={0}>List item 2</ListItem>,
                <ListItem key="ListItem3" role="option" aria-selected="false" tabIndex={0}>List item 3</ListItem>,
                <ListItem key="ListItem4" role="option" aria-selected="false" tabIndex={0}>List item 4</ListItem>,
                <ListItem key="ListItem5" role="option" aria-selected="false" tabIndex={0}>List item 5</ListItem>,
                <ListItem key="ListItem6" role="option" aria-selected="false" tabIndex={0}>List item 6</ListItem>
            ]
        }
        {...props}
    />
);
