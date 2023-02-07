import ReactDOM from 'react-dom/client';
import { Chip, ChipAction } from '../../chip';
import { MultiSelectTree } from '../../multiselecttree';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    #test-area {
        max-width: 600px;
        grid-template-columns: 120px repeat(1, 1fr);
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">
            <span>small</span>
            <MultiSelectTree
                size="small"
                tags={(
                    <>
                        <Chip text="Chip Text" size="small" actions={ <ChipAction type="remove"/> } />
                        <Chip text="Chip Text" size="small" actions={ <ChipAction type="remove"/> } />
                    </>
                )}
            />

            <span>medium</span>
            <MultiSelectTree
                size="medium"
                tags={(
                    <>
                        <Chip text="Chip Text" size="medium" actions={ <ChipAction type="remove"/> } />
                        <Chip text="Chip Text" size="medium" actions={ <ChipAction type="remove"/> } />
                    </>
                )}
            />

            <span>large</span>
            <MultiSelectTree
                size="large"
                tags={(
                    <>
                        <Chip text="Chip Text" size="large" actions={ <ChipAction type="remove"/> } />
                        <Chip text="Chip Text" size="large" actions={ <ChipAction type="remove"/> } />
                    </>
                )}
            />
        </div>
    </>
);
