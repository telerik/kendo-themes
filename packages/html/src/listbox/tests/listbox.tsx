import { ListItem } from '../../list';
import { ListBoxNormal } from '../../listbox';

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

const actionPositions = [ 'left', 'right', 'top', 'bottom' ];

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <span>Listbox</span>
            <span>Listbox RTL</span>

            {actionPositions.map(position => (
                <>
                    <ListBoxNormal actionsPosition={position} actions={[ 'up', 'down', 'left', 'right', 'to', 'from', 'x' ]}>
                        <ListItem>List item 1</ListItem>
                        <ListItem>List item 2</ListItem>
                        <ListItem>List item 3</ListItem>
                        <ListItem>List item 4</ListItem>
                        <ListItem>List item 5</ListItem>
                        <ListItem>List item 6</ListItem>
                    </ListBoxNormal>

                    <ListBoxNormal actionsPosition={position} actions={[ 'up', 'down', 'left', 'right', 'to', 'from', 'x' ]} dir="rtl">
                        <ListItem>List item 1</ListItem>
                        <ListItem>List item 2</ListItem>
                        <ListItem>List item 3</ListItem>
                        <ListItem>List item 4</ListItem>
                        <ListItem>List item 5</ListItem>
                        <ListItem>List item 6</ListItem>
                    </ListBoxNormal>
                </>
            ))}
        </div>
    </>
);
