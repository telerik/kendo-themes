import { Button } from '../../button';


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
            <span><Button hover>Hover</Button></span>
            <span><Button focus>Focus</Button></span>
            <span><Button active>Active</Button></span>
            <span><Button selected>Selected</Button></span>
            <span><Button disabled>Disabled</Button></span>

            <span>primary</span>
            <span><Button themeColor="primary">Normal</Button></span>
            <span><Button themeColor="primary" hover>Hover</Button></span>
            <span><Button themeColor="primary" focus>Focus</Button></span>
            <span><Button themeColor="primary" active>Active</Button></span>
            <span><Button themeColor="primary" selected>Selected</Button></span>
            <span><Button themeColor="primary" disabled>Disabled</Button></span>

            <span>secondary</span>
            <span><Button themeColor="secondary">Normal</Button></span>
            <span><Button themeColor="secondary" hover>Hover</Button></span>
            <span><Button themeColor="secondary" focus>Focus</Button></span>
            <span><Button themeColor="secondary" active>Active</Button></span>
            <span><Button themeColor="secondary" selected>Selected</Button></span>
            <span><Button themeColor="secondary" disabled>Disabled</Button></span>

            <span>tertiary</span>
            <span><Button themeColor="tertiary">Normal</Button></span>
            <span><Button themeColor="tertiary" hover>Hover</Button></span>
            <span><Button themeColor="tertiary" focus>Focus</Button></span>
            <span><Button themeColor="tertiary" active>Active</Button></span>
            <span><Button themeColor="tertiary" selected>Selected</Button></span>
            <span><Button themeColor="tertiary" disabled>Disabled</Button></span>

            <span>info</span>
            <span><Button themeColor="info">Normal</Button></span>
            <span><Button themeColor="info" hover>Hover</Button></span>
            <span><Button themeColor="info" focus>Focus</Button></span>
            <span><Button themeColor="info" active>Active</Button></span>
            <span><Button themeColor="info" selected>Selected</Button></span>
            <span><Button themeColor="info" disabled>Disabled</Button></span>

            <span>success</span>
            <span><Button themeColor="success">Normal</Button></span>
            <span><Button themeColor="success" hover>Hover</Button></span>
            <span><Button themeColor="success" focus>Focus</Button></span>
            <span><Button themeColor="success" active>Active</Button></span>
            <span><Button themeColor="success" selected>Selected</Button></span>
            <span><Button themeColor="success" disabled>Disabled</Button></span>

            <span>warning</span>
            <span><Button themeColor="warning">Normal</Button></span>
            <span><Button themeColor="warning" hover>Hover</Button></span>
            <span><Button themeColor="warning" focus>Focus</Button></span>
            <span><Button themeColor="warning" active>Active</Button></span>
            <span><Button themeColor="warning" selected>Selected</Button></span>
            <span><Button themeColor="warning" disabled>Disabled</Button></span>

            <span>error</span>
            <span><Button themeColor="error">Normal</Button></span>
            <span><Button themeColor="error" hover>Hover</Button></span>
            <span><Button themeColor="error" focus>Focus</Button></span>
            <span><Button themeColor="error" active>Active</Button></span>
            <span><Button themeColor="error" selected>Selected</Button></span>
            <span><Button themeColor="error" disabled>Disabled</Button></span>

            <span>dark</span>
            <span><Button themeColor="dark">Normal</Button></span>
            <span><Button themeColor="dark" hover>Hover</Button></span>
            <span><Button themeColor="dark" focus>Focus</Button></span>
            <span><Button themeColor="dark" active>Active</Button></span>
            <span><Button themeColor="dark" selected>Selected</Button></span>
            <span><Button themeColor="dark" disabled>Disabled</Button></span>

            <span>light</span>
            <span><Button themeColor="light">Normal</Button></span>
            <span><Button themeColor="light" hover>Hover</Button></span>
            <span><Button themeColor="light" focus>Focus</Button></span>
            <span><Button themeColor="light" active>Active</Button></span>
            <span><Button themeColor="light" selected>Selected</Button></span>
            <span><Button themeColor="light" disabled>Disabled</Button></span>

            <span>inverse</span>
            <span><Button themeColor="inverse">Normal</Button></span>
            <span><Button themeColor="inverse" hover>Hover</Button></span>
            <span><Button themeColor="inverse" focus>Focus</Button></span>
            <span><Button themeColor="inverse" active>Active</Button></span>
            <span><Button themeColor="inverse" selected>Selected</Button></span>
            <span><Button themeColor="inverse" disabled>Disabled</Button></span>

        </div>

    </>
);
