import { ColorGradient, ColorGradientNormal } from '../../colorgradient';


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

            { ColorGradient.options.size.map((size) => (
                <>
                    <section>
                        <ColorGradientNormal size={size} />
                    </section>
                </>
            ))}
        </div>
    </>
);
