import { Button } from '../../button';
import { Window } from '../../window';
import { Textbox } from '../../textbox';
import { DateTimePicker } from '../../datetimepicker';
import { NumericTextbox } from '../../numerictextbox';
import { DropdownList } from '../../dropdownlist';
import { Form, FormField } from '../../form';


const styles = `
    .k-window {
        min-width: 580px;
        position: relative;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <section>
                <Window title="Edit task" actions={[ 'window-minimize', 'window', 'x' ]} actionButtons={
                    <>
                        <Button icon="save" themeColor="primary">Save</Button>
                        <Button icon="cancel">Cancel</Button>
                        <span className="k-spacer"></span>
                        <Button icon="trash" fillMode="flat" themeColor="primary">Delete</Button>
                    </>
                }>
                    <div className="k-tabstrip k-tabstrip-top">
                        <div className="k-tabstrip-items-wrapper k-hstack">
                            <ul className="k-reset k-tabstrip-items">
                                <li className="k-item k-first k-active">
                                    <span className="k-link">General</span>
                                </li>
                                <li className="k-item">
                                    <span className="k-link">Resources</span>
                                </li>
                                <li className="k-item">
                                    <span className="k-link">Predecessors</span>
                                </li>
                                <li className="k-item k-last">
                                    <span className="k-link">Successors</span>
                                </li>
                            </ul>
                        </div>
                        <div className="k-tabstrip-content k-active">
                            <Form as="div" className="k-d-grid k-grid-cols-4 k-gap-x-2">
                                <FormField
                                    colSpan="full"
                                    className="k-form-field-error"
                                    label="Title" error="Error"
                                    editor={ <Textbox invalid value="Invalid" /> }
                                />
                                <FormField
                                    colSpan="2"
                                    label="Planned Start Date"
                                    editor={ <DateTimePicker placeholder="dd/MM/yyyy hh:mm AM" /> }
                                />
                                <FormField
                                    colSpan="2"
                                    label="Planned End Date"
                                    editor={ <DateTimePicker placeholder="dd/MM/yyyy hh:mm AM" /> }
                                />
                                <FormField
                                    colSpan="2"
                                    label="Actual Start Date"
                                    editor={ <DateTimePicker placeholder="dd/MM/yyyy hh:mm AM" /> }
                                />
                                <FormField
                                    colSpan="2"
                                    label="Actual End Date"
                                    editor={ <DateTimePicker placeholder="dd/MM/yyyy hh:mm AM" /> }
                                />
                                <FormField
                                    colSpan="1"
                                    label="Complete"
                                    editor={ <NumericTextbox /> }
                                    hint="value from 0 to 1"
                                />
                                <FormField
                                    colSpan="full"
                                    label="Parent"
                                    editor={ <DropdownList placeholder="-None-"/> }
                                />
                            </Form>
                        </div>
                    </div>
                </Window>
            </section>
        </div>
    </>
);
