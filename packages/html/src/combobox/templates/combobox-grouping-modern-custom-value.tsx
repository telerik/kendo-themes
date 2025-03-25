import { List, ListGroup, ListItem, ListCustomValue } from "../../list";
import Combobox from "../combobox.spec";

export const ComboboxGroupingModernCustomValue = ({ value="Custom value", ...other }: any) => (
    <Combobox value={value}
        opened
        popup={
            <>
                <List customValue={<ListCustomValue text={`Use "${value}"`}/>} >
                    <ListGroup label={"Group 1"} root>
                        <ListItem>List group 1 item 1</ListItem>
                        <ListItem>List group 1 item 2</ListItem>
                        <ListItem>List group 1 item 3</ListItem>
                    </ListGroup>
                    <ListGroup>
                        <ListItem group>Group 2</ListItem>
                        <ListItem>List group 1 item 1</ListItem>
                        <ListItem>List group 1 item 2</ListItem>
                        <ListItem>List group 1 item 3</ListItem>
                    </ListGroup>
                </List>
            </>
        }
        {...other}
    />
);
