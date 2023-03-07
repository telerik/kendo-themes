import React from 'react';
import ReactDOM from 'react-dom/client';
import { Combobox } from '../../combobox';
import { List, ListItem } from '../../list';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    #test-area {
        max-width: 660px;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>ComboBox</span>
            <span>ComboBox RTL</span>

            <div>
                <Combobox placeholder="ComboBox..." />
            </div>
            <div dir="rtl">
                <Combobox placeholder="ComboBox..." />
            </div>

            <div>
                <Combobox value="Normal" />
            </div>
            <div dir="rtl">
                <Combobox value="Normal" />
            </div>

            <div>
                <Combobox value="Hover" hover />
            </div>
            <div dir="rtl">
                <Combobox value="Hover" hover />
            </div>

            <div>
                <Combobox value="Focus" focus />
            </div>
            <div dir="rtl">
                <Combobox value="Focus" focus />
            </div>

            <div>
                <Combobox value="Disabled" disabled />
            </div>
            <div dir="rtl">
                <Combobox value="Disabled" disabled />
            </div>

            <div>
                <Combobox value="Invalid" invalid />
            </div>
            <div dir="rtl">
                <Combobox value="Invalid" invalid />
            </div>

            <div>
                <Combobox value="Invalid Focus" invalid focus />
            </div>
            <div dir="rtl">
                <Combobox value="Invalid Focus" invalid focus />
            </div>

            <div>
                <Combobox value="Loading..." loading />
            </div>
            <div dir="rtl">
                <Combobox value="Loading..." loading />
            </div>

            <div>
                <Combobox value="Opened" opened
                    list={(
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
                    list={(
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
