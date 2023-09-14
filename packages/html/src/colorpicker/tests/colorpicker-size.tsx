import { ColorPickerNormal, ColorPicker } from '../../colorpicker';

const styles = `
    #test-area {
        justify-items: start;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            <span>Small</span>
            <span>Medium</span>
            <span>Large</span>

            { ColorPicker.options.size.map((size) => (
                <>
                    <section>
                        <ColorPickerNormal size={size} />
                    </section>
                </>
            ))}
        </div>
    </>
);
