import { Button } from '../../button/button.spec';
import { WindowNormal } from '../../window/templates/window-normal';
import { Textarea } from '../../textarea/textarea.spec';
import { Textbox } from '../../textbox/textbox.spec';
import { DatePicker } from '../../datepicker/datepicker.spec';
import { NumericTextbox } from '../../numerictextbox/numerictextbox.spec';
import { Checkbox } from '../../checkbox/checkbox.spec';
import { FormNormal } from '../../form/templates/form-normal';
import { FormField } from '../../form/form-field';
import { TabStripNormal } from '../../tabstrip/templates/tabstrip-normal';
import { TabStripItem } from '../../tabstrip/tabstrip-item';
import { TabStripContent } from '../../tabstrip/tabstrip-content';


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
                    <TabStripNormal
                        tabStripItems={
                            <>
                                <TabStripItem first value="General" />
                                <TabStripItem value="Resources" />
                                <TabStripItem value="Predecessors" />
                                <TabStripItem value="Successors" />
                                <TabStripItem last active value="Other" />
                            </>
                        }
                    >
                        <TabStripContent active>
                            <FormNormal formButtons={null} tag="div">
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
                            </FormNormal>
                        </TabStripContent>
                    </TabStripNormal>
                </WindowNormal>
            </section>


        </div>
    </>
);
