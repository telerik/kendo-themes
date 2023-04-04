import ReactDOM from 'react-dom/client';
import { DropdownList } from '..';
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

            <span>DropdownList</span>
            <span>DropdownList RTL</span>

            <div>
                <DropdownList value="Opened" opened
                    popup={(
                        <List>
                            <ListItem>List item</ListItem>
                            <ListItem>List item</ListItem>
                            <ListItem>List item</ListItem>
                        </List>
                    )}
                />
            </div>
            <div dir="rtl">
                <DropdownList value="Opened" opened
                    popup={(
                        <List>
                            <ListItem>List item</ListItem>
                            <ListItem>List item</ListItem>
                            <ListItem>List item</ListItem>
                        </List>
                    )}
                />
            </div>

        </div>
    </>
);
