import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { List, ListItem } from '../../list';
import { ListBox, ListBoxActions } from '../../listbox';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    #test-area {
        max-width: 660px;
    }
    .k-listbox {
        width: 100%;
        height: auto;
        align-items: flex-start;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>Listbox</span>
            <span>Listbox RTL</span>

            <section>
                <ListBox>
                    <ListBoxActions>
                        <Button icon="arrow-n"></Button>
                        <Button icon="arrow-s"></Button>
                        <Button icon="arrow-w"></Button>
                        <Button icon="arrow-e"></Button>
                    </ListBoxActions>
                    <List>
                        <ListItem>Item</ListItem>
                        <ListItem hover>Hover</ListItem>
                        <ListItem focus>Focus</ListItem>
                        <ListItem selected>Selected</ListItem>
                        <ListItem hover selected>Hover selected</ListItem>
                        <ListItem disabled>Disabled</ListItem>
                    </List>
                </ListBox>
            </section>

            <section dir="rtl">
                <ListBox>
                    <ListBoxActions>
                        <Button icon="arrow-n"></Button>
                        <Button icon="arrow-s"></Button>
                        <Button icon="arrow-w"></Button>
                        <Button icon="arrow-e"></Button>
                    </ListBoxActions>
                    <List>
                        <ListItem>Item</ListItem>
                        <ListItem hover>Hover</ListItem>
                        <ListItem focus>Focus</ListItem>
                        <ListItem selected>Selected</ListItem>
                        <ListItem hover selected>Hover selected</ListItem>
                        <ListItem disabled>Disabled</ListItem>
                    </List>
                </ListBox>
            </section>

            <section>
                <ListBox actionsPosition="right">
                    <ListBoxActions>
                        <Button icon="arrow-n"></Button>
                        <Button icon="arrow-s"></Button>
                        <Button icon="arrow-w"></Button>
                        <Button icon="arrow-e"></Button>
                    </ListBoxActions>
                    <List>
                        <ListItem>Item</ListItem>
                        <ListItem hover>Hover</ListItem>
                        <ListItem focus>Focus</ListItem>
                        <ListItem selected>Selected</ListItem>
                        <ListItem hover selected>Hover selected</ListItem>
                        <ListItem disabled>Disabled</ListItem>
                    </List>
                </ListBox>
            </section>

            <section dir="rtl">
                <ListBox actionsPosition="right">
                    <ListBoxActions>
                        <Button icon="arrow-n"></Button>
                        <Button icon="arrow-s"></Button>
                        <Button icon="arrow-w"></Button>
                        <Button icon="arrow-e"></Button>
                    </ListBoxActions>
                    <List>
                        <ListItem>Item</ListItem>
                        <ListItem hover>Hover</ListItem>
                        <ListItem focus>Focus</ListItem>
                        <ListItem selected>Selected</ListItem>
                        <ListItem hover selected>Hover selected</ListItem>
                        <ListItem disabled>Disabled</ListItem>
                    </List>
                </ListBox>
            </section>

            <section>
                <ListBox actionsPosition="top">
                    <ListBoxActions>
                        <Button icon="arrow-n"></Button>
                        <Button icon="arrow-s"></Button>
                        <Button icon="arrow-w"></Button>
                        <Button icon="arrow-e"></Button>
                    </ListBoxActions>
                    <List>
                        <ListItem>Item</ListItem>
                        <ListItem hover>Hover</ListItem>
                        <ListItem focus>Focus</ListItem>
                        <ListItem selected>Selected</ListItem>
                        <ListItem hover selected>Hover selected</ListItem>
                        <ListItem disabled>Disabled</ListItem>
                    </List>
                </ListBox>
            </section>

            <section dir="rtl">
                <ListBox actionsPosition="top">
                    <ListBoxActions>
                        <Button icon="arrow-n"></Button>
                        <Button icon="arrow-s"></Button>
                        <Button icon="arrow-e"></Button>
                        <Button icon="arrow-w"></Button>
                    </ListBoxActions>
                    <List>
                        <ListItem>Item</ListItem>
                        <ListItem hover>Hover</ListItem>
                        <ListItem focus>Focus</ListItem>
                        <ListItem selected>Selected</ListItem>
                        <ListItem hover selected>Hover selected</ListItem>
                        <ListItem disabled>Disabled</ListItem>
                    </List>
                </ListBox>
            </section>

            <section>
                <ListBox actionsPosition="bottom">
                    <ListBoxActions>
                        <Button icon="arrow-n"></Button>
                        <Button icon="arrow-s"></Button>
                        <Button icon="arrow-w"></Button>
                        <Button icon="arrow-e"></Button>
                    </ListBoxActions>
                    <List>
                        <ListItem>Item</ListItem>
                        <ListItem hover>Hover</ListItem>
                        <ListItem focus>Focus</ListItem>
                        <ListItem selected>Selected</ListItem>
                        <ListItem hover selected>Hover selected</ListItem>
                        <ListItem disabled>Disabled</ListItem>
                    </List>
                </ListBox>
            </section>

            <section dir="rtl">
                <ListBox actionsPosition="bottom">
                    <ListBoxActions>
                        <Button icon="arrow-n"></Button>
                        <Button icon="arrow-s"></Button>
                        <Button icon="arrow-e"></Button>
                        <Button icon="arrow-w"></Button>
                    </ListBoxActions>
                    <List>
                        <ListItem>Item</ListItem>
                        <ListItem hover>Hover</ListItem>
                        <ListItem focus>Focus</ListItem>
                        <ListItem selected>Selected</ListItem>
                        <ListItem hover selected>Hover selected</ListItem>
                        <ListItem disabled>Disabled</ListItem>
                    </List>
                </ListBox>
            </section>


        </div>
    </>
);
