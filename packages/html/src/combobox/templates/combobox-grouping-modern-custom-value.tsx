import { List, ListItem, ListGroupItem, ListCustomValue, ListContent, ListUl } from "../../list";
import Combobox from "../combobox.spec";

export const ComboboxGroupingModernCustomValue = ({ value="Custom value", ...other }: any) => (
    <Combobox value={value}
        opened
        popup={
            <>
                <List header="Group 1" customValue={<ListCustomValue text={`Use "${value}"`}/>} >
                    <ListContent grouping>
                        <ListUl>
                            <ListItem>List group 1 item 1</ListItem>
                            <ListItem>List group 1 item 2</ListItem>
                            <ListItem>List group 1 item 3</ListItem>
                        </ListUl>
                        <ListUl>
                            <ListGroupItem>Group 2</ListGroupItem>
                            <ListItem>List group 1 item 1</ListItem>
                            <ListItem>List group 1 item 2</ListItem>
                            <ListItem>List group 1 item 3</ListItem>
                        </ListUl>
                    </ListContent>
                </List>
            </>
        }
        {...other}
    />
);
