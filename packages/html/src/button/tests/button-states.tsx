import { IconButton, IconTextButton, TextButton, Button } from '..';

const styles = `
    #test-area {
        grid-template-columns: 120px repeat(6, 1fr);
        max-width: 1240px;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <span>Normal</span>
            <span>Hover</span>
            <span>Focus</span>
            <span>Active</span>
            <span>Selected</span>
            <span>Selected+Focus</span>
            <span>Disabled</span>

            <span><TextButton>Text</TextButton></span>
            <span><TextButton hover={true}>Text</TextButton></span>
            <span><TextButton focus={true}>Text</TextButton></span>
            <span><TextButton active={true}>Text</TextButton></span>
            <span><TextButton selected={true}>Text</TextButton></span>
            <span><TextButton selected={true} focus={true}>Text</TextButton></span>
            <span><TextButton disabled={true}>Text</TextButton></span>

            <span><IconTextButton>Text</IconTextButton></span>
            <span><IconTextButton hover={true}>Text</IconTextButton></span>
            <span><IconTextButton focus={true}>Text</IconTextButton></span>
            <span><IconTextButton active={true}>Text</IconTextButton></span>
            <span><IconTextButton selected={true}>Text</IconTextButton></span>
            <span><IconTextButton selected={true} focus={true}>Text</IconTextButton></span>
            <span><IconTextButton disabled={true}>Text</IconTextButton></span>

            <span><Button endIcon="folder">Text</Button></span>
            <span><Button endIcon="folder" hover={true}>Text</Button></span>
            <span><Button endIcon="folder" focus={true}>Text</Button></span>
            <span><Button endIcon="folder" active={true}>Text</Button></span>
            <span><Button endIcon="folder" selected={true}>Text</Button></span>
            <span><Button endIcon="folder" selected={true} focus={true}>Text</Button></span>
            <span><Button endIcon="folder" disabled={true}>Text</Button></span>

            <span><Button icon="folder" endIcon="folder">Text</Button></span>
            <span><Button icon="folder" endIcon="folder" hover={true}>Text</Button></span>
            <span><Button icon="folder" endIcon="folder" focus={true}>Text</Button></span>
            <span><Button icon="folder" endIcon="folder" active={true}>Text</Button></span>
            <span><Button icon="folder" endIcon="folder" selected={true}>Text</Button></span>
            <span><Button icon="folder" endIcon="folder" selected={true} focus={true}>Text</Button></span>
            <span><Button icon="folder" endIcon="folder" disabled={true}>Text</Button></span>

            <span><IconButton></IconButton></span>
            <span><IconButton hover></IconButton></span>
            <span><IconButton focus={true}></IconButton></span>
            <span><IconButton active={true}></IconButton></span>
            <span><IconButton selected={true}></IconButton></span>
            <span><IconButton selected={true} focus={true}></IconButton></span>
            <span><IconButton disabled={true}></IconButton></span>

            <span className='k-col-span-full'><center>RTL</center></span>

            <span dir="rtl"><TextButton>Text</TextButton></span>
            <span dir="rtl"><TextButton hover={true}>Text</TextButton></span>
            <span dir="rtl"><TextButton focus={true}>Text</TextButton></span>
            <span dir="rtl"><TextButton active={true}>Text</TextButton></span>
            <span dir="rtl"><TextButton selected={true}>Text</TextButton></span>
            <span dir="rtl"><TextButton selected={true} focus={true}>Text</TextButton></span>
            <span dir="rtl"><TextButton disabled={true}>Text</TextButton></span>

            <span dir="rtl"><IconTextButton>Text</IconTextButton></span>
            <span dir="rtl"><IconTextButton hover={true}>Text</IconTextButton></span>
            <span dir="rtl"><IconTextButton focus={true}>Text</IconTextButton></span>
            <span dir="rtl"><IconTextButton active={true}>Text</IconTextButton></span>
            <span dir="rtl"><IconTextButton selected={true}>Text</IconTextButton></span>
            <span dir="rtl"><IconTextButton selected={true} focus={true}>Text</IconTextButton></span>
            <span dir="rtl"><IconTextButton disabled={true}>Text</IconTextButton></span>

            <span dir="rtl"><Button endIcon="folder">Text</Button></span>
            <span dir="rtl"><Button endIcon="folder" hover={true}>Text</Button></span>
            <span dir="rtl"><Button endIcon="folder" focus={true}>Text</Button></span>
            <span dir="rtl"><Button endIcon="folder" active={true}>Text</Button></span>
            <span dir="rtl"><Button endIcon="folder" selected={true}>Text</Button></span>
            <span dir="rtl"><Button endIcon="folder" selected={true} focus={true}>Text</Button></span>
            <span dir="rtl"><Button endIcon="folder" disabled={true}>Text</Button></span>

            <span dir="rtl"><Button icon="folder" endIcon="folder">Text</Button></span>
            <span dir="rtl"><Button icon="folder" endIcon="folder" hover={true}>Text</Button></span>
            <span dir="rtl"><Button icon="folder" endIcon="folder" focus={true}>Text</Button></span>
            <span dir="rtl"><Button icon="folder" endIcon="folder" active={true}>Text</Button></span>
            <span dir="rtl"><Button icon="folder" endIcon="folder" selected={true}>Text</Button></span>
            <span dir="rtl"><Button icon="folder" endIcon="folder" selected={true} focus={true}>Text</Button></span>
            <span dir="rtl"><Button icon="folder" endIcon="folder" disabled={true}>Text</Button></span>

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
