import { ColorEditorNormal } from '../../coloreditor';


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
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <span>Focused Cologradient Inside ColorEditor</span>

            <section>
                <ColorEditorNormal focusView />
            </section>

        </div>
    </>
);
