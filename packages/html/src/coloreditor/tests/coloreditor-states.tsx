import { ColorEditor, ColorEditorNormal } from '../../coloreditor';


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

            {[ 'normal', ...ColorEditor.states ].map((state) => (
                <section>
                    <div>{state}</div>
                    <ColorEditorNormal { ...{ [state]: true }} />
                </section>
            ))}

        </div>
    </>
);
