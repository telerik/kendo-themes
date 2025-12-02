import { IconButton, IconTextButton, TextButton } from '..';

const styles = `
    #test-area {
        grid-template-columns: 120px repeat(7, 1fr);
        max-width: 1240px;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <span></span>
            <span>Normal</span>
            <span>Hover</span>
            <span>Focus</span>
            <span>Active</span>
            <span>Selected</span>
            <span>Selected+Focus</span>
            <span>Disabled</span>

            <span>base</span>
            <span><TextButton>Normal</TextButton></span>
            <span><TextButton hover={true}>Hover</TextButton></span>
            <span><TextButton focus={true}>Focus</TextButton></span>
            <span><TextButton active={true}>Active</TextButton></span>
            <span><TextButton selected={true}>Selected</TextButton></span>
            <span><TextButton selected={true} focus={true}>Selected+Focus</TextButton></span>
            <span><TextButton disabled={true}>Disabled</TextButton></span>

            <span>^ text + icon</span>
            <span><IconTextButton>Normal</IconTextButton></span>
            <span><IconTextButton hover={true}>Hover</IconTextButton></span>
            <span><IconTextButton focus={true}>Focus</IconTextButton></span>
            <span><IconTextButton active={true}>Active</IconTextButton></span>
            <span><IconTextButton selected={true}>Selected</IconTextButton></span>
            <span><IconTextButton selected={true} focus={true}>Selected+Focus</IconTextButton></span>
            <span><IconTextButton disabled={true}>Disabled</IconTextButton></span>

            <span>^ icon</span>
            <span><IconButton></IconButton></span>
            <span><IconButton hover></IconButton></span>
            <span><IconButton focus={true}></IconButton></span>
            <span><IconButton active={true}></IconButton></span>
            <span><IconButton selected={true}></IconButton></span>
            <span><IconButton selected={true} focus={true}></IconButton></span>
            <span><IconButton disabled={true}></IconButton></span>

            <span>primary</span>
            <span><TextButton themeColor="primary">Normal</TextButton></span>
            <span><TextButton themeColor="primary" hover={true}>Hover</TextButton></span>
            <span><TextButton themeColor="primary" focus={true}>Focus</TextButton></span>
            <span><TextButton themeColor="primary" active={true}>Active</TextButton></span>
            <span><TextButton themeColor="primary" selected={true}>Selected</TextButton></span>
            <span><TextButton themeColor="primary" selected={true} focus={true}>Selected+Focus</TextButton></span>
            <span><TextButton themeColor="primary" disabled={true}>Disabled</TextButton></span>

            <span>^ text + icon</span>
            <span><IconTextButton themeColor="primary">Normal</IconTextButton></span>
            <span><IconTextButton themeColor="primary" hover={true}>Hover</IconTextButton></span>
            <span><IconTextButton themeColor="primary" focus={true}>Focus</IconTextButton></span>
            <span><IconTextButton themeColor="primary" active={true}>Active</IconTextButton></span>
            <span><IconTextButton themeColor="primary" selected={true}>Selected</IconTextButton></span>
            <span><IconTextButton themeColor="primary" selected={true} focus={true}>Selected+Focus</IconTextButton></span>
            <span><IconTextButton themeColor="primary" disabled={true}>Disabled</IconTextButton></span>

            <span>^ icon</span>
            <span><IconButton themeColor="primary"></IconButton></span>
            <span><IconButton themeColor="primary" hover></IconButton></span>
            <span><IconButton themeColor="primary" focus={true}></IconButton></span>
            <span><IconButton themeColor="primary" active={true}></IconButton></span>
            <span><IconButton themeColor="primary" selected={true}></IconButton></span>
            <span><IconButton themeColor="primary" selected={true} focus={true}></IconButton></span>
            <span><IconButton themeColor="primary" disabled={true}></IconButton></span>
        </div>
    </>
);
