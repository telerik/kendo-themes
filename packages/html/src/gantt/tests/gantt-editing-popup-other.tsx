import { Button } from '../../button';
import { WindowNormal } from '../../window';
import { Textarea } from '../../textarea';
import { Textbox } from '../../textbox';
import { DatePicker } from '../../datepicker';
import { NumericTextbox } from '../../numerictextbox';
import { Checkbox } from '../../checkbox';
import { FormNormal, FormField } from '../../form';
import { TabStripNormal, TabStripItem, TabStripContent } from '../../tabstrip';


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
