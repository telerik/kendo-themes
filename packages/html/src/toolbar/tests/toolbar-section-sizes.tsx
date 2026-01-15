import { ToolbarSection } from '../templates/toolbar-section';
import Toolbar from '../toolbar.spec';


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
            { Toolbar.options.size.map((size) => (
            <section className="k-colspan-all k-col-span-full toolbar-popup-section">
                <span>{`${size}`} Toolbar Popup Section</span>
                <ToolbarSection size={`${size}`} />
            </section>
            ))}
        </div>
    </>
);
