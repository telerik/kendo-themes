import React from 'react';
import ReactDOM from 'react-dom/client';
import { Badge } from '../badge';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-9">

            <span></span>
            <span className="col-2">Rectangle</span>
            <span className="col-2">Rounded</span>
            <span className="col-2">Pill</span>
            <span className="col">Circle</span>
            <span className="col">Dot</span>


            <span>Primary</span>
            <span><Badge>Rectangle</Badge></span>
            <span><Badge></Badge></span>
            <span><Badge rounded="medium">Rounded</Badge></span>
            <span><Badge rounded="medium"></Badge></span>
            <span><Badge rounded="full">Pill</Badge></span>
            <span><Badge rounded="full"></Badge></span>
            <span><Badge rounded="full">1</Badge></span>
            <span><Badge rounded="full"></Badge></span>

            <span>^ outline</span>
            <span><Badge fillMode="outline">Rectangle</Badge></span>
            <span><Badge fillMode="outline"></Badge></span>
            <span><Badge fillMode="outline" rounded="medium">Rounded</Badge></span>
            <span><Badge fillMode="outline" rounded="medium"></Badge></span>
            <span><Badge fillMode="outline" rounded="full">Pill</Badge></span>
            <span><Badge fillMode="outline" rounded="full"></Badge></span>
            <span><Badge fillMode="outline" rounded="full">1</Badge></span>
            <span><Badge fillMode="outline" rounded="full"></Badge></span>

            <span>Secondary</span>
            <span><Badge themeColor="secondary">Rectangle</Badge></span>
            <span><Badge themeColor="secondary"></Badge></span>
            <span><Badge themeColor="secondary" rounded="medium">Rounded</Badge></span>
            <span><Badge themeColor="secondary" rounded="medium"></Badge></span>
            <span><Badge themeColor="secondary" rounded="full">Pill</Badge></span>
            <span><Badge themeColor="secondary" rounded="full"></Badge></span>
            <span><Badge themeColor="secondary" rounded="full">1</Badge></span>
            <span><Badge themeColor="secondary" rounded="full"></Badge></span>

            <span>^ outline</span>
            <span><Badge fillMode="outline" themeColor="secondary">Rectangle</Badge></span>
            <span><Badge fillMode="outline" themeColor="secondary"></Badge></span>
            <span><Badge fillMode="outline" themeColor="secondary" rounded="medium">Rounded</Badge></span>
            <span><Badge fillMode="outline" themeColor="secondary" rounded="medium"></Badge></span>
            <span><Badge fillMode="outline" themeColor="secondary" rounded="full">Pill</Badge></span>
            <span><Badge fillMode="outline" themeColor="secondary" rounded="full"></Badge></span>
            <span><Badge fillMode="outline" themeColor="secondary" rounded="full">1</Badge></span>
            <span><Badge fillMode="outline" themeColor="secondary" rounded="full"></Badge></span>

            <span>Tertiary</span>
            <span><Badge themeColor="tertiary">Rectangle</Badge></span>
            <span><Badge themeColor="tertiary"></Badge></span>
            <span><Badge themeColor="tertiary" rounded="medium">Rounded</Badge></span>
            <span><Badge themeColor="tertiary" rounded="medium"></Badge></span>
            <span><Badge themeColor="tertiary" rounded="full">Pill</Badge></span>
            <span><Badge themeColor="tertiary" rounded="full"></Badge></span>
            <span><Badge themeColor="tertiary" rounded="full">1</Badge></span>
            <span><Badge themeColor="tertiary" rounded="full"></Badge></span>

            <span>^ outline</span>
            <span><Badge fillMode="outline" themeColor="tertiary">Rectangle</Badge></span>
            <span><Badge fillMode="outline" themeColor="tertiary"></Badge></span>
            <span><Badge fillMode="outline" themeColor="tertiary" rounded="medium">Rounded</Badge></span>
            <span><Badge fillMode="outline" themeColor="tertiary" rounded="medium"></Badge></span>
            <span><Badge fillMode="outline" themeColor="tertiary" rounded="full">Pill</Badge></span>
            <span><Badge fillMode="outline" themeColor="tertiary" rounded="full"></Badge></span>
            <span><Badge fillMode="outline" themeColor="tertiary" rounded="full">1</Badge></span>
            <span><Badge fillMode="outline" themeColor="tertiary" rounded="full"></Badge></span>

            <span>Info</span>
            <span><Badge themeColor="info">Rectangle</Badge></span>
            <span><Badge themeColor="info"></Badge></span>
            <span><Badge themeColor="info" rounded="medium">Rounded</Badge></span>
            <span><Badge themeColor="info" rounded="medium"></Badge></span>
            <span><Badge themeColor="info" rounded="full">Pill</Badge></span>
            <span><Badge themeColor="info" rounded="full"></Badge></span>
            <span><Badge themeColor="info" rounded="full">1</Badge></span>
            <span><Badge themeColor="info" rounded="full"></Badge></span>

            <span>^ outline</span>
            <span><Badge fillMode="outline" themeColor="info">Rectangle</Badge></span>
            <span><Badge fillMode="outline" themeColor="info"></Badge></span>
            <span><Badge fillMode="outline" themeColor="info" rounded="medium">Rounded</Badge></span>
            <span><Badge fillMode="outline" themeColor="info" rounded="medium"></Badge></span>
            <span><Badge fillMode="outline" themeColor="info" rounded="full">Pill</Badge></span>
            <span><Badge fillMode="outline" themeColor="info" rounded="full"></Badge></span>
            <span><Badge fillMode="outline" themeColor="info" rounded="full">1</Badge></span>
            <span><Badge fillMode="outline" themeColor="info" rounded="full"></Badge></span>


            <span>Success</span>
            <span><Badge themeColor="success">Rectangle</Badge></span>
            <span><Badge themeColor="success"></Badge></span>
            <span><Badge themeColor="success" rounded="medium">Rounded</Badge></span>
            <span><Badge themeColor="success" rounded="medium"></Badge></span>
            <span><Badge themeColor="success" rounded="full">Pill</Badge></span>
            <span><Badge themeColor="success" rounded="full"></Badge></span>
            <span><Badge themeColor="success" rounded="full">1</Badge></span>
            <span><Badge themeColor="success" rounded="full"></Badge></span>

            <span>^ outline</span>
            <span><Badge fillMode="outline" themeColor="success">Rectangle</Badge></span>
            <span><Badge fillMode="outline" themeColor="success"></Badge></span>
            <span><Badge fillMode="outline" themeColor="success" rounded="medium">Rounded</Badge></span>
            <span><Badge fillMode="outline" themeColor="success" rounded="medium"></Badge></span>
            <span><Badge fillMode="outline" themeColor="success" rounded="full">Pill</Badge></span>
            <span><Badge fillMode="outline" themeColor="success" rounded="full"></Badge></span>
            <span><Badge fillMode="outline" themeColor="success" rounded="full">1</Badge></span>
            <span><Badge fillMode="outline" themeColor="success" rounded="full"></Badge></span>

            <span>Warning</span>
            <span><Badge themeColor="warning">Rectangle</Badge></span>
            <span><Badge themeColor="warning"></Badge></span>
            <span><Badge themeColor="warning" rounded="medium">Rounded</Badge></span>
            <span><Badge themeColor="warning" rounded="medium"></Badge></span>
            <span><Badge themeColor="warning" rounded="full">Pill</Badge></span>
            <span><Badge themeColor="warning" rounded="full"></Badge></span>
            <span><Badge themeColor="warning" rounded="full">1</Badge></span>
            <span><Badge themeColor="warning" rounded="full"></Badge></span>

            <span>^ outline</span>
            <span><Badge fillMode="outline" themeColor="warning">Rectangle</Badge></span>
            <span><Badge fillMode="outline" themeColor="warning"></Badge></span>
            <span><Badge fillMode="outline" themeColor="warning" rounded="medium">Rounded</Badge></span>
            <span><Badge fillMode="outline" themeColor="warning" rounded="medium"></Badge></span>
            <span><Badge fillMode="outline" themeColor="warning" rounded="full">Pill</Badge></span>
            <span><Badge fillMode="outline" themeColor="warning" rounded="full"></Badge></span>
            <span><Badge fillMode="outline" themeColor="warning" rounded="full">1</Badge></span>
            <span><Badge fillMode="outline" themeColor="warning" rounded="full"></Badge></span>


            <span>Error</span>
            <span><Badge themeColor="error">Rectangle</Badge></span>
            <span><Badge themeColor="error"></Badge></span>
            <span><Badge themeColor="error" rounded="medium">Rounded</Badge></span>
            <span><Badge themeColor="error" rounded="medium"></Badge></span>
            <span><Badge themeColor="error" rounded="full">Pill</Badge></span>
            <span><Badge themeColor="error" rounded="full"></Badge></span>
            <span><Badge themeColor="error" rounded="full">1</Badge></span>
            <span><Badge themeColor="error" rounded="full"></Badge></span>

            <span>^ outline</span>
            <span><Badge fillMode="outline" themeColor="error">Rectangle</Badge></span>
            <span><Badge fillMode="outline" themeColor="error"></Badge></span>
            <span><Badge fillMode="outline" themeColor="error" rounded="medium">Rounded</Badge></span>
            <span><Badge fillMode="outline" themeColor="error" rounded="medium"></Badge></span>
            <span><Badge fillMode="outline" themeColor="error" rounded="full">Pill</Badge></span>
            <span><Badge fillMode="outline" themeColor="error" rounded="full"></Badge></span>
            <span><Badge fillMode="outline" themeColor="error" rounded="full">1</Badge></span>
            <span><Badge fillMode="outline" themeColor="error" rounded="full"></Badge></span>


            <span>Dark</span>
            <span><Badge themeColor="dark">Rectangle</Badge></span>
            <span><Badge themeColor="dark"></Badge></span>
            <span><Badge themeColor="dark" rounded="medium">Rounded</Badge></span>
            <span><Badge themeColor="dark" rounded="medium"></Badge></span>
            <span><Badge themeColor="dark" rounded="full">Pill</Badge></span>
            <span><Badge themeColor="dark" rounded="full"></Badge></span>
            <span><Badge themeColor="dark" rounded="full">1</Badge></span>
            <span><Badge themeColor="dark" rounded="full"></Badge></span>

            <span>^ outline</span>
            <span><Badge fillMode="outline" themeColor="dark">Rectangle</Badge></span>
            <span><Badge fillMode="outline" themeColor="dark"></Badge></span>
            <span><Badge fillMode="outline" themeColor="dark" rounded="medium">Rounded</Badge></span>
            <span><Badge fillMode="outline" themeColor="dark" rounded="medium"></Badge></span>
            <span><Badge fillMode="outline" themeColor="dark" rounded="full">Pill</Badge></span>
            <span><Badge fillMode="outline" themeColor="dark" rounded="full"></Badge></span>
            <span><Badge fillMode="outline" themeColor="dark" rounded="full">1</Badge></span>
            <span><Badge fillMode="outline" themeColor="dark" rounded="full"></Badge></span>


            <span>light</span>
            <span><Badge themeColor="light">Rectangle</Badge></span>
            <span><Badge themeColor="light"></Badge></span>
            <span><Badge themeColor="light" rounded="medium">Rounded</Badge></span>
            <span><Badge themeColor="light" rounded="medium"></Badge></span>
            <span><Badge themeColor="light" rounded="full">Pill</Badge></span>
            <span><Badge themeColor="light" rounded="full"></Badge></span>
            <span><Badge themeColor="light" rounded="full">1</Badge></span>
            <span><Badge themeColor="light" rounded="full"></Badge></span>

            <span>^ outline</span>
            <span><Badge fillMode="outline" themeColor="light">Rectangle</Badge></span>
            <span><Badge fillMode="outline" themeColor="light"></Badge></span>
            <span><Badge fillMode="outline" themeColor="light" rounded="medium">Rounded</Badge></span>
            <span><Badge fillMode="outline" themeColor="light" rounded="medium"></Badge></span>
            <span><Badge fillMode="outline" themeColor="light" rounded="full">Pill</Badge></span>
            <span><Badge fillMode="outline" themeColor="light" rounded="full"></Badge></span>
            <span><Badge fillMode="outline" themeColor="light" rounded="full">1</Badge></span>
            <span><Badge fillMode="outline" themeColor="light" rounded="full"></Badge></span>

            <span>Inverse</span>
            <span><Badge themeColor="inverse">Rectangle</Badge></span>
            <span><Badge themeColor="inverse"></Badge></span>
            <span><Badge themeColor="inverse" rounded="medium">Rounded</Badge></span>
            <span><Badge themeColor="inverse" rounded="medium"></Badge></span>
            <span><Badge themeColor="inverse" rounded="full">Pill</Badge></span>
            <span><Badge themeColor="inverse" rounded="full"></Badge></span>
            <span><Badge themeColor="inverse" rounded="full">1</Badge></span>
            <span><Badge themeColor="inverse" rounded="full"></Badge></span>

            <span>^ outline</span>
            <span><Badge fillMode="outline" themeColor="inverse">Rectangle</Badge></span>
            <span><Badge fillMode="outline" themeColor="inverse"></Badge></span>
            <span><Badge fillMode="outline" themeColor="inverse" rounded="medium">Rounded</Badge></span>
            <span><Badge fillMode="outline" themeColor="inverse" rounded="medium"></Badge></span>
            <span><Badge fillMode="outline" themeColor="inverse" rounded="full">Pill</Badge></span>
            <span><Badge fillMode="outline" themeColor="inverse" rounded="full"></Badge></span>
            <span><Badge fillMode="outline" themeColor="inverse" rounded="full">1</Badge></span>
            <span><Badge fillMode="outline" themeColor="inverse" rounded="full"></Badge></span>

        </div>
    </>
);
