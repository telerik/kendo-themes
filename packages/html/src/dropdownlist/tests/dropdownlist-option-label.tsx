import { DropdownList } from '..';
import { List, ListItem, ListOptionLabel } from '../../list';


const styles = `
    #test-area {
        max-width: 660px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>Normal</span>

            <section>
                <DropdownList value="-Select item-" opened focus
                    popup={(
                        <List optionLabel={<ListOptionLabel text="-Select item-" />}>
                            <ListItem>List item</ListItem>
                            <ListItem>List item</ListItem>
                            <ListItem>List item</ListItem>
                        </List>
                    )}
                />
            </section>

            <span>Hover</span>

            <section>
                <DropdownList value="-Select item-" opened focus
                    popup={(
                        <List optionLabel={<ListOptionLabel text="-Select item-" hover />}>
                            <ListItem>List item</ListItem>
                            <ListItem>List item</ListItem>
                            <ListItem>List item</ListItem>
                        </List>
                    )}
                />
            </section>

            <span>Focus</span>

            <section>
                <DropdownList value="-Select item-" opened focus
                    popup={(
                        <List optionLabel={<ListOptionLabel text="-Select item-" focus />}>
                            <ListItem>List item</ListItem>
                            <ListItem>List item</ListItem>
                            <ListItem>List item</ListItem>
                        </List>
                    )}
                />
            </section>

            <span>Selected</span>

            <section>
                <DropdownList value="-Select item-" opened focus
                    popup={(
                        <List optionLabel={<ListOptionLabel text="-Select item-" selected />}>
                            <ListItem>List item</ListItem>
                            <ListItem>List item</ListItem>
                            <ListItem>List item</ListItem>
                        </List>
                    )}
                />
            </section>

            <span>Disabled</span>

            <section>
                <DropdownList value="-Select item-" opened focus
                    popup={(
                        <List optionLabel={<ListOptionLabel text="-Select item-" disabled />}>
                            <ListItem>List item</ListItem>
                            <ListItem>List item</ListItem>
                            <ListItem>List item</ListItem>
                        </List>
                    )}
                />
            </section>

        </div>
    </>
);
