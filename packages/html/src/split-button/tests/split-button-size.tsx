import React from 'react';
import ReactDOM from 'react-dom/client';
import { SplitButton } from '../../split-button';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    #test-area {
        max-width: 1240px;
        grid-template-columns: 80px 320px 320px 1fr;
    }
    small,
    section {
        white-space: nowrap;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <span><small>rounded / size</small></span>
            <span>small</span>
            <span>medium</span>
            <span>large</span>

            <span>null</span>
            <section>
                <SplitButton size="small" rounded={null}>Button</SplitButton>
                <SplitButton size="small" rounded={null} icon="folder">Button</SplitButton>
                <SplitButton size="small" rounded={null} icon="folder"></SplitButton>
            </section>
            <section>
                <SplitButton size="medium" rounded={null}>Button</SplitButton>
                <SplitButton size="medium" rounded={null} icon="folder">Button</SplitButton>
                <SplitButton size="medium" rounded={null} icon="folder"></SplitButton>
            </section>
            <section>
                <SplitButton size="large" rounded={null}>Button</SplitButton>
                <SplitButton size="large" rounded={null} icon="folder">Button</SplitButton>
                <SplitButton size="large" rounded={null} icon="folder"></SplitButton>
            </section>

            <span>small</span>
            <section>
                <SplitButton size="small" rounded="small">Button</SplitButton>
                <SplitButton size="small" rounded="small" icon="folder">Button</SplitButton>
                <SplitButton size="small" rounded="small" icon="folder"></SplitButton>
            </section>
            <section>
                <SplitButton size="medium" rounded="small">Button</SplitButton>
                <SplitButton size="medium" rounded="small" icon="folder">Button</SplitButton>
                <SplitButton size="medium" rounded="small" icon="folder"></SplitButton>
            </section>
            <section>
                <SplitButton size="large" rounded="small">Button</SplitButton>
                <SplitButton size="large" rounded="small" icon="folder">Button</SplitButton>
                <SplitButton size="large" rounded="small" icon="folder"></SplitButton>
            </section>

            <span>medium</span>
            <section>
                <SplitButton size="small">Button</SplitButton>
                <SplitButton size="small" icon="folder">Button</SplitButton>
                <SplitButton size="small" icon="folder"></SplitButton>
            </section>
            <section>
                <SplitButton size="medium">Button</SplitButton>
                <SplitButton size="medium" icon="folder">Button</SplitButton>
                <SplitButton size="medium" icon="folder"></SplitButton>
            </section>
            <section>
                <SplitButton size="large">Button</SplitButton>
                <SplitButton size="large" icon="folder">Button</SplitButton>
                <SplitButton size="large" icon="folder"></SplitButton>
            </section>

            <span>large</span>
            <section>
                <SplitButton size="small" rounded="large">Button</SplitButton>
                <SplitButton size="small" rounded="large" icon="folder">Button</SplitButton>
                <SplitButton size="small" rounded="large" icon="folder"></SplitButton>
            </section>
            <section>
                <SplitButton size="medium" rounded="large">Button</SplitButton>
                <SplitButton size="medium" rounded="large" icon="folder">Button</SplitButton>
                <SplitButton size="medium" rounded="large" icon="folder"></SplitButton>
            </section>
            <section>
                <SplitButton size="large" rounded="large">Button</SplitButton>
                <SplitButton size="large" rounded="large" icon="folder">Button</SplitButton>
                <SplitButton size="large" rounded="large" icon="folder"></SplitButton>
            </section>

            <span>full</span>
            <section>
                <SplitButton size="small" rounded="full">Button</SplitButton>
                <SplitButton size="small" rounded="full" icon="folder">Button</SplitButton>
                <SplitButton size="small" rounded="full" icon="folder"></SplitButton>
            </section>
            <section>
                <SplitButton size="medium" rounded="full">Button</SplitButton>
                <SplitButton size="medium" rounded="full" icon="folder">Button</SplitButton>
                <SplitButton size="medium" rounded="full" icon="folder"></SplitButton>
            </section>
            <section>
                <SplitButton size="large" rounded="full">Button</SplitButton>
                <SplitButton size="large" rounded="full" icon="folder">Button</SplitButton>
                <SplitButton size="large" rounded="full" icon="folder"></SplitButton>
            </section>
        </div>
    </>
);
