import { Chip, ChipAction } from '../../chip';
import { List, ListItem } from '../../list';
import { MultiSelect } from '..';


const styles = `
    #test-area {
        grid-template-columns: 160px repeat(2, 300px);
    }

    .k-animation-container {
        position: relative;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <span></span>
            <span>MultiSelect</span>
            <span>MultiSelect RTL</span>

            <div>Opened</div>
            <div>
                <MultiSelect opened
                    tags={(
                        <>
                            <Chip text="List Item" actions={ <ChipAction type="remove"/> } />
                            <Chip text="List Item" actions={ <ChipAction type="remove"/> } />
                        </>
                    )}
                    popup={(
                        <List>
                            <ListItem>List item</ListItem>
                            <ListItem selected>List item</ListItem>
                            <ListItem>List item</ListItem>
                            <ListItem selected>List item</ListItem>
                        </List>
                    )}
                />
            </div>
            <div dir="rtl">
                <MultiSelect opened
                    tags={(
                        <>
                            <Chip text="List Item" actions={ <ChipAction type="remove"/> } />
                            <Chip text="List Item" actions={ <ChipAction type="remove"/> } />
                        </>
                    )}
                    popup={(
                        <List>
                            <ListItem>List item</ListItem>
                            <ListItem selected>List item</ListItem>
                            <ListItem>List item</ListItem>
                            <ListItem selected>List item</ListItem>
                        </List>
                    )}
                />
            </div>
        </div>
    </>
);
