import { Window } from '../../window';
import { Button } from '../../button';
import { Form, FormField } from '../../form';
import { Textbox } from '../../textbox';
import { DropdownList } from '../../dropdownlist';
import { Checkbox } from '../../checkbox';
import { RadioButtonLabel, RadioGroup, RadioItem } from '../../radio';


const style = `
    .k-window {
        min-width: 400px;
        position: relative;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <section>
                <Window title="Data Validation" actions={[ 'x' ]} className="k-spreadsheet-window" actionButtonsAlign="start" actionButtons={
                    <>
                        <Button themeColor="primary">Apply</Button>
                        <Button>Cancel</Button>
                    </>
                }>
                    <Form>
                        <FormField label="Cell Range" editor={ <Textbox value="Input Value" /> }/>
                        <FormField label="Criteria" editor={ <DropdownList value="Number" /> }/>
                        <FormField label="Comparer" editor={ <DropdownList value="Greater than" /> } />
                        <FormField label="Min" editor={ <Textbox placeholder="Placeholder" /> } />
                        <FormField editor={
                            <>
                                <Checkbox/>
                                <label className="k-checkbox-label">Ignore blank</label>
                            </>
                        } />
                        <FormField label="On invalid data" editor={
                            <RadioGroup layout="vertical">
                                <RadioItem>
                                    <RadioButtonLabel checked>Reject input</RadioButtonLabel>
                                </RadioItem>
                                <RadioItem>
                                    <RadioButtonLabel>Show warning</RadioButtonLabel>
                                </RadioItem>
                            </RadioGroup>
                        }/>
                        <FormField editor={
                            <>
                                <Checkbox/>
                                <label className="k-checkbox-label">Show hint</label>
                            </>
                        } />
                    </Form>
                </Window>
            </section>

            <section>
                <Window title="Birth Date validaiton error" actions={[ 'x' ]} className="k-spreadsheet-window" actionButtonsAlign="start" actionButtons={
                    <>
                        <Button themeColor="primary">Retry</Button>
                        <Button>Cancel</Button>
                    </>
                }>
                    Birth Date should be between 1899 and 1998 year.
                </Window>
            </section>

        </div>
    </>
);


