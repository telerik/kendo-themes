import { Button } from '../../button';
import { Checkbox } from '../../checkbox';
import { ColorPicker } from '../../colorpicker';
import { DropdownList } from '../../dropdownlist';
import { Form, FormField, Fieldset } from '../../form';
import { Icon } from '../../icon';
import { NumericTextbox } from '../../numerictextbox';
import { Textarea } from '../../textarea';
import { Textbox } from '../../textbox';
import { Window } from '../../window';


const styles = `
    .k-window {
        width: 100%;
        position: relative;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <section>
                <Window className="k-editor-window k-editor-table-wizard-window" title="Table properties" actions={[ 'minimize', 'maximize', 'close' ]} actionButtonsAlign="start" actionButtons={
                    <>
                        <Button themeColor="primary">Save</Button>
                        <Button>Cancel</Button>
                    </>
                }>
                    <div className="k-tabstrip k-tabstrip-top">
                        <div className="k-tabstrip-items-wrapper k-hstack">
                            <ul className="k-tabstrip-items k-reset">
                                <li className="k-item k-first k-active"><span className="k-link">General</span></li>
                                <li className="k-item k-last"><span className="k-link">Advanced</span></li>
                            </ul>
                        </div>
                        <div className="k-tabstrip-content k-active" >
                            <Form as="div" className="k-d-grid k-grid-cols-4 k-gap-x-4">
                                <FormField
                                    colSpan="2"
                                    label="Rows"
                                    editor={ <NumericTextbox value="3" /> }
                                />
                                <FormField
                                    colSpan="2"
                                    label="Columns"
                                    editor={ <NumericTextbox value="4" /> }
                                />
                                <FormField
                                    colSpan="1"
                                    label="Width"
                                    editor={ <NumericTextbox /> }
                                />
                                <FormField
                                    colSpan="1"
                                    label="&nbsp;"
                                    editor={ <DropdownList placeholder="%" /> }
                                />
                                <FormField
                                    colSpan="1"
                                    label="Height"
                                    editor={ <NumericTextbox placeholder="Auto" /> }
                                />
                                <FormField
                                    colSpan="1"
                                    label="&nbsp;"
                                    editor={ <DropdownList placeholder="px" /> }
                                />
                                <FormField
                                    colSpan="2"
                                    label="Position"
                                    editor={ <DropdownList prefix={ <Icon icon="table-position-start" /> } placeholder="Left" />}
                                />
                                <FormField
                                    colSpan="2"
                                    label="Alignment"
                                    editor={ <DropdownList prefix={ <Icon icon="table-align-middle-left" /> } placeholder="Middle Left" />}
                                />
                                <FormField
                                    colSpan="2"
                                    label="Cell spacing"
                                    editor={ <NumericTextbox placeholder="Auto" /> }
                                />
                                <FormField
                                    colSpan="2"
                                    label="Cell padding"
                                    editor={ <NumericTextbox placeholder="Auto" /> }
                                />
                                <FormField
                                    colSpan="full"
                                    label="Table background"
                                    editor={ <ColorPicker /> }
                                />
                                <FormField
                                    colSpan="1"
                                    label="Border width"
                                    editor={ <NumericTextbox value="1" /> }
                                />
                                <FormField
                                    colSpan="1"
                                    label="Border color"
                                    editor={ <ColorPicker /> }
                                />
                                <FormField
                                    colSpan="2"
                                    label="Border style"
                                    editor={ <DropdownList value="Solid" />}
                                />
                                <FormField
                                    colSpan="full"
                                    editor={
                                        <>
                                            <Checkbox />
                                            <label className="k-checkbox-label">Collapse borders</label>
                                        </>
                                    }
                                />
                            </Form>
                        </div>
                    </div>
                </Window>
            </section>
            <section>
                <Window className="k-editor-window k-editor-table-wizard-window" title="Table properties" actions={[ 'minimize', 'maximize', 'close' ]} actionButtonsAlign="start" actionButtons={
                    <>
                        <Button themeColor="primary">Save</Button>
                        <Button>Cancel</Button>
                    </>
                }>
                    <div className="k-tabstrip k-tabstrip-top">
                        <div className="k-tabstrip-items-wrapper k-hstack">
                            <ul className="k-tabstrip-items k-reset">
                                <li className="k-item k-first"><span className="k-link">General</span></li>
                                <li className="k-item k-last k-active"><span className="k-link">Advanced</span></li>
                            </ul>
                        </div>
                        <div className="k-tabstrip-content k-active">
                            <Form as="div" className="k-d-grid">
                                <FormField label="ID" optional editor={ <Textbox /> } />
                                <FormField label="CSS class" optional editor={ <Textbox /> } />
                                <Fieldset legend="Accessibility" layout="grid" cols={4} gapX={4} >
                                    <FormField
                                        colSpan="2"
                                        label="Caption"
                                        optional
                                        editor={ <Textbox /> }
                                    />
                                    <FormField
                                        colSpan="2"
                                        label="Caption alignment"
                                        editor={ <DropdownList prefix={ <Icon icon="table-align-middle-left"/> } placeholder="Middle Left" /> }
                                    />
                                    <FormField
                                        colSpan="1"
                                        label="Header rows"
                                        editor={ <NumericTextbox value="0" /> }
                                    />
                                    <FormField
                                        colSpan="1"
                                        label="Header cols"
                                        editor={ <NumericTextbox value="0" /> }
                                    />
                                    <FormField
                                        colSpan="2"
                                        label="Associate headers"
                                        editor={ <DropdownList value="Using 'scope' attribu..." /> }
                                    />
                                    <FormField
                                        colSpan="full"
                                        label="Summary"
                                        optional
                                        editor={ <Textarea rows={3} placeholder="Summary attribute is not HTML5 compatible"/> }
                                    />
                                </Fieldset>
                            </Form>
                        </div>
                    </div>
                </Window>
            </section>

            <section>
                <Window className="k-editor-window k-editor-table-wizard-window" title="Cell properties" actions={[ 'minimize', 'maximize', 'close' ]} actionButtonsAlign="start" actionButtons={
                    <>
                        <Button themeColor="primary">Save</Button>
                        <Button>Cancel</Button>
                    </>
                }>
                    <Form as="div" className="k-d-grid k-grid-cols-4 k-gap-x-4">
                        <FormField
                            colSpan="full"
                            editor={
                                <>
                                    <Checkbox />
                                    <label className="k-checkbox-label">Apply to all cells</label>
                                </>
                            }
                        />
                        <FormField
                            colSpan="1"
                            label="Width"
                            editor={ <NumericTextbox /> }
                            hint="apply to column"
                        />
                        <FormField
                            colSpan="1"
                            label="&nbsp;"
                            editor={ <DropdownList placeholder="px" /> }
                        />
                        <FormField
                            colSpan="1"
                            label="Height"
                            editor={ <NumericTextbox placeholder="Auto" /> }
                            hint="apply to row"
                        />
                        <FormField
                            colSpan="1"
                            label="&nbsp;"
                            editor={ <DropdownList placeholder="px" /> }
                        />
                        <FormField
                            colSpan="2"
                            label="Alignment"
                            editor={ <DropdownList prefix={ <Icon icon="table-align-middle-left" /> } placeholder="Middle Left" />}
                        />
                        <FormField
                            colSpan="2"
                            label="Text control"
                            editor={ <DropdownList prefix={ <Icon icon="text-wrap" /> } placeholder="Wrap" /> }
                        />
                        <FormField
                            colSpan="2"
                            label="Cell spacing"
                            editor={ <NumericTextbox placeholder="Auto" /> }
                        />
                        <FormField
                            colSpan="2"
                            label="Cell padding"
                            editor={ <NumericTextbox placeholder="Auto" /> }
                        />
                        <FormField
                            colSpan="1"
                            label="Border width"
                            editor={ <NumericTextbox value="1" /> }
                        />
                        <FormField
                            colSpan="1"
                            label="Border color"
                            editor={ <ColorPicker /> }
                        />
                        <FormField
                            colSpan="2"
                            label="Border style"
                            editor={ <DropdownList value="Solid" />}
                        />
                        <FormField
                            colSpan="full"
                            label="ID"
                            optional
                            editor={ <Textbox /> }
                        />
                        <FormField
                            colSpan="full"
                            label="CSS class"
                            optional
                            editor={ <Textbox /> }
                        />
                    </Form>
                </Window>
            </section>
        </div>
    </>
);
