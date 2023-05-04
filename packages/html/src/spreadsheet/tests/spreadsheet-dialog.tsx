import { Window } from '../../window';
import { Textarea } from '../../textarea';
import { Button } from '../../button';
import { Form, FormField } from '../../form';


const style = `
    #test-area {
        width: 500px;
    }
    .k-window {
        min-width: 400px;
        position: relative;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <section>

                <Window title="Insert comment" actions={[ 'x' ]} actionButtonsAlign="start" actionButtons={
                    <>
                        <Button themeColor="primary">Update</Button>
                        <Button>Cancel</Button>
                    </>
                }>
                    <Form tag="div" orientation="horizontal">
                        <FormField label="Comment:" editor={ <Textarea /> }/>
                    </Form>
                </Window>
            </section>

            <section>
                <Window title="Insert image" actions={[ 'x' ]} actionButtonsAlign="start" actionButtons={
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
