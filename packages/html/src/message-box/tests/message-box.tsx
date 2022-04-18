import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    #test-area {
        grid-template-columns: 200px 1fr;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <span>Freeform</span>
            <section>
                <div className="k-messagebox">
                    <p>The quick brown fox jumps over the lazy dog.</p>
                    <p>Adjacent paragraph</p>
                </div>
            </section>

            <span>Primary</span>
            <div className="k-messagebox k-messagebox-primary">
                The quick brown fox jumps over the lazy dog.
                <a href="http://example.com">Link</a>.
            </div>

            <span>Secondary</span>
            <div className="k-messagebox k-messagebox-secondary">
                The quick brown fox jumps over the lazy dog.
                <a href="http://example.com">Link</a>.
            </div>

            <span>Tertiary</span>
            <div className="k-messagebox k-messagebox-tertiary">
                The quick brown fox jumps over the lazy dog.
                <a href="http://example.com">Link</a>.
            </div>

            <span>Info</span>
            <div className="k-messagebox k-messagebox-info">
                The quick brown fox jumps over the lazy dog.
                <a href="http://example.com">Link</a>.
            </div>

            <span>Success</span>
            <div className="k-messagebox k-messagebox-success">
                The quick brown fox jumps over the lazy dog.
                <a href="http://example.com">Link</a>.
            </div>

            <span>Warning</span>
            <div className="k-messagebox k-messagebox-warning">
                The quick brown fox jumps over the lazy dog.
                <a href="http://example.com">Link</a>.
            </div>

            <span>Error</span>
            <div className="k-messagebox k-messagebox-error">
                The quick brown fox jumps over the lazy dog.
                <a href="http://example.com">Link</a>.
            </div>

            <span>Dark</span>
            <div className="k-messagebox k-messagebox-dark">
                The quick brown fox jumps over the lazy dog.
                <a href="http://example.com">Link</a>.
            </div>

            <span>Light</span>
            <div className="k-messagebox k-messagebox-light">
                The quick brown fox jumps over the lazy dog.
                <a href="http://example.com">Link</a>.
            </div>

            <span>Inverse</span>
            <div className="k-messagebox k-messagebox-inverse">
                The quick brown fox jumps over the lazy dog.
                <a href="http://example.com">Link</a>.
            </div>

        </div>
    </>
);
