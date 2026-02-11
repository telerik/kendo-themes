import { Button } from '../../button/button.spec';
import { WindowNormal } from '../../window/templates/window-normal';
import { Textbox } from '../../textbox/textbox.spec';
import { DateTimePicker } from '../../datetimepicker/datetimepicker.spec';
import { NumericTextbox } from '../../numerictextbox/numerictextbox.spec';
import { DropdownList } from '../../dropdownlist/dropdownlist.spec';
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
                                <TabStripItem first active value="General" />
                                <TabStripItem value="Resources" />
                                <TabStripItem value="Predecessors" />
                                <TabStripItem last value="Successors" />
                            </>
                        }
                    >
                        <TabStripContent active>
                            <FormNormal formButtons={null} tag="div" layout="grid" cols={4} gutters={{cols: "8px"}}>
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
                            </FormNormal>
                        </TabStripContent>
                    </TabStripNormal>
                </WindowNormal>
            </section>
        </div>
    </>
);
