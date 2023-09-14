import { ColorPickerNormal, ColorPicker } from '../../colorpicker';

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

            {[ 'normal', ...ColorPicker.states ].map((state) => (
                <section>
                    <span>{state}</span>
                    <ColorPickerNormal value="fuchsia" { ...{ [state]: true }} />
                </section>
            ))}
        </div>
    </>
);
