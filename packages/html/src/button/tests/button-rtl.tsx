import { IconButton, IconTextButton, TextButton } from '../../button';

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
            <span dir="rtl"><TextButton>Normal</TextButton></span>
            <span dir="rtl"><TextButton hover={true}>Hover</TextButton></span>
            <span dir="rtl"><TextButton focus={true}>Focus</TextButton></span>
            <span dir="rtl"><TextButton active={true}>Active</TextButton></span>
            <span dir="rtl"><TextButton selected={true}>Selected</TextButton></span>
            <span dir="rtl"><TextButton selected={true} focus={true}>Selected+Focus</TextButton></span>
            <span dir="rtl"><TextButton disabled={true}>Disabled</TextButton></span>

            <span>^ text + icon</span>
            <span dir="rtl"><IconTextButton>Normal</IconTextButton></span>
            <span dir="rtl"><IconTextButton hover={true}>Hover</IconTextButton></span>
            <span dir="rtl"><IconTextButton focus={true}>Focus</IconTextButton></span>
            <span dir="rtl"><IconTextButton active={true}>Active</IconTextButton></span>
            <span dir="rtl"><IconTextButton selected={true}>Selected</IconTextButton></span>
            <span dir="rtl"><IconTextButton selected={true} focus={true}>Selected+Focus</IconTextButton></span>
            <span dir="rtl"><IconTextButton disabled={true}>Disabled</IconTextButton></span>

            <span>^ icon</span>
            <span dir="rtl"><IconButton aria-label="Folder"></IconButton></span>
            <span dir="rtl"><IconButton aria-label="Folder" hover></IconButton></span>
            <span dir="rtl"><IconButton aria-label="Folder" focus={true}></IconButton></span>
            <span dir="rtl"><IconButton aria-label="Folder" active={true}></IconButton></span>
            <span dir="rtl"><IconButton aria-label="Folder" selected={true}></IconButton></span>
            <span dir="rtl"><IconButton aria-label="Folder" selected={true} focus={true}></IconButton></span>
            <span dir="rtl"><IconButton aria-label="Folder" disabled={true}></IconButton></span>

            <span>primary</span>
            <span dir="rtl"><TextButton themeColor="primary">Normal</TextButton></span>
            <span dir="rtl"><TextButton themeColor="primary" hover={true}>Hover</TextButton></span>
            <span dir="rtl"><TextButton themeColor="primary" focus={true}>Focus</TextButton></span>
            <span dir="rtl"><TextButton themeColor="primary" active={true}>Active</TextButton></span>
            <span dir="rtl"><TextButton themeColor="primary" selected={true}>Selected</TextButton></span>
            <span dir="rtl"><TextButton themeColor="primary" selected={true} focus={true}>Selected+Focus</TextButton></span>
            <span dir="rtl"><TextButton themeColor="primary" disabled={true}>Disabled</TextButton></span>

            <span>^ text + icon</span>
            <span dir="rtl"><IconTextButton themeColor="primary">Normal</IconTextButton></span>
            <span dir="rtl"><IconTextButton themeColor="primary" hover={true}>Hover</IconTextButton></span>
            <span dir="rtl"><IconTextButton themeColor="primary" focus={true}>Focus</IconTextButton></span>
            <span dir="rtl"><IconTextButton themeColor="primary" active={true}>Active</IconTextButton></span>
            <span dir="rtl"><IconTextButton themeColor="primary" selected={true}>Selected</IconTextButton></span>
            <span dir="rtl"><IconTextButton themeColor="primary" selected={true} focus={true}>Selected+Focus</IconTextButton></span>
            <span dir="rtl"><IconTextButton themeColor="primary" disabled={true}>Disabled</IconTextButton></span>

            <span>^ icon</span>
            <span dir="rtl"><IconButton aria-label="Folder" themeColor="primary"></IconButton></span>
            <span dir="rtl"><IconButton aria-label="Folder" themeColor="primary" hover></IconButton></span>
            <span dir="rtl"><IconButton aria-label="Folder" themeColor="primary" focus={true}></IconButton></span>
            <span dir="rtl"><IconButton aria-label="Folder" themeColor="primary" active={true}></IconButton></span>
            <span dir="rtl"><IconButton aria-label="Folder" themeColor="primary" selected={true}></IconButton></span>
            <span dir="rtl"><IconButton aria-label="Folder" themeColor="primary" selected={true} focus={true}></IconButton></span>
            <span dir="rtl"><IconButton aria-label="Folder" themeColor="primary" disabled={true}></IconButton></span>
        </div>
    </>
);
