import React from 'react';
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
            <span><Button fillMode="outline">Normal</Button></span>
            <span><Button fillMode="outline" hover>Hover</Button></span>
            <span><Button fillMode="outline" focus>Focus</Button></span>
            <span><Button fillMode="outline" active>Active</Button></span>
            <span><Button fillMode="outline" selected>Selected</Button></span>
            <span><Button fillMode="outline" disabled>Disabled</Button></span>

            <span>primary</span>
            <span><Button fillMode="outline" themeColor="primary">Normal</Button></span>
            <span><Button fillMode="outline" themeColor="primary" hover >Hover</Button></span>
            <span><Button fillMode="outline" themeColor="primary" focus>Focus</Button></span>
            <span><Button fillMode="outline" themeColor="primary" active>Active</Button></span>
            <span><Button fillMode="outline" themeColor="primary" selected >Selected</Button></span>
            <span><Button fillMode="outline" themeColor="primary" disabled>Disabled</Button></span>

            <span>secondary</span>
            <span><Button fillMode="outline" themeColor="secondary">Normal</Button></span>
            <span><Button fillMode="outline" themeColor="secondary" hover>Hover</Button></span>
            <span><Button fillMode="outline" themeColor="secondary" focus>Focus</Button></span>
            <span><Button fillMode="outline" themeColor="secondary" active>Active</Button></span>
            <span><Button fillMode="outline" themeColor="secondary" selected>Selected</Button></span>
            <span><Button fillMode="outline" themeColor="secondary" disabled>Disabled</Button></span>

            <span>tertiary</span>
            <span><Button fillMode="outline" themeColor="tertiary">Normal</Button></span>
            <span><Button fillMode="outline" themeColor="tertiary" hover>Hover</Button></span>
            <span><Button fillMode="outline" themeColor="tertiary" focus>Focus</Button></span>
            <span><Button fillMode="outline" themeColor="tertiary" active>Active</Button></span>
            <span><Button fillMode="outline" themeColor="tertiary" selected>Selected</Button></span>
            <span><Button fillMode="outline" themeColor="tertiary" disabled>Disabled</Button></span>

            <span>info</span>
            <span><Button fillMode="outline" themeColor="info">Normal</Button></span>
            <span><Button fillMode="outline" themeColor="info" hover>Hover</Button></span>
            <span><Button fillMode="outline" themeColor="info" focus>Focus</Button></span>
            <span><Button fillMode="outline" themeColor="info" active>Active</Button></span>
            <span><Button fillMode="outline" themeColor="info" selected>Selected</Button></span>
            <span><Button fillMode="outline" themeColor="info" disabled>Disabled</Button></span>

            <span>success</span>
            <span><Button fillMode="outline" themeColor="success">Normal</Button></span>
            <span><Button fillMode="outline" themeColor="success" hover>Hover</Button></span>
            <span><Button fillMode="outline" themeColor="success" focus>Focus</Button></span>
            <span><Button fillMode="outline" themeColor="success" active>Active</Button></span>
            <span><Button fillMode="outline" themeColor="success" selected>Selected</Button></span>
            <span><Button fillMode="outline" themeColor="success" disabled>Disabled</Button></span>

            <span>warning</span>
            <span><Button fillMode="outline" themeColor="warning">Normal</Button></span>
            <span><Button fillMode="outline" themeColor="warning" hover>Hover</Button></span>
            <span><Button fillMode="outline" themeColor="warning" focus>Focus</Button></span>
            <span><Button fillMode="outline" themeColor="warning" active>Active</Button></span>
            <span><Button fillMode="outline" themeColor="warning" selected>Selected</Button></span>
            <span><Button fillMode="outline" themeColor="warning" disabled>Disabled</Button></span>

            <span>error</span>
            <span><Button fillMode="outline" themeColor="error">Normal</Button></span>
            <span><Button fillMode="outline" themeColor="error" hover>Hover</Button></span>
            <span><Button fillMode="outline" themeColor="error" focus>Focus</Button></span>
            <span><Button fillMode="outline" themeColor="error" active>Active</Button></span>
            <span><Button fillMode="outline" themeColor="error" selected>Selected</Button></span>
            <span><Button fillMode="outline" themeColor="error" disabled>Disabled</Button></span>

            <span>dark</span>
            <span><Button fillMode="outline" themeColor="dark">Normal</Button></span>
            <span><Button fillMode="outline" themeColor="dark" hover>Hover</Button></span>
            <span><Button fillMode="outline" themeColor="dark" focus>Focus</Button></span>
            <span><Button fillMode="outline" themeColor="dark" active>Active</Button></span>
            <span><Button fillMode="outline" themeColor="dark" selected>Selected</Button></span>
            <span><Button fillMode="outline" themeColor="dark" disabled>Disabled</Button></span>

            <span>light</span>
            <span><Button fillMode="outline" themeColor="light">Normal</Button></span>
            <span><Button fillMode="outline" themeColor="light" hover>Hover</Button></span>
            <span><Button fillMode="outline" themeColor="light" focus>Focus</Button></span>
            <span><Button fillMode="outline" themeColor="light" active>Active</Button></span>
            <span><Button fillMode="outline" themeColor="light" selected>Selected</Button></span>
            <span><Button fillMode="outline" themeColor="light" disabled>Disabled</Button></span>

            <span>inverse</span>
            <span><Button fillMode="outline" themeColor="inverse">Normal</Button></span>
            <span><Button fillMode="outline" themeColor="inverse" hover>Hover</Button></span>
            <span><Button fillMode="outline" themeColor="inverse" focus>Focus</Button></span>
            <span><Button fillMode="outline" themeColor="inverse" active>Active</Button></span>
            <span><Button fillMode="outline" themeColor="inverse" selected>Selected</Button></span>
            <span><Button fillMode="outline" themeColor="inverse" disabled>Disabled</Button></span>

        </div>

    </>
);
