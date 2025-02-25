import { ColorEditor, ColorEditorGroup, ColorEditorPaletteGroup } from '../../coloreditor';


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
            {
                ColorEditor.options.size.map((size => (
                    <>
                    <div>
                        <div>{size}</div>
                        <ColorEditorGroup color="rgba(0,0,0, 0.5)" size={size}/>
                    </div>
                    </>
                )))
            }

            {
                ColorEditor.options.size.map((size => (
                    <>
                    <div>
                        <div>{size}</div>
                        <ColorEditorPaletteGroup color="rgba(0,0,0, 0.5)" size={size} />
                    </div>
                    </>
                )))
            }
        </div>
    </>
);
