import { ListItem } from '../../list';
import { ListBox, ListBoxNormal } from '../../listbox';


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

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">
            {ListBox.options.size.map((size) => (
                <>
                    <div>
                        <span>{size}</span>
                        <ListBoxNormal size={size} actions={[ 'up', 'down', 'left', 'right' ]}>
                            <ListItem>List item 1</ListItem>
                            <ListItem>List item 2</ListItem>
                            <ListItem>List item 3</ListItem>
                            <ListItem>List item 4</ListItem>
                            <ListItem>List item 5</ListItem>
                            <ListItem>List item 6</ListItem>
                        </ListBoxNormal>
                    </div>
                </>
            ))}
        </div>
    </>
);
