import { ColorGradientNormal } from '../../colorgradient';


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

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            <span>DragHandle Normal</span>
            <span>DragHandle Focus</span>
            <span>DragHandle Hover</span>

            <section>
                <ColorGradientNormal />
            </section>

            <section>
                <ColorGradientNormal focusHandle />
            </section>

            <section>
                <ColorGradientNormal hoverHandle />
            </section>
        </div>
    </>
);
