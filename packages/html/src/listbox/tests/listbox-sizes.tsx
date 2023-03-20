import React from 'react';
import ReactDOM from 'react-dom/client';
import { ListItem } from '../../list';
import { ListBox } from '../../listbox';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    #test-area {
        max-width: 800px;
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
        <div id="test-area" className="k-d-grid k-grid-cols-3">
            <span>Small</span>
            <span>Medium</span>
            <span>Large</span>

            <section>
                <ListBox size="small" actions={[ 'up', 'down', 'left', 'right' ]}>
                    <ListItem>Item</ListItem>
                    <ListItem hover>Hover</ListItem>
                    <ListItem focus>Focus</ListItem>
                    <ListItem selected>Selected</ListItem>
                    <ListItem hover selected>Hover selected</ListItem>
                    <ListItem disabled>Disabled</ListItem>
                </ListBox>
            </section>

            <section>
                <ListBox actions={[ 'up', 'down', 'left', 'right' ]}>
                    <ListItem>Item</ListItem>
                    <ListItem hover>Hover</ListItem>
                    <ListItem focus>Focus</ListItem>
                    <ListItem selected>Selected</ListItem>
                    <ListItem hover selected>Hover selected</ListItem>
                    <ListItem disabled>Disabled</ListItem>
                </ListBox>
            </section>

            <section>
                <ListBox size="large" actions={[ 'up', 'down', 'left', 'right' ]}>
                    <ListItem>Item</ListItem>
                    <ListItem hover>Hover</ListItem>
                    <ListItem focus>Focus</ListItem>
                    <ListItem selected>Selected</ListItem>
                    <ListItem hover selected>Hover selected</ListItem>
                    <ListItem disabled>Disabled</ListItem>
                </ListBox>
            </section>
        </div>
    </>
);
