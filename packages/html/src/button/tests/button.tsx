// import { Button } from '../../button';

/* */

const styles = `
    #test-area {
        grid-template-columns: 120px repeat(6, 1fr);
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
            <span>Disabled</span>

            <span>base</span>
            <span><Button>Normal</Button></span>
            <span><Button hover={true}>Hover</Button></span>
            <span><Button focus={true}>Focus</Button></span>
            <span><Button active={true}>Active</Button></span>
            <span><Button selected={true}>Selected</Button></span>
            <span><Button disabled={true}>Disabled</Button></span>

            <span>^ text + icon</span>
            <span><Button icon="folder">Normal</Button></span>
            <span><Button icon="folder" hover={true}>Hover</Button></span>
            <span><Button icon="folder" focus={true}>Focus</Button></span>
            <span><Button icon="folder" active={true}>Active</Button></span>
            <span><Button icon="folder" selected={true}>Selected</Button></span>
            <span><Button icon="folder" disabled={true}>Disabled</Button></span>

            <span>^ icon</span>
            <span><Button icon="folder"></Button></span>
            <span><Button icon="folder" hover></Button></span>
            <span><Button icon="folder" focus={true}></Button></span>
            <span><Button icon="folder" active={true}></Button></span>
            <span><Button icon="folder" selected={true}></Button></span>
            <span><Button icon="folder" disabled={true}></Button></span>

            <span>primary</span>
            <span><Button themeColor="primary">Normal</Button></span>
            <span><Button themeColor="primary" hover={true}>Hover</Button></span>
            <span><Button themeColor="primary" focus={true}>Focus</Button></span>
            <span><Button themeColor="primary" active={true}>Active</Button></span>
            <span><Button themeColor="primary" selected={true}>Selected</Button></span>
            <span><Button themeColor="primary" disabled={true}>Disabled</Button></span>

            <span>^ text + icon</span>
            <span><Button themeColor="primary" icon="folder">Normal</Button></span>
            <span><Button themeColor="primary" icon="folder" hover={true}>Hover</Button></span>
            <span><Button themeColor="primary" icon="folder" focus={true}>Focus</Button></span>
            <span><Button themeColor="primary" icon="folder" active={true}>Active</Button></span>
            <span><Button themeColor="primary" icon="folder" selected={true}>Selected</Button></span>
            <span><Button themeColor="primary" icon="folder" disabled={true}>Disabled</Button></span>

            <span>^ icon</span>
            <span><Button themeColor="primary" icon="folder"></Button></span>
            <span><Button themeColor="primary" icon="folder" hover={true}></Button></span>
            <span><Button themeColor="primary" icon="folder" focus={true}></Button></span>
            <span><Button themeColor="primary" icon="folder" active={true}></Button></span>
            <span><Button themeColor="primary" icon="folder" selected={true}></Button></span>
            <span><Button themeColor="primary" icon="folder" disabled={true}></Button></span>
        </div>

    </>
);
