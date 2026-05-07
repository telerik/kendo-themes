import { ColorPickerNormal, ColorPicker } from '../../colorpicker';

const styles = `
    #test-area {
        grid-template-columns: 120px repeat(4, 1fr);
        justify-items: start;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">
            <span><small>rounded / size</small></span>
            <span>undefined</span>
            <span>small</span>
            <span>medium</span>
            <span>large</span>

            { ColorPicker.options.rounded.map((rounded) => (
                <>
                    <span>{ `${rounded}` }</span>
                    { ColorPicker.options.size.map((size) => (
                        <>
                            <section>
                                <ColorPickerNormal size={size} rounded={rounded} />
                            </section>
                        </>
                    ))}
                </>
            ))}
        </div>
    </>
);
