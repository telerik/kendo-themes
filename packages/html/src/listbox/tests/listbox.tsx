import ReactDOM from 'react-dom/client';
import { ListItem } from '../../list';
import { ListBox } from '../../listbox';

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
                <ListBox actions={[ 'up', 'down', 'left', 'right' ]}>
                    <ListItem>Item</ListItem>
                    <ListItem hover>Hover</ListItem>
                    <ListItem focus>Focus</ListItem>
                    <ListItem selected>Selected</ListItem>
                    <ListItem hover selected>Hover selected</ListItem>
                    <ListItem disabled>Disabled</ListItem>
                </ListBox>
            </section>

            <section dir="rtl">
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
                <ListBox actionsPosition="right" actions={[ 'up', 'down', 'left', 'right' ]}>
                    <ListItem>Item</ListItem>
                    <ListItem hover>Hover</ListItem>
                    <ListItem focus>Focus</ListItem>
                    <ListItem selected>Selected</ListItem>
                    <ListItem hover selected>Hover selected</ListItem>
                    <ListItem disabled>Disabled</ListItem>
                </ListBox>
            </section>

            <section dir="rtl">
                <ListBox actionsPosition="right" actions={[ 'up', 'down', 'left', 'right' ]}>
                    <ListItem>Item</ListItem>
                    <ListItem hover>Hover</ListItem>
                    <ListItem focus>Focus</ListItem>
                    <ListItem selected>Selected</ListItem>
                    <ListItem hover selected>Hover selected</ListItem>
                    <ListItem disabled>Disabled</ListItem>
                </ListBox>
            </section>

            <section>
                <ListBox actionsPosition="top" actions={[ 'up', 'down', 'left', 'right' ]}>
                    <ListItem>Item</ListItem>
                    <ListItem hover>Hover</ListItem>
                    <ListItem focus>Focus</ListItem>
                    <ListItem selected>Selected</ListItem>
                    <ListItem hover selected>Hover selected</ListItem>
                    <ListItem disabled>Disabled</ListItem>
                </ListBox>
            </section>

            <section dir="rtl">
                <ListBox actionsPosition="top" actions={[ 'up', 'down', 'right', 'left' ]}>
                    <ListItem>Item</ListItem>
                    <ListItem hover>Hover</ListItem>
                    <ListItem focus>Focus</ListItem>
                    <ListItem selected>Selected</ListItem>
                    <ListItem hover selected>Hover selected</ListItem>
                    <ListItem disabled>Disabled</ListItem>
                </ListBox>
            </section>

            <section>
                <ListBox actionsPosition="bottom" actions={[ 'up', 'down', 'left', 'right' ]}>
                    <ListItem>Item</ListItem>
                    <ListItem hover>Hover</ListItem>
                    <ListItem focus>Focus</ListItem>
                    <ListItem selected>Selected</ListItem>
                    <ListItem hover selected>Hover selected</ListItem>
                    <ListItem disabled>Disabled</ListItem>
                </ListBox>
            </section>

            <section dir="rtl">
                <ListBox actionsPosition="bottom" actions={[ 'up', 'down', 'right', 'left' ]}>
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
