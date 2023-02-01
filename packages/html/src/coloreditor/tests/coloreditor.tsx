import ReactDOM from 'react-dom/client';
import { ColorEditor } from '../../coloreditor';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    .k-hue-slider {
        --kendo-slider-start: 0;
        --kendo-slider-end: 0;
    }
    .k-alpha-slider {
        --kendo-slider-start: 0;
        --kendo-slider-end: 100;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <span>Single View</span>

            <section>
                <ColorEditor currentColor="fuchsia"/>
            </section>
        </div>
    </>
);
