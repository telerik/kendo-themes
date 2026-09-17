import { FloatingToolbarNormal } from '../templates/floating-toolbar-normal';

const styles = `
    .k-animation-container {
        position: relative;
    }

    .sticky-scroll-container {
        position: relative;
        height: 120px;
        overflow: auto;
        border: 1px solid rgba(0, 0, 0, .2);
    }

    .sticky-scroll-container .sticky-scroll-content {
        height: 400px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">
            <span className="k-colspan-all k-col-span-full">Sticky (engaged)</span>
            <section className="k-colspan-all k-col-span-full sticky-scroll-container">
                <FloatingToolbarNormal sticky />
                <div className="sticky-scroll-content"></div>
            </section>
        </div>
    </>
);
