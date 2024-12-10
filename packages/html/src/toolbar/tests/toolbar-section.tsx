import { ToolbarSection } from '../templates/toolbar-section';


const styles = `
    .k-animation-container {
        width: 100%;
    }

    .toolbar-popup-section {
        position: relative;
        height: 200px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span className="k-colspan-full k-col-span-full">Toolbar Popup Section</span>
            <section className="k-colspan-1 k-col-span-1 toolbar-popup-section">
                <ToolbarSection />
            </section>

            <span className="k-colspan-full k-col-span-full">Toolbar Popup Section Flat</span>
            <section className="k-colspan-1 k-col-span-1 toolbar-popup-section">
                <ToolbarSection fillMode="flat" />
            </section>

            <span className="k-colspan-full k-col-span-full">Toolbar Popup Section</span>
            <section className="k-colspan-1 k-col-span-1 toolbar-popup-section">
                <ToolbarSection fillMode="outline" />
            </section>

        </div>
    </>
);
