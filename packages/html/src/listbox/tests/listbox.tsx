import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { List } from '../../list/list';
import { ListItem } from '../../list/list-item';

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
                <div className="k-widget k-listbox k-listbox-toolbar-left">
                    <div className="k-listbox-toolbar">
                        <ul className="k-reset">
                            <li><Button icon="arrow-n"></Button></li>
                            <li><Button icon="arrow-s"></Button></li>
                            <li><Button icon="arrow-w"></Button></li>
                            <li><Button icon="arrow-e"></Button></li>
                        </ul>
                    </div>
                    <div className="k-list-scroller k-selectable">
                        <List>
                            <ListItem>Item</ListItem>
                            <ListItem hover>Hover</ListItem>
                            <ListItem focus>Focus</ListItem>
                            <ListItem selected>Selected</ListItem>
                            <ListItem hover selected>Hover selected</ListItem>
                            <ListItem disabled>Disabled</ListItem>
                        </List>
                    </div>
                </div>
            </section>

            <section dir="rtl">
                <div className="k-widget k-listbox k-listbox-toolbar-left">
                    <div className="k-listbox-toolbar">
                        <ul className="k-reset">
                            <li><Button icon="arrow-n"></Button></li>
                            <li><Button icon="arrow-s"></Button></li>
                            <li><Button icon="arrow-w"></Button></li>
                            <li><Button icon="arrow-e"></Button></li>
                        </ul>
                    </div>
                    <div className="k-list-scroller k-selectable">
                        <List>
                            <ListItem>Item</ListItem>
                            <ListItem hover>Hover</ListItem>
                            <ListItem focus>Focus</ListItem>
                            <ListItem selected>Selected</ListItem>
                            <ListItem hover selected>Hover selected</ListItem>
                            <ListItem disabled>Disabled</ListItem>
                        </List>
                    </div>
                </div>
            </section>

            <section>
                <div className="k-widget k-listbox k-listbox-toolbar-right">
                    <div className="k-listbox-toolbar">
                        <ul className="k-reset">
                            <li><Button icon="arrow-n"></Button></li>
                            <li><Button icon="arrow-s"></Button></li>
                            <li><Button icon="arrow-w"></Button></li>
                            <li><Button icon="arrow-e"></Button></li>
                        </ul>
                    </div>
                    <div className="k-list-scroller k-selectable">
                        <List>
                            <ListItem>Item</ListItem>
                            <ListItem hover>Hover</ListItem>
                            <ListItem focus>Focus</ListItem>
                            <ListItem selected>Selected</ListItem>
                            <ListItem hover selected>Hover selected</ListItem>
                            <ListItem disabled>Disabled</ListItem>
                        </List>
                    </div>
                </div>
            </section>

            <section dir="rtl">
                <div className="k-widget k-listbox k-listbox-toolbar-right">
                    <div className="k-listbox-toolbar">
                        <ul className="k-reset">
                            <li><Button icon="arrow-n"></Button></li>
                            <li><Button icon="arrow-s"></Button></li>
                            <li><Button icon="arrow-w"></Button></li>
                            <li><Button icon="arrow-e"></Button></li>
                        </ul>
                    </div>
                    <div className="k-list-scroller k-selectable">
                        <List>
                            <ListItem>Item</ListItem>
                            <ListItem hover>Hover</ListItem>
                            <ListItem focus>Focus</ListItem>
                            <ListItem selected>Selected</ListItem>
                            <ListItem hover selected>Hover selected</ListItem>
                            <ListItem disabled>Disabled</ListItem>
                        </List>
                    </div>
                </div>
            </section>

        </div>
    </>
);
