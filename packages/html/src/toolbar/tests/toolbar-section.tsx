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

            <section className="k-colspan-all k-col-span-full toolbar-popup-section">
                <span>Toolbar Popup Section</span>
                <ToolbarSection />
            </section>

            <section className="k-colspan-all k-col-span-full toolbar-popup-section">
                <span >Toolbar Popup Section Outline</span>
                <ToolbarSection fillMode="outline" />
            </section>

            <section className="k-colspan-all k-col-span-full toolbar-popup-section">
                <span>Toolbar Popup Section Flat</span>
                <ToolbarSection fillMode="flat" />
            </section>

        </div>
    </>
);
