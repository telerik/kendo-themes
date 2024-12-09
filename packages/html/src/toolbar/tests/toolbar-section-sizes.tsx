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
                <span>Small Toolbar Popup Section</span>
                <ToolbarSection size="small" />
            </section>

            <section className="k-colspan-all k-col-span-full toolbar-popup-section">
                <span>Medium Toolbar Popup Section</span>
                <ToolbarSection size="medium" />
            </section>

            <section className="k-colspan-all k-col-span-full toolbar-popup-section">
                <span>Large Toolbar Popup Section</span>
                <ToolbarSection size="large" />
            </section>

        </div>
    </>
);
