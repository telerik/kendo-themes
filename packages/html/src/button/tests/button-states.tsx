import { IconButton } from '../templates/icon-button';
import { IconTextButton } from '../templates/icon-text-button';
import { TextButton } from '../templates/text-button';

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

            <span>base RTL</span>
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
            <span dir="rtl"><IconButton></IconButton></span>
            <span dir="rtl"><IconButton hover></IconButton></span>
            <span dir="rtl"><IconButton focus={true}></IconButton></span>
            <span dir="rtl"><IconButton active={true}></IconButton></span>
            <span dir="rtl"><IconButton selected={true}></IconButton></span>
            <span dir="rtl"><IconButton selected={true} focus={true}></IconButton></span>
            <span dir="rtl"><IconButton disabled={true}></IconButton></span>
        </div>
    </>
);
