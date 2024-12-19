import { ColorEditor, ColorEditorGroup, ColorEditorPaletteGroup } from '../../coloreditor';


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
            {
                ColorEditor.options.size.map((size => (
                    <>
                    <div>
                        <span>{size}</span>
                        <ColorEditorGroup color="rgba(0,0,0, 0.5)" size={size} orientation="vertical"/>
                    </div>
                    </>
                )))
            }

            {
                ColorEditor.options.size.map((size => (
                    <>
                    <div>
                        <span>{size}</span>
                        <ColorEditorPaletteGroup color="rgba(0,0,0, 0.5)" size={size} />
                    </div>
                    </>
                )))
            }
        </div>
    </>
);
