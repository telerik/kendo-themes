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

            <span>DragHandle Normal</span>
            <span>DragHandle Focus</span>
            <span>DragHandle Hover</span>

            <section>
                <ColorGradient />
            </section>

            <section>
                <ColorGradient focusHandle />
            </section>

            <section>
                <ColorGradient hoverHandle />
            </section>
        </div>
    </>
);
