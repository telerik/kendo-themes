import ReactDOM from 'react-dom/client';
import { Button } from '../../button';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    #test-area {
        grid-template-columns: 120px repeat(6, 1fr);
    }
`;

root.render(
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
            <span><Button fillMode="link">Normal</Button></span>
            <span><Button fillMode="link" hover>Hover</Button></span>
            <span><Button fillMode="link" focus>Focus</Button></span>
            <span><Button fillMode="link" active>Active</Button></span>
            <span><Button fillMode="link" selected>Selected</Button></span>
            <span><Button fillMode="link" disabled>Disabled</Button></span>

            <span>primary</span>
            <span><Button fillMode="link" themeColor="primary">Normal</Button></span>
            <span><Button fillMode="link" themeColor="primary" hover >Hover</Button></span>
            <span><Button fillMode="link" themeColor="primary" focus>Focus</Button></span>
            <span><Button fillMode="link" themeColor="primary" active>Active</Button></span>
            <span><Button fillMode="link" themeColor="primary" selected >Selected</Button></span>
            <span><Button fillMode="link" themeColor="primary" disabled>Disabled</Button></span>

            <span>secondary</span>
            <span><Button fillMode="link" themeColor="secondary">Normal</Button></span>
            <span><Button fillMode="link" themeColor="secondary" hover>Hover</Button></span>
            <span><Button fillMode="link" themeColor="secondary" focus>Focus</Button></span>
            <span><Button fillMode="link" themeColor="secondary" active>Active</Button></span>
            <span><Button fillMode="link" themeColor="secondary" selected>Selected</Button></span>
            <span><Button fillMode="link" themeColor="secondary" disabled>Disabled</Button></span>

            <span>tertiary</span>
            <span><Button fillMode="link" themeColor="tertiary">Normal</Button></span>
            <span><Button fillMode="link" themeColor="tertiary" hover>Hover</Button></span>
            <span><Button fillMode="link" themeColor="tertiary" focus>Focus</Button></span>
            <span><Button fillMode="link" themeColor="tertiary" active>Active</Button></span>
            <span><Button fillMode="link" themeColor="tertiary" selected>Selected</Button></span>
            <span><Button fillMode="link" themeColor="tertiary" disabled>Disabled</Button></span>

            <span>info</span>
            <span><Button fillMode="link" themeColor="info">Normal</Button></span>
            <span><Button fillMode="link" themeColor="info" hover>Hover</Button></span>
            <span><Button fillMode="link" themeColor="info" focus>Focus</Button></span>
            <span><Button fillMode="link" themeColor="info" active>Active</Button></span>
            <span><Button fillMode="link" themeColor="info" selected>Selected</Button></span>
            <span><Button fillMode="link" themeColor="info" disabled>Disabled</Button></span>

            <span>success</span>
            <span><Button fillMode="link" themeColor="success">Normal</Button></span>
            <span><Button fillMode="link" themeColor="success" hover>Hover</Button></span>
            <span><Button fillMode="link" themeColor="success" focus>Focus</Button></span>
            <span><Button fillMode="link" themeColor="success" active>Active</Button></span>
            <span><Button fillMode="link" themeColor="success" selected>Selected</Button></span>
            <span><Button fillMode="link" themeColor="success" disabled>Disabled</Button></span>

            <span>warning</span>
            <span><Button fillMode="link" themeColor="warning">Normal</Button></span>
            <span><Button fillMode="link" themeColor="warning" hover>Hover</Button></span>
            <span><Button fillMode="link" themeColor="warning" focus>Focus</Button></span>
            <span><Button fillMode="link" themeColor="warning" active>Active</Button></span>
            <span><Button fillMode="link" themeColor="warning" selected>Selected</Button></span>
            <span><Button fillMode="link" themeColor="warning" disabled>Disabled</Button></span>

            <span>error</span>
            <span><Button fillMode="link" themeColor="error">Normal</Button></span>
            <span><Button fillMode="link" themeColor="error" hover>Hover</Button></span>
            <span><Button fillMode="link" themeColor="error" focus>Focus</Button></span>
            <span><Button fillMode="link" themeColor="error" active>Active</Button></span>
            <span><Button fillMode="link" themeColor="error" selected>Selected</Button></span>
            <span><Button fillMode="link" themeColor="error" disabled>Disabled</Button></span>

            <span>dark</span>
            <span><Button fillMode="link" themeColor="dark">Normal</Button></span>
            <span><Button fillMode="link" themeColor="dark" hover>Hover</Button></span>
            <span><Button fillMode="link" themeColor="dark" focus>Focus</Button></span>
            <span><Button fillMode="link" themeColor="dark" active>Active</Button></span>
            <span><Button fillMode="link" themeColor="dark" selected>Selected</Button></span>
            <span><Button fillMode="link" themeColor="dark" disabled>Disabled</Button></span>

            <span>light</span>
            <span><Button fillMode="link" themeColor="light">Normal</Button></span>
            <span><Button fillMode="link" themeColor="light" hover>Hover</Button></span>
            <span><Button fillMode="link" themeColor="light" focus>Focus</Button></span>
            <span><Button fillMode="link" themeColor="light" active>Active</Button></span>
            <span><Button fillMode="link" themeColor="light" selected>Selected</Button></span>
            <span><Button fillMode="link" themeColor="light" disabled>Disabled</Button></span>

            <span>inverse</span>
            <span><Button fillMode="link" themeColor="inverse">Normal</Button></span>
            <span><Button fillMode="link" themeColor="inverse" hover>Hover</Button></span>
            <span><Button fillMode="link" themeColor="inverse" focus>Focus</Button></span>
            <span><Button fillMode="link" themeColor="inverse" active>Active</Button></span>
            <span><Button fillMode="link" themeColor="inverse" selected>Selected</Button></span>
            <span><Button fillMode="link" themeColor="inverse" disabled>Disabled</Button></span>

        </div>

    </>
);
