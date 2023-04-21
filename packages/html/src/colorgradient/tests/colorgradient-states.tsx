import ReactDOM from 'react-dom/client';
import { ColorGradient } from '../../colorgradient';

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
        <div id="test-area" className="k-d-grid k-grid-cols-3">
            <span>Focus</span>
            <span>Disabled</span>
            <span>Read Only</span>

            <section>
                <ColorGradient focus />
            </section>

            <section>
                <ColorGradient disabled />
            </section>
            <section>

                <ColorGradient readonly dragHandleStyle={{ top: "0", left: "0" }}/>
            </section>
        </div>
    </>
);
