import { Combobox } from '..';
import { List, ListItem } from '../../list';


const styles = `
    #test-area {
        max-width: 660px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>ComboBox</span>
            <span>ComboBox RTL</span>

            <div>
                <Combobox value="Opened" opened
                    popup={(
                        <List>
                            <ListItem>List item</ListItem>
                            <ListItem selected>List item</ListItem>
                            <ListItem>List item</ListItem>
                        </List>
                    )}
                />
            </div>
            <div dir="rtl">
                <Combobox value="Opened" opened
                    popup={(
                        <List>
                            <ListItem>List item</ListItem>
                            <ListItem selected>List item</ListItem>
                            <ListItem>List item</ListItem>
                        </List>
                    )}
                />
            </div>

        </div>
    </>
);
