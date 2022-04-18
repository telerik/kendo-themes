import React from 'react';
import ReactDOM from 'react-dom/client';
import { List, ListItem } from '../../list';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const style = `
    .k-virtual-list > .k-item,
    .k-virtual-list .k-list-item {
        position: relative;
    }
`;

root.render(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <span>Static list</span>
            <span>Virtual list</span>
            <span>Static list (rtl)</span>
            <span>Virtual list (rtl)</span>

            <section>
                <List>
                    <ListItem>List item</ListItem>
                    <ListItem hover>Hover</ListItem>
                    <ListItem focus>Focus</ListItem>
                    <ListItem selected>Selected</ListItem>
                    <ListItem hover selected>Hover selected</ListItem>
                    <ListItem disabled>Disabled</ListItem>
                    <ListItem>List item with very long text, that spans on multiple lines</ListItem>
                    <ListItem showCheckbox>Checkbox</ListItem>
                    <ListItem showIcon iconName="cog">Icon</ListItem>
                    <ListItem showCheckbox showIcon iconName="cog">Checkbox icon</ListItem>
                </List>
            </section>

            <section>
                <List virtualization>
                    <ListItem>List item</ListItem>
                    <ListItem hover>Hover</ListItem>
                    <ListItem focus>Focus</ListItem>
                    <ListItem selected>Selected</ListItem>
                    <ListItem hover selected>Hover selected</ListItem>
                    <ListItem disabled>Disabled</ListItem>
                    <ListItem>List item with very long text, that spans on multiple lines</ListItem>
                    <ListItem showCheckbox>Checkbox</ListItem>
                    <ListItem showIcon iconName="cog">Icon</ListItem>
                    <ListItem showCheckbox showIcon iconName="cog">Checkbox icon</ListItem>
                </List>
            </section>

            <section dir="rtl">
                <List>
                    <ListItem>List item</ListItem>
                    <ListItem hover>Hover</ListItem>
                    <ListItem focus>Focus</ListItem>
                    <ListItem selected>Selected</ListItem>
                    <ListItem hover selected>Hover selected</ListItem>
                    <ListItem disabled>Disabled</ListItem>
                    <ListItem>List item with very long text, that spans on multiple lines</ListItem>
                    <ListItem showCheckbox>Checkbox</ListItem>
                    <ListItem showIcon iconName="cog">Icon</ListItem>
                    <ListItem showCheckbox showIcon iconName="cog">Checkbox icon</ListItem>
                </List>
            </section>

            <section dir="rtl">
                <List virtualization>
                    <ListItem>List item</ListItem>
                    <ListItem hover>Hover</ListItem>
                    <ListItem focus>Focus</ListItem>
                    <ListItem selected>Selected</ListItem>
                    <ListItem hover selected>Hover selected</ListItem>
                    <ListItem disabled>Disabled</ListItem>
                    <ListItem>List item with very long text, that spans on multiple lines</ListItem>
                    <ListItem showCheckbox>Checkbox</ListItem>
                    <ListItem showIcon iconName="cog">Icon</ListItem>
                    <ListItem showCheckbox showIcon iconName="cog">Checkbox icon</ListItem>
                </List>
            </section>

        </div>

    </>
);
