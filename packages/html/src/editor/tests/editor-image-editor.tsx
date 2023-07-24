import { Button } from '../../button';
import { Textbox } from '../../textbox';
import { Window } from '../../window';
import { Form, FormField } from '../../form';


const styles = `
    .k-window {
        width: 100%;
        position: relative;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>Find Window</span>
            <span></span>

            <section>
                <Window title="Insert Image" actions={[ 'x' ]} actionButtonsAlign="start" actionButtons={
                    <>
                        <Button themeColor="primary">Insert</Button>
                        <Button>Cancel</Button>
                    </>
                }>
                    <Form tag="div">
                        <FormField label="Web address:" editor={ <Textbox showClearButton={false} /> } />
                        <FormField label="Alternate text:" editor={ <Textbox showClearButton={false} /> } />
                        <FormField label="Width:" editor={ <Textbox showClearButton={false} /> } />
                        <FormField label="Height:" editor={ <Textbox showClearButton={false} /> } />
                    </Form>
                </Window>
            </section>

        </div>
    </>
);
