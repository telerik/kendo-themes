import { ColorPickerNormal } from '../../colorpicker';

const styles = `
    #test-area {
        justify-items: start;
    }

    section {
        display: flex;
        flex-direction: column;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <section>
                <span>no color</span>
                <ColorPickerNormal />
            </section>

            <section>
                <span>opacity</span>
                <ColorPickerNormal value="rgba(255, 0, 255, 0.5)" />
            </section>

            <section>
                <span>icon</span>
                <ColorPickerNormal value="fuchsia" valueIconName="edit-tools" />
            </section>

            <section>
                <span>icon opacity</span>
                <ColorPickerNormal value="rgba(255, 0, 255, 0.5)" valueIconName="edit-tools" />
            </section>

        </div>
    </>
);
