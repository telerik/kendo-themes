import { DropdownList } from '..';
import { List, ListContent, ListItem, ListOptionLabel } from '../../list';


const styles = `
    #test-area {
        max-width: 660px;
    }

    .k-animation-container {
        position: relative;
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
                            <ListContent>
                                <ListItem>List item</ListItem>
                                <ListItem>List item</ListItem>
                                <ListItem>List item</ListItem>
                            </ListContent>
                        </List>
                    )}
                />
            </section>

            <span>Hover</span>

            <section>
                <DropdownList value="-Select item-" opened focus
                    popup={(
                        <List optionLabel={<ListOptionLabel text="-Select item-" hover />}>
                            <ListContent>
                                <ListItem>List item</ListItem>
                                <ListItem>List item</ListItem>
                                <ListItem>List item</ListItem>
                            </ListContent>
                        </List>
                    )}
                />
            </section>

            <span>Focus</span>

            <section>
                <DropdownList value="-Select item-" opened focus
                    popup={(
                        <List optionLabel={<ListOptionLabel text="-Select item-" focus />}>
                            <ListContent>
                                <ListItem>List item</ListItem>
                                <ListItem>List item</ListItem>
                                <ListItem>List item</ListItem>
                            </ListContent>
                        </List>
                    )}
                />
            </section>

            <span>Selected</span>

            <section>
                <DropdownList value="-Select item-" opened focus
                    popup={(
                        <List optionLabel={<ListOptionLabel text="-Select item-" selected />}>
                            <ListContent>
                                <ListItem>List item</ListItem>
                                <ListItem>List item</ListItem>
                                <ListItem>List item</ListItem>
                            </ListContent>
                        </List>
                    )}
                />
            </section>

            <span>Disabled</span>

            <section>
                <DropdownList value="-Select item-" opened focus
                    popup={(
                        <List optionLabel={<ListOptionLabel text="-Select item-" disabled />}>
                            <ListContent>
                                <ListItem>List item</ListItem>
                                <ListItem>List item</ListItem>
                                <ListItem>List item</ListItem>
                            </ListContent>
                        </List>
                    )}
                />
            </section>

        </div>
    </>
);
