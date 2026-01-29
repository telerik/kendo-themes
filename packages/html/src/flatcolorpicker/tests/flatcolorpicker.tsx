import { ColorEditor } from "../../coloreditor";

const styles = `
    #test-area {
        display: grid;
        gap: 24px;
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area">
            <section>
                <h3>Default</h3>
                <ColorEditor color="rgba(0,0,0, 0.5)" />
            </section>

            <section>
                <h3>Invalid</h3>
                <ColorEditor color="rgba(255, 0, 0, 0.8)" invalid />
            </section>

            <section>
                <h3>Disabled</h3>
                <ColorEditor color="rgba(0, 120, 255, 0.7)" disabled />
            </section>

            <section>
                <h3>Palette view</h3>
                <ColorEditor view="palette" color="#ff00ff" currentColor="#ffffff" />
            </section>
        </div>
    </>
);
