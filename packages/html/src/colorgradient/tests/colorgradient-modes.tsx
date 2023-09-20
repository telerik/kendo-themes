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
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <span>RGBA</span>
            <span>RGB</span>
            <section>
                <ColorGradientNormal />
            </section>

            <section>
                <ColorGradientNormal mode="rgb" />
            </section>

            <span>HSVA</span>
            <span>HSV</span>

            <section>
                <ColorGradientNormal mode="hsva" />
            </section>

            <section>
                <ColorGradientNormal mode="hsv" />
            </section>

            <span>HEX</span>
            <span></span>

            <section>
                <ColorGradientNormal mode="hex" />
            </section>
        </div>
    </>
);
