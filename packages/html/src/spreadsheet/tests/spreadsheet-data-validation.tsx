import { Window } from '../../window';
import { Button } from '../../button';
import { Checkbox } from '../../checkbox';
import { RadioButtonLabel, RadioGroup, RadioItem } from '../../radio';
import { Form, FormField } from '../../form';
import { Textbox } from '../../textbox';
import { DropdownList } from '../../dropdownlist';

const style = `
    .k-window {
        width: 450px;
        position: relative;
    }
`;

export default () => (
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid">
            <Window title="Data Validation" actions={[ 'x' ]} className="k-spreadsheet-window" actionButtonsAlign="start" actionButtons={
                <>
                    <Button themeColor="primary">Apply</Button>
                    <Button>Cancel</Button>
                </>
            }>
                <Form>
                    <FormField
                        label="Criteria:"
                        editor={ <DropdownList placeholder="Number" /> }
                    >
                    </FormField>

                    <FormField
                        label="Comparer:"
                        editor={
                            <DropdownList placeholder="greater than" />
                        }
                    >
                    </FormField>

                    <FormField
                        label="Min:"
                        editor={ <Textbox placeholder="e.g. 10"/> }
                    >
                    </FormField>

                    <FormField
                        editor={
                            <>
                                <Checkbox checked/>
                                <label className="k-checkbox-label">Ignore blank</label>
                            </>
                        }
                    >
                    </FormField>

                    <FormField
                        label="On invalid data:"
                        editor={
                            <RadioGroup layout="horizontal">
                                <RadioItem>
                                    <RadioButtonLabel checked>Reject input</RadioButtonLabel>
                                </RadioItem>
                                <RadioItem>
                                    <RadioButtonLabel>Show warning</RadioButtonLabel>
                                </RadioItem>
                            </RadioGroup>
                        }
                    >
                    </FormField>

                    <FormField
                        editor={
                            <>
                                <Checkbox/>
                                <label className="k-checkbox-label">Show hint</label>
                            </>
                        }
                    >
                    </FormField>
                </Form>
            </Window>
        </div>
    </>
);
