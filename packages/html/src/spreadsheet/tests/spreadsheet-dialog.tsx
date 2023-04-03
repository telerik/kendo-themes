import ReactDOM from 'react-dom/client';
import { Window } from '../../window';
import { Textarea } from '../../textarea';
import { Button } from '../../button';

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

                <Window title="Insert comment" actions={[ 'close' ]} actionButtonsAlign="start" actionButtons={
                    <>
                        <Button themeColor="primary">Update</Button>
                        <Button>Cancel</Button>
                    </>
                }>
                    <div className="k-form k-form-md k-form-horizontal">
                        <div className="k-form-field">
                            <div className="k-form-label">
                                <label>Comment:</label>
                            </div>
                            <div className="k-form-field-wrap">
                                <Textarea />
                            </div>
                        </div>
                    </div>
                </Window>
            </section>

            <section>
                <Window title="Insert image" actions={[ 'close' ]} actionButtonsAlign="start" actionButtons={
                    <>
                        <Button themeColor="primary">Update</Button>
                        <Button>Cancel</Button>
                    </>
                }>
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
