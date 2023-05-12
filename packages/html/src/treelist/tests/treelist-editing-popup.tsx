import ReactDOM from 'react-dom/client';
import { Window } from '../../window';
import { Checkbox } from '../../checkbox';
import { NumericTextbox } from '../../numerictextbox';
import { Textbox } from '../../textbox';
import { Button } from '../../button';
import { DatePicker } from '../../datepicker';
import { Form, FormField } from '../../form';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    #test-area {
        width: 500px;
    }
    .k-window {
        min-width: 400px;
        position: relative;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <section>
                <Window title="Add item" actions={[ 'window-minimize', 'window', 'x' ]} actionButtonsAlign="start" actionButtons={
                    <>
                        <Button themeColor="primary" icon="save">Save</Button>
                        <Button icon="cancel">Cancel</Button>
                    </>
                }>
                    <Form tag="div" orientation="vertical">
                        <FormField
                            className="k-form-field-error"
                            label="Text data field label"
                            error="Error"
                            editor={ <Textbox value="Invalid" invalid showClearButton /> }
                        />
                        <FormField
                            label="Date data field label"
                            editor={ <DatePicker placeholder="dd/MM/yyyy" /> }
                        />
                        <FormField
                            label="Numeric data field label"
                            editor={ <NumericTextbox placeholder="##,###" /> }
                        />
                        <FormField
                            editor={
                                <>
                                    <Checkbox checked />
                                    <label className="k-checkbox-label">Boolean data field label</label>
                                </>
                            }
                        />
                    </Form>
                </Window>
            </section>

        </div>
    </>
);
