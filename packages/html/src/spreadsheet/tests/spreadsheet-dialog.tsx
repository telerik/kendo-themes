import ReactDOM from 'react-dom/client';
import { Window } from '../../window';
import { Textarea } from '../../textarea';
import { Form, FormField } from '../../form';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const style = `
    #test-area {
        width: 500px;
    }
    .k-window {
        width: 100%;
        position: relative;
    }
`;

root.render(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <section>

                <Window title="Insert comment" actions={[ 'close' ]} actionButtons actionButtonsAlign="end">
                    <Form tag="div" orientation="horizontal">
                        <FormField label="Comment:" editor={ <Textarea /> } />
                    </Form>
                </Window>
            </section>

            <section>
                <Window title="Insert image" actions={[ 'close' ]} actionButtons actionButtonsAlign="end">
                    <div className="k-spreadsheet-insert-image-dialog">
                        <label>
                            <div>Drag an image here, or click to select</div>
                            <input type="file" />
                        </label>
                    </div>
                </Window>
            </section>

        </div>
    </>
);
