import { Button } from '../../button';
import { WindowNormal } from '../../window';
import { Textarea } from '../../textarea';
import { Textbox } from '../../textbox';
import { DatePicker } from '../../datepicker';
import { NumericTextbox } from '../../numerictextbox';
import { Checkbox } from '../../checkbox';
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
                <WindowNormal title="Edit task" actionButtons={
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
                                <li className="k-item k-first">
                                    <span className="k-link">General</span>
                                </li>
                                <li className="k-item">
                                    <span className="k-link">Resources</span>
                                </li>
                                <li className="k-item">
                                    <span className="k-link">Predecessors</span>
                                </li>
                                <li className="k-item">
                                    <span className="k-link">Successors</span>
                                </li>
                                <li className="k-item k-last k-active">
                                    <span className="k-link">Other</span>
                                </li>
                            </ul>
                        </div>
                        <div className="k-tabstrip-content k-active">
                            <Form tag="div">
                                <FormField
                                    label="Notes"
                                    optional
                                    editor={ <Textarea placeholder="Placeholder" /> }
                                />
                                <FormField
                                    label="Text data field label"
                                    editor={ <Textbox placeholder="Placeholder" /> }
                                />
                                <FormField
                                    label="Date data field label"
                                    editor={ <DatePicker placeholder="dd/MM/yyyy" /> }
                                />
                                <FormField
                                    label="Numeric data field label"
                                    editor={ <NumericTextbox placeholder="##,##" /> }
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
                        </div>
                    </div>
                </WindowNormal>
            </section>


        </div>
    </>
);
