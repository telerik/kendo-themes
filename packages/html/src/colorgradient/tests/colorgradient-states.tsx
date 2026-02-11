import { ColorGradient } from '../../colorgradient/color-gradient.spec';
import { ColorGradientNormal } from '../../colorgradient/templates/colorgradient-normal';


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

            {[ 'normal', ...ColorGradient.states ].map((state) => (
                <section>
                    <span>{state}</span>
                    <ColorGradientNormal { ...{ [state]: true }} />
                </section>
            ))}
        </div>
    </>
);
