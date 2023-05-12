import { Chip, ChipAction } from '../../chip';
import { MultiSelect } from '../../multiselect';


const styles = `
    #test-area {
        max-width: 600px;
        grid-template-columns: 120px repeat(1, 1fr);
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">
            <span>small</span>
            <MultiSelect
                size="small"
                tags={(
                    <>
                        <Chip text="Chip Text" size="small" actions={ <ChipAction type="remove"/> } />
                        <Chip text="Chip Text" size="small" actions={ <ChipAction type="remove"/> } />
                    </>
                )}
            />

            <span>medium</span>
            <MultiSelect
                size="medium"
                tags={(
                    <>
                        <Chip text="Chip Text" size="medium" actions={ <ChipAction type="remove"/> } />
                        <Chip text="Chip Text" size="medium" actions={ <ChipAction type="remove"/> } />
                    </>
                )}
            />

            <span>large</span>
            <MultiSelect
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
