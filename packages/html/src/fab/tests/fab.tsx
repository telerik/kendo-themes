import React from 'react';
import ReactDOM from 'react-dom/client';
import { FloatingActionButton } from '../../fab';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    #test-area {
        grid-template-columns: 200px repeat(3, 1fr);
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <span></span>
            <span>Text</span>
            <span>Text + Icon</span>
            <span>Icon</span>

            <span>primary</span>
            <span>
                <FloatingActionButton themeColor="primary" text="Create" />
            </span>
            <span>
                <FloatingActionButton themeColor="primary" icon="plus" text="Create" />
            </span>
            <span>
                <FloatingActionButton themeColor="primary" icon="plus" />
            </span>

            <span>secondary</span>
            <span>
                <FloatingActionButton themeColor="secondary" text="Create" />
            </span>
            <span>
                <FloatingActionButton themeColor="secondary" icon="plus" text="Create" />
            </span>
            <span>
                <FloatingActionButton themeColor="secondary" icon="plus" />
            </span>

            <span>tertiary</span>
            <span>
                <FloatingActionButton themeColor="tertiary" text="Create" />
            </span>
            <span>
                <FloatingActionButton themeColor="tertiary" icon="plus" text="Create" />
            </span>
            <span>
                <FloatingActionButton themeColor="tertiary" icon="plus" />
            </span>

            <span>info</span>
            <span>
                <FloatingActionButton themeColor="info" text="Create" />
            </span>
            <span>
                <FloatingActionButton themeColor="info" icon="plus" text="Create" />
            </span>
            <span>
                <FloatingActionButton themeColor="info" icon="plus" />
            </span>

            <span>success</span>
            <span>
                <FloatingActionButton themeColor="success" text="Create" />
            </span>
            <span>
                <FloatingActionButton themeColor="success" icon="plus" text="Create" />
            </span>
            <span>
                <FloatingActionButton themeColor="success" icon="plus" />
            </span>

            <span>warning</span>
            <span>
                <FloatingActionButton themeColor="warning" text="Create" />
            </span>
            <span>
                <FloatingActionButton themeColor="warning" icon="plus" text="Create" />
            </span>
            <span>
                <FloatingActionButton themeColor="warning" icon="plus" />
            </span>

            <span>error</span>
            <span>
                <FloatingActionButton themeColor="error" text="Create" />
            </span>
            <span>
                <FloatingActionButton themeColor="error" icon="plus" text="Create" />
            </span>
            <span>
                <FloatingActionButton themeColor="error" icon="plus" />
            </span>

            <span>dark</span>
            <span>
                <FloatingActionButton themeColor="dark" text="Create" />
            </span>
            <span>
                <FloatingActionButton themeColor="dark" icon="plus" text="Create" />
            </span>
            <span>
                <FloatingActionButton themeColor="dark" icon="plus" />
            </span>

            <span>light</span>
            <span>
                <FloatingActionButton themeColor="light" text="Create" />
            </span>
            <span>
                <FloatingActionButton themeColor="light" icon="plus" text="Create" />
            </span>
            <span>
                <FloatingActionButton themeColor="light" icon="plus" />
            </span>

            <span>inverse</span>
            <span>
                <FloatingActionButton themeColor="inverse" text="Create" />
            </span>
            <span>
                <FloatingActionButton themeColor="inverse" icon="plus" text="Create" />
            </span>
            <span>
                <FloatingActionButton themeColor="inverse" icon="plus" />
            </span>
        </div>
    </>
);
