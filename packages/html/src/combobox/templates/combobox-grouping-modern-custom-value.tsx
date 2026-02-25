import { List, ListItem, ListGroupItem, ListCustomValue, ListContent, ListUl } from "../../list";
import Combobox from "../combobox.spec";

export const ComboboxGroupingModernCustomValue = ({ value="Custom value", ...other }: any) => (
    <Combobox value={value}
        id="combobox-gcv"
        opened
        popup={
            <>
                <List header="Group 1" customValue={<ListCustomValue text={`Use "${value}"`}/>} >
                    <ListContent grouping listboxId="combobox-gcv-listbox" aria-label="Options">
                        <ListUl role="group" aria-labelledby="combobox-gcv-group-1">
                            <ListItem id="combobox-gcv-item-0">List group 1 item 1</ListItem>
                            <ListItem id="combobox-gcv-item-1">List group 1 item 2</ListItem>
                            <ListItem id="combobox-gcv-item-2">List group 1 item 3</ListItem>
                        </ListUl>
                        <ListUl role="group" aria-labelledby="combobox-gcv-group-2">
                            <ListGroupItem id="combobox-gcv-group-2">Group 2</ListGroupItem>
                            <ListItem id="combobox-gcv-item-3">List group 1 item 1</ListItem>
                            <ListItem id="combobox-gcv-item-4">List group 1 item 2</ListItem>
                            <ListItem id="combobox-gcv-item-5">List group 1 item 3</ListItem>
                        </ListUl>
                    </ListContent>
                </List>
            </>
        }
        {...other}
    />
);
