import { List, ListItem, ListGroupItem, ListCustomValue, ListContent, ListUl } from "../../list";
import MultiSelect from "../multiselect.spec";

export const MultiSelectGroupingCustomValue = ({ value="Custom value", ...other }: any) => (
    <MultiSelect  value={value}
        opened
        popup={
            <List header="Group 1" customValue={<ListCustomValue text={`Use "${value}"`}/>}>
                <ListContent grouping>
                    <ListUl>
                        <ListItem>List group 1 item 1</ListItem>
                        <ListItem>List group 1 item 2</ListItem>
                    </ListUl>
                    <ListUl>
                        <ListGroupItem>Group 2</ListGroupItem>
                        <ListItem>List group 1 item 1</ListItem>
                        <ListItem>List group 1 item 2</ListItem>
                    </ListUl>
                </ListContent>
            </List>
        }
        {...other}
    />
);
