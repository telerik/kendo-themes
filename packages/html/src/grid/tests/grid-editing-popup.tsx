import { WindowNormal } from '../../window/templates/window-normal';
import { Checkbox } from '../../checkbox/checkbox.spec';
import { NumericTextbox } from '../../numerictextbox/numerictextbox.spec';
import { Textbox } from '../../textbox/textbox.spec';
import { Button } from '../../button/button.spec';
import { DropdownList } from '../../dropdownlist/dropdownlist.spec';
import { DatePicker } from '../../datepicker/datepicker.spec';
import { FormNormal } from '../../form/templates/form-normal';
import { FormField } from '../../form/form-field';


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
                <WindowNormal title="Edit task" actionButtonsAlign="start" actionButtons={
                    <>
                        <Button themeColor="primary" icon="save">Save</Button>
                        <Button icon="cancel">Cancel</Button>
                    </>
                }>
                    <FormNormal formButtons={null} tag="div">
                        <FormField className="k-form-field-error" label="Text data field label" error="Error" editor={ <Textbox value="Invalid" invalid showClearButton /> } />
                        <FormField label="Date data field label" editor={ <DatePicker placeholder="dd/MM/yyyy" /> } />
                        <FormField label="Numeric data field label" editor={ <NumericTextbox placeholder="##,###" /> } />
                        <FormField editor={
                            <>
                                <Checkbox checked />
                                <label className="k-checkbox-label">Boolean data field label</label>
                            </>
                        } />
                        <FormField label="Boolean data field label" editor={ <DropdownList value="True" /> } />
                    </FormNormal>
                </WindowNormal>
            </section>

        </div>
    </>
);
