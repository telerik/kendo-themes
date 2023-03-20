import ReactDOM from 'react-dom/client';
import { Chip, ChipAction } from '../../chip';
import { List, ListItem } from '../../list';
import { MultiSelect } from '../../multiselect';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    #test-area {
        grid-template-columns: 160px repeat(2, 300px);
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <span></span>
            <span>MultiSelect</span>
            <span>MultiSelect RTL</span>

            <div>Empty</div>
            <div>
                <MultiSelect placeholder="MultiSelect..." />
            </div>
            <div dir="rtl">
                <MultiSelect placeholder="MultiSelect..." />
            </div>

            <div>Arrow button</div>
            <div>
                <MultiSelect showArrowButton placeholder="MultiSelect with arrow button" />
            </div>
            <div dir="rtl">
                <MultiSelect showArrowButton placeholder="MultiSelect with arrow button" />
            </div>

            <div>Normal</div>
            <div>
                <MultiSelect
                    tags={(
                        <Chip text="Normal" actions={ <ChipAction type="remove"/> } />
                    )}
                />
            </div>
            <div dir="rtl">
                <MultiSelect
                    tags={(
                        <Chip text="Normal" actions={ <ChipAction type="remove"/> } />
                    )}
                />
            </div>

            <div>Hover</div>
            <div>
                <MultiSelect
                    tags={(
                        <Chip text="Hover" actions={ <ChipAction type="remove"/> } />
                    )}
                    hover
                />
            </div>
            <div dir="rtl">
                <MultiSelect
                    tags={(
                        <Chip text="Hover" actions={ <ChipAction type="remove"/> } />
                    )}
                    hover
                />
            </div>

            <div>Focus</div>
            <div>
                <MultiSelect
                    tags={(
                        <Chip text="Focus" actions={ <ChipAction type="remove"/> } />
                    )}
                    focus
                />
            </div>
            <div dir="rtl">
                <MultiSelect
                    tags={(
                        <Chip text="Focus" actions={ <ChipAction type="remove"/> } />
                    )}
                    focus
                />
            </div>

            <div>Disabled</div>
            <div>
                <MultiSelect
                    tags={(
                        <Chip text="Disabled" actions={ <ChipAction type="remove"/> } />
                    )}
                    disabled
                />
            </div>
            <div dir="rtl">
                <MultiSelect
                    tags={(
                        <Chip text="Disabled" actions={ <ChipAction type="remove"/> } />
                    )}
                    disabled
                />
            </div>

            <div>Invalid</div>
            <div>
                <MultiSelect
                    tags={(
                        <Chip text="Invalid" actions={ <ChipAction type="remove"/> } />
                    )}
                    invalid
                />
            </div>
            <div dir="rtl">
                <MultiSelect
                    tags={(
                        <Chip text="Invalid" actions={ <ChipAction type="remove"/> } />
                    )}
                    invalid
                />
            </div>

            <div>Invalid + Focus</div>
            <div>
                <MultiSelect
                    tags={(
                        <Chip text="Invalid + Focus" actions={ <ChipAction type="remove"/> } />
                    )}
                    invalid
                    focus
                />
            </div>
            <div dir="rtl">
                <MultiSelect
                    tags={(
                        <Chip text="Invalid + Focus" actions={ <ChipAction type="remove"/> } />
                    )}
                    invalid
                    focus
                />
            </div>

            <div>Loading</div>
            <div>
                <MultiSelect placeholder="Loading..." loading/>
            </div>
            <div dir="rtl">
                <MultiSelect placeholder="Loading..." loading />
            </div>

            <div>Multi Line + Overflow</div>
            <div>
                <MultiSelect
                    tags={(
                        <>
                            <Chip text="Multi-line" actions={ <ChipAction type="remove"/> } />
                            <Chip text="Multi-line + Overflow with a very very very long text" actions={ <ChipAction type="remove"/> } />
                        </>
                    )}
                />
            </div>
            <div dir="rtl">
                <MultiSelect
                    tags={(
                        <>
                            <Chip text="Multi-line" actions={ <ChipAction type="remove"/> } />
                            <Chip text="Multi-line + Overflow with a very very very long text" actions={ <ChipAction type="remove"/> } />
                        </>
                    )}
                />
            </div>

            <div>Opened</div>
            <div>
                <MultiSelect opened
                    tags={(
                        <>
                            <Chip text="List Item" actions={ <ChipAction type="remove"/> } />
                            <Chip text="List Item" actions={ <ChipAction type="remove"/> } />
                        </>
                    )}
                    list={(
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
                    list={(
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
