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
            <span><Button fillMode="clear">Normal</Button></span>
            <span><Button fillMode="clear" hover>Hover</Button></span>
            <span><Button fillMode="clear" focus>Focus</Button></span>
            <span><Button fillMode="clear" active>Active</Button></span>
            <span><Button fillMode="clear" selected>Selected</Button></span>
            <span><Button fillMode="clear" disabled>Disabled</Button></span>

            <span>primary</span>
            <span><Button fillMode="clear" themeColor="primary">Normal</Button></span>
            <span><Button fillMode="clear" themeColor="primary" hover >Hover</Button></span>
            <span><Button fillMode="clear" themeColor="primary" focus>Focus</Button></span>
            <span><Button fillMode="clear" themeColor="primary" active>Active</Button></span>
            <span><Button fillMode="clear" themeColor="primary" selected >Selected</Button></span>
            <span><Button fillMode="clear" themeColor="primary" disabled>Disabled</Button></span>

            <span>secondary</span>
            <span><Button fillMode="clear" themeColor="secondary">Normal</Button></span>
            <span><Button fillMode="clear" themeColor="secondary" hover>Hover</Button></span>
            <span><Button fillMode="clear" themeColor="secondary" focus>Focus</Button></span>
            <span><Button fillMode="clear" themeColor="secondary" active>Active</Button></span>
            <span><Button fillMode="clear" themeColor="secondary" selected>Selected</Button></span>
            <span><Button fillMode="clear" themeColor="secondary" disabled>Disabled</Button></span>

            <span>tertiary</span>
            <span><Button fillMode="clear" themeColor="tertiary">Normal</Button></span>
            <span><Button fillMode="clear" themeColor="tertiary" hover>Hover</Button></span>
            <span><Button fillMode="clear" themeColor="tertiary" focus>Focus</Button></span>
            <span><Button fillMode="clear" themeColor="tertiary" active>Active</Button></span>
            <span><Button fillMode="clear" themeColor="tertiary" selected>Selected</Button></span>
            <span><Button fillMode="clear" themeColor="tertiary" disabled>Disabled</Button></span>

            <span>info</span>
            <span><Button fillMode="clear" themeColor="info">Normal</Button></span>
            <span><Button fillMode="clear" themeColor="info" hover>Hover</Button></span>
            <span><Button fillMode="clear" themeColor="info" focus>Focus</Button></span>
            <span><Button fillMode="clear" themeColor="info" active>Active</Button></span>
            <span><Button fillMode="clear" themeColor="info" selected>Selected</Button></span>
            <span><Button fillMode="clear" themeColor="info" disabled>Disabled</Button></span>

            <span>success</span>
            <span><Button fillMode="clear" themeColor="success">Normal</Button></span>
            <span><Button fillMode="clear" themeColor="success" hover>Hover</Button></span>
            <span><Button fillMode="clear" themeColor="success" focus>Focus</Button></span>
            <span><Button fillMode="clear" themeColor="success" active>Active</Button></span>
            <span><Button fillMode="clear" themeColor="success" selected>Selected</Button></span>
            <span><Button fillMode="clear" themeColor="success" disabled>Disabled</Button></span>

            <span>warning</span>
            <span><Button fillMode="clear" themeColor="warning">Normal</Button></span>
            <span><Button fillMode="clear" themeColor="warning" hover>Hover</Button></span>
            <span><Button fillMode="clear" themeColor="warning" focus>Focus</Button></span>
            <span><Button fillMode="clear" themeColor="warning" active>Active</Button></span>
            <span><Button fillMode="clear" themeColor="warning" selected>Selected</Button></span>
            <span><Button fillMode="clear" themeColor="warning" disabled>Disabled</Button></span>

            <span>error</span>
            <span><Button fillMode="clear" themeColor="error">Normal</Button></span>
            <span><Button fillMode="clear" themeColor="error" hover>Hover</Button></span>
            <span><Button fillMode="clear" themeColor="error" focus>Focus</Button></span>
            <span><Button fillMode="clear" themeColor="error" active>Active</Button></span>
            <span><Button fillMode="clear" themeColor="error" selected>Selected</Button></span>
            <span><Button fillMode="clear" themeColor="error" disabled>Disabled</Button></span>

            <span>dark</span>
            <span><Button fillMode="clear" themeColor="dark">Normal</Button></span>
            <span><Button fillMode="clear" themeColor="dark" hover>Hover</Button></span>
            <span><Button fillMode="clear" themeColor="dark" focus>Focus</Button></span>
            <span><Button fillMode="clear" themeColor="dark" active>Active</Button></span>
            <span><Button fillMode="clear" themeColor="dark" selected>Selected</Button></span>
            <span><Button fillMode="clear" themeColor="dark" disabled>Disabled</Button></span>

            <span>light</span>
            <span><Button fillMode="clear" themeColor="light">Normal</Button></span>
            <span><Button fillMode="clear" themeColor="light" hover>Hover</Button></span>
            <span><Button fillMode="clear" themeColor="light" focus>Focus</Button></span>
            <span><Button fillMode="clear" themeColor="light" active>Active</Button></span>
            <span><Button fillMode="clear" themeColor="light" selected>Selected</Button></span>
            <span><Button fillMode="clear" themeColor="light" disabled>Disabled</Button></span>

            <span>inverse</span>
            <span><Button fillMode="clear" themeColor="inverse">Normal</Button></span>
            <span><Button fillMode="clear" themeColor="inverse" hover>Hover</Button></span>
            <span><Button fillMode="clear" themeColor="inverse" focus>Focus</Button></span>
            <span><Button fillMode="clear" themeColor="inverse" active>Active</Button></span>
            <span><Button fillMode="clear" themeColor="inverse" selected>Selected</Button></span>
            <span><Button fillMode="clear" themeColor="inverse" disabled>Disabled</Button></span>

        </div>

    </>
);
