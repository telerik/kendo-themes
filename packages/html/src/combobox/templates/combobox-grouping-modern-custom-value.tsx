import { List, ListItem, ListGroupItem, ListCustomValue, ListContent, ListUl } from "../../list";
import { nextId } from "../../misc";
import Combobox from "../combobox.spec";

export const ComboboxGroupingModernCustomValue = ({ value="Custom value", ...other }: any) => {
    const group1Id = nextId('combobox-gcv-group');
    const group2Id = nextId('combobox-gcv-group');

    return (
        <Combobox value={value}
            id="combobox-gcv"
            opened
            popup={
                <>
                    <List header="Group 1" customValue={<ListCustomValue text={`Use "${value}"`}/>} >
                        <ListContent grouping listboxId="combobox-gcv-listbox" aria-label="Options">
                            <ListUl role="group" aria-labelledby={group1Id}>
                                <ListItem id={nextId('combobox-gcv-item')}>List group 1 item 1</ListItem>
                                <ListItem id={nextId('combobox-gcv-item')}>List group 1 item 2</ListItem>
                                <ListItem id={nextId('combobox-gcv-item')}>List group 1 item 3</ListItem>
                            </ListUl>
                            <ListUl role="group" aria-labelledby={group2Id}>
                                <ListGroupItem id={group2Id}>Group 2</ListGroupItem>
                                <ListItem id={nextId('combobox-gcv-item')}>List group 1 item 1</ListItem>
                                <ListItem id={nextId('combobox-gcv-item')}>List group 1 item 2</ListItem>
                                <ListItem id={nextId('combobox-gcv-item')}>List group 1 item 3</ListItem>
                            </ListUl>
                        </ListContent>
                    </List>
                </>
            }
            {...other}
        />
    );
};
