import ReactDOM from 'react-dom/client';
import { Textbox } from '../../textbox';
import { Window } from '../../window';
import { Form, FormField } from '../../form';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    .k-window {
        width: 100%;
        position: relative;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>Find Window</span>
            <span></span>

            <section>
                <Window title="Insert Image" actions={[ 'close' ]} actionButtons actionButtonsAlign="end">
                    <Form tag="div" orientation="horizontal">
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
