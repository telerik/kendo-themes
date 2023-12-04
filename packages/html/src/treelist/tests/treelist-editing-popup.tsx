import { WindowNormal } from '../../window';
import { Checkbox } from '../../checkbox';
import { NumericTextbox } from '../../numerictextbox';
import { Textbox } from '../../textbox';
import { Button } from '../../button';
import { DatePicker } from '../../datepicker';
import { FormNormal, FormField } from '../../form';


const styles = `
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
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <section>
                <WindowNormal title="Add item" actionButtonsAlign="start" actionButtons={
                    <>
                        <Button themeColor="primary" icon="save">Save</Button>
                        <Button icon="cancel">Cancel</Button>
                    </>
                }>
                    <FormNormal formButtons={null} tag="div">
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
                    </FormNormal>
                </WindowNormal>
            </section>

        </div>
    </>
);
