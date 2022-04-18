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
            <span><Button fillMode="flat">Normal</Button></span>
            <span><Button fillMode="flat" hover>Hover</Button></span>
            <span><Button fillMode="flat" focus>Focus</Button></span>
            <span><Button fillMode="flat" active>Active</Button></span>
            <span><Button fillMode="flat" selected>Selected</Button></span>
            <span><Button fillMode="flat" disabled>Disabled</Button></span>

            <span>primary</span>
            <span><Button fillMode="flat" themeColor="primary">Normal</Button></span>
            <span><Button fillMode="flat" themeColor="primary" hover >Hover</Button></span>
            <span><Button fillMode="flat" themeColor="primary" focus>Focus</Button></span>
            <span><Button fillMode="flat" themeColor="primary" active>Active</Button></span>
            <span><Button fillMode="flat" themeColor="primary" selected >Selected</Button></span>
            <span><Button fillMode="flat" themeColor="primary" disabled>Disabled</Button></span>

            <span>secondary</span>
            <span><Button fillMode="flat" themeColor="secondary">Normal</Button></span>
            <span><Button fillMode="flat" themeColor="secondary" hover>Hover</Button></span>
            <span><Button fillMode="flat" themeColor="secondary" focus>Focus</Button></span>
            <span><Button fillMode="flat" themeColor="secondary" active>Active</Button></span>
            <span><Button fillMode="flat" themeColor="secondary" selected>Selected</Button></span>
            <span><Button fillMode="flat" themeColor="secondary" disabled>Disabled</Button></span>

            <span>tertiary</span>
            <span><Button fillMode="flat" themeColor="tertiary">Normal</Button></span>
            <span><Button fillMode="flat" themeColor="tertiary" hover>Hover</Button></span>
            <span><Button fillMode="flat" themeColor="tertiary" focus>Focus</Button></span>
            <span><Button fillMode="flat" themeColor="tertiary" active>Active</Button></span>
            <span><Button fillMode="flat" themeColor="tertiary" selected>Selected</Button></span>
            <span><Button fillMode="flat" themeColor="tertiary" disabled>Disabled</Button></span>

            <span>info</span>
            <span><Button fillMode="flat" themeColor="info">Normal</Button></span>
            <span><Button fillMode="flat" themeColor="info" hover>Hover</Button></span>
            <span><Button fillMode="flat" themeColor="info" focus>Focus</Button></span>
            <span><Button fillMode="flat" themeColor="info" active>Active</Button></span>
            <span><Button fillMode="flat" themeColor="info" selected>Selected</Button></span>
            <span><Button fillMode="flat" themeColor="info" disabled>Disabled</Button></span>

            <span>success</span>
            <span><Button fillMode="flat" themeColor="success">Normal</Button></span>
            <span><Button fillMode="flat" themeColor="success" hover>Hover</Button></span>
            <span><Button fillMode="flat" themeColor="success" focus>Focus</Button></span>
            <span><Button fillMode="flat" themeColor="success" active>Active</Button></span>
            <span><Button fillMode="flat" themeColor="success" selected>Selected</Button></span>
            <span><Button fillMode="flat" themeColor="success" disabled>Disabled</Button></span>

            <span>warning</span>
            <span><Button fillMode="flat" themeColor="warning">Normal</Button></span>
            <span><Button fillMode="flat" themeColor="warning" hover>Hover</Button></span>
            <span><Button fillMode="flat" themeColor="warning" focus>Focus</Button></span>
            <span><Button fillMode="flat" themeColor="warning" active>Active</Button></span>
            <span><Button fillMode="flat" themeColor="warning" selected>Selected</Button></span>
            <span><Button fillMode="flat" themeColor="warning" disabled>Disabled</Button></span>

            <span>error</span>
            <span><Button fillMode="flat" themeColor="error">Normal</Button></span>
            <span><Button fillMode="flat" themeColor="error" hover>Hover</Button></span>
            <span><Button fillMode="flat" themeColor="error" focus>Focus</Button></span>
            <span><Button fillMode="flat" themeColor="error" active>Active</Button></span>
            <span><Button fillMode="flat" themeColor="error" selected>Selected</Button></span>
            <span><Button fillMode="flat" themeColor="error" disabled>Disabled</Button></span>

            <span>dark</span>
            <span><Button fillMode="flat" themeColor="dark">Normal</Button></span>
            <span><Button fillMode="flat" themeColor="dark" hover>Hover</Button></span>
            <span><Button fillMode="flat" themeColor="dark" focus>Focus</Button></span>
            <span><Button fillMode="flat" themeColor="dark" active>Active</Button></span>
            <span><Button fillMode="flat" themeColor="dark" selected>Selected</Button></span>
            <span><Button fillMode="flat" themeColor="dark" disabled>Disabled</Button></span>

            <span>light</span>
            <span><Button fillMode="flat" themeColor="light">Normal</Button></span>
            <span><Button fillMode="flat" themeColor="light" hover>Hover</Button></span>
            <span><Button fillMode="flat" themeColor="light" focus>Focus</Button></span>
            <span><Button fillMode="flat" themeColor="light" active>Active</Button></span>
            <span><Button fillMode="flat" themeColor="light" selected>Selected</Button></span>
            <span><Button fillMode="flat" themeColor="light" disabled>Disabled</Button></span>

            <span>inverse</span>
            <span><Button fillMode="flat" themeColor="inverse">Normal</Button></span>
            <span><Button fillMode="flat" themeColor="inverse" hover>Hover</Button></span>
            <span><Button fillMode="flat" themeColor="inverse" focus>Focus</Button></span>
            <span><Button fillMode="flat" themeColor="inverse" active>Active</Button></span>
            <span><Button fillMode="flat" themeColor="inverse" selected>Selected</Button></span>
            <span><Button fillMode="flat" themeColor="inverse" disabled>Disabled</Button></span>

        </div>

    </>
);
