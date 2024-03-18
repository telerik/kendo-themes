import { WindowNormal } from '../../window';
import { Button } from '../../button';
import { FormNormal, FormField } from '../../form';
import { Textbox } from '../../textbox';
import { DropdownList } from '../../dropdownlist';
import { CheckboxWithLabelAfter } from '../../checkbox';
import { RadioButtonWithLabelAfter, RadioGroupNormal, RadioItem } from '../../radio';


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
                <WindowNormal title="Data Validation" actions={[ 'x' ]} className="k-spreadsheet-window" actionButtonsAlign="start" actionButtons={
                    <>
                        <Button themeColor="primary">Apply</Button>
                        <Button>Cancel</Button>
                    </>
                }>
                    <FormNormal formButtons={null}>
                        <FormField label="Cell Range" editor={ <Textbox value="Input Value" /> }/>
                        <FormField label="Criteria" editor={ <DropdownList value="Number" /> }/>
                        <FormField label="Comparer" editor={ <DropdownList value="Greater than" /> } />
                        <FormField label="Min" editor={ <Textbox placeholder="Placeholder" /> } />
                        <FormField editor={
                            <>
                                <CheckboxWithLabelAfter>Ignore blank</CheckboxWithLabelAfter>
                            </>
                        } />
                        <FormField label="On invalid data" editor={
                            <RadioGroupNormal>
                                <RadioItem>
                                    <RadioButtonWithLabelAfter checked>Reject input</RadioButtonWithLabelAfter>
                                </RadioItem>
                                <RadioItem>
                                    <RadioButtonWithLabelAfter>Show warning</RadioButtonWithLabelAfter>
                                </RadioItem>
                            </RadioGroupNormal>
                        }/>
                        <FormField editor={
                            <>
                                <CheckboxWithLabelAfter>Show hint</CheckboxWithLabelAfter>
                            </>
                        } />
                    </FormNormal>
                </WindowNormal>
            </section>

            <section>
                <WindowNormal title="Birth Date validaiton error" actions={[ 'x' ]} className="k-spreadsheet-window" actionButtonsAlign="start" actionButtons={
                    <>
                        <Button themeColor="primary">Retry</Button>
                        <Button>Cancel</Button>
                    </>
                }>
                    Birth Date should be between 1899 and 1998 year.
                </WindowNormal>
            </section>

        </div>
    </>
);


