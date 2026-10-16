import { FloatingToolbarNormal } from '../templates/floating-toolbar-normal';

const styles = `
    .k-animation-container {
        position: relative;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">
            <span className="k-colspan-all k-col-span-full">Draggable</span>
            <section className="k-colspan-all k-col-span-full">
                <FloatingToolbarNormal draggable />
            </section>

            <span className="k-colspan-all k-col-span-full">Draggable + Scrollable</span>
            <section className="k-colspan-all k-col-span-full">
                <FloatingToolbarNormal draggable scrollable scrollButtons="hidden" style={{ maxWidth: 320 }} />
            </section>
        </div>
    </>
);
