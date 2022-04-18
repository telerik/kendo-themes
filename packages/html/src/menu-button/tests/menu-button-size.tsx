import React from 'react';
import ReactDOM from 'react-dom/client';
import { MenuButton } from '../../menu-button';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const style = `
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
        <style>{style}</style>
        <div id="test-area" className="k-d-grid">

            <span><small>rounded / size</small></span>
            <span>small</span>
            <span>medium</span>
            <span>large</span>

            <span>null</span>
            <section>
                <MenuButton size="small" rounded={null} text="Button"></MenuButton>
                <MenuButton size="small" rounded={null} icon="folder" text="Button"></MenuButton>
                <MenuButton size="small" rounded={null} icon="folder"></MenuButton>
            </section>
            <section>
                <MenuButton size="medium" rounded={null} text="Button"></MenuButton>
                <MenuButton size="medium" rounded={null} icon="folder" text="Button"></MenuButton>
                <MenuButton size="medium" rounded={null} icon="folder"></MenuButton>
            </section>
            <section>
                <MenuButton size="large" rounded={null} text="Button"></MenuButton>
                <MenuButton size="large" rounded={null} icon="folder" text="Button"></MenuButton>
                <MenuButton size="large" rounded={null} icon="folder"></MenuButton>
            </section>

            <span>small</span>
            <section>
                <MenuButton size="small" rounded="small" text="Button"></MenuButton>
                <MenuButton size="small" rounded="small" icon="folder" text="Button"></MenuButton>
                <MenuButton size="small" rounded="small" icon="folder"></MenuButton>
            </section>
            <section>
                <MenuButton size="medium" rounded="small" text="Button"></MenuButton>
                <MenuButton size="medium" rounded="small" icon="folder" text="Button"></MenuButton>
                <MenuButton size="medium" rounded="small" icon="folder"></MenuButton>
            </section>
            <section>
                <MenuButton size="large" rounded="small" text="Button"></MenuButton>
                <MenuButton size="large" rounded="small" icon="folder" text="Button"></MenuButton>
                <MenuButton size="large" rounded="small" icon="folder"></MenuButton>
            </section>

            <span>medium</span>
            <section>
                <MenuButton size="small" text="Button"></MenuButton>
                <MenuButton size="small" icon="folder" text="Button"></MenuButton>
                <MenuButton size="small" icon="folder"></MenuButton>
            </section>
            <section>
                <MenuButton size="medium" text="Button"></MenuButton>
                <MenuButton size="medium" icon="folder" text="Button"></MenuButton>
                <MenuButton size="medium" icon="folder"></MenuButton>
            </section>
            <section>
                <MenuButton size="large" text="Button"></MenuButton>
                <MenuButton size="large" icon="folder" text="Button"></MenuButton>
                <MenuButton size="large" icon="folder"></MenuButton>
            </section>

            <span>large</span>
            <section>
                <MenuButton size="small" rounded="large" text="Button"></MenuButton>
                <MenuButton size="small" rounded="large" icon="folder" text="Button"></MenuButton>
                <MenuButton size="small" rounded="large" icon="folder"></MenuButton>
            </section>
            <section>
                <MenuButton size="medium" rounded="large" text="Button"></MenuButton>
                <MenuButton size="medium" rounded="large" icon="folder" text="Button"></MenuButton>
                <MenuButton size="medium" rounded="large" icon="folder"></MenuButton>
            </section>
            <section>
                <MenuButton size="large" rounded="large" text="Button"></MenuButton>
                <MenuButton size="large" rounded="large" icon="folder" text="Button"></MenuButton>
                <MenuButton size="large" rounded="large" icon="folder"></MenuButton>
            </section>

            <span>full</span>
            <section>
                <MenuButton size="small" rounded="full" text="Button"></MenuButton>
                <MenuButton size="small" rounded="full" icon="folder" text="Button"></MenuButton>
                <MenuButton size="small" rounded="full" icon="folder"></MenuButton>
            </section>
            <section>
                <MenuButton size="medium" rounded="full" text="Button"></MenuButton>
                <MenuButton size="medium" rounded="full" icon="folder" text="Button"></MenuButton>
                <MenuButton size="medium" rounded="full" icon="folder"></MenuButton>
            </section>
            <section>
                <MenuButton size="large" rounded="full" text="Button"></MenuButton>
                <MenuButton size="large" rounded="full" icon="folder" text="Button"></MenuButton>
                <MenuButton size="large" rounded="full" icon="folder"></MenuButton>
            </section>

        </div>
    </>
);
