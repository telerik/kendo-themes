import { ListBox } from "..";
import { nextId } from '../../misc';
import { ListItem } from '../../list';

export const ListBoxNormal = (props) => {
    const lbId = nextId('listbox');
    const item1Id = nextId('lb-item');
    const item2Id = nextId('lb-item');
    const item3Id = nextId('lb-item');
    const item4Id = nextId('lb-item');
    const item5Id = nextId('lb-item');
    const item6Id = nextId('lb-item');

    return (
        <ListBox
            id={lbId}
            aria-label="Available items"
            actions={[ 'up', 'down', 'left', 'right', 'to', 'from', 'x' ]}
            children={
                [
                    <ListItem key="ListItem1" id={item1Id} focus>List item 1</ListItem>,
                    <ListItem key="ListItem2" id={item2Id} selected>List item 2</ListItem>,
                    <ListItem key="ListItem3" id={item3Id}>List item 3</ListItem>,
                    <ListItem key="ListItem4" id={item4Id}>List item 4</ListItem>,
                    <ListItem key="ListItem5" id={item5Id}>List item 5</ListItem>,
                    <ListItem key="ListItem6" id={item6Id}>List item 6</ListItem>
                ]
            }
            {...props}
        />
    );
};
