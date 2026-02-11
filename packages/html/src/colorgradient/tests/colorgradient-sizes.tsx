import { ColorGradient } from '../../colorgradient/color-gradient.spec';
import { ColorGradientNormal } from '../../colorgradient/templates/colorgradient-normal';


const styles = `
    #test-area {
        grid-template-columns: 1fr 1fr 2fr;
    }

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
        <div id="test-area" className="k-d-grid k-gap-2">
            <span>Small</span>
            <span>Medium</span>
            <span>Large</span>

            { ColorGradient.options.size.filter((size) => size !== undefined).map((size) => (
                <>
                    <section>
                        <ColorGradientNormal size={size} />
                    </section>
                </>
            ))}
        </div>
    </>
);
