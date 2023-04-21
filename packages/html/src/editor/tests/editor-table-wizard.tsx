import ReactDOM from 'react-dom/client';
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

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    .k-window {
        width: 100%;
        position: relative;
    }
`;

root.render(
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
                            <Form tag="div" layout="grid" cols={4} gapX={4}>
                                <FormField
                                    className="k-col-span-2"
                                    label="Rows"
                                    editor={ <NumericTextbox value="3" /> }
                                />
                                <FormField
                                    className="k-col-span-2"
                                    label="Columns"
                                    editor={ <NumericTextbox value="4" /> }
                                />
                                <FormField
                                    className="k-col-span-1"
                                    label="Width"
                                    editor={ <NumericTextbox /> }
                                />
                                <FormField
                                    className="k-col-span-1"
                                    label="&nbsp;"
                                    editor={ <DropdownList placeholder="%" /> }
                                />
                                <FormField
                                    className="k-col-span-1"
                                    label="Height"
                                    editor={ <NumericTextbox placeholder="Auto" /> }
                                />
                                <FormField
                                    className="k-col-span-1"
                                    label="&nbsp;"
                                    editor={ <DropdownList placeholder="px" /> }
                                />
                                <FormField
                                    className="k-col-span-2"
                                    label="Position"
                                    editor={ <DropdownList prefix={ <Icon name="table-position-start" /> } placeholder="Left" />}
                                />
                                <FormField
                                    className="k-col-span-2"
                                    label="Alignment"
                                    editor={ <DropdownList prefix={ <Icon name="table-align-middle-left" /> } placeholder="Middle Left" />}
                                />
                                <FormField
                                    className="k-col-span-2"
                                    label="Cell spacing"
                                    editor={ <NumericTextbox placeholder="Auto" /> }
                                />
                                <FormField
                                    className="k-col-span-2"
                                    label="Cell padding"
                                    editor={ <NumericTextbox placeholder="Auto" /> }
                                />
                                <FormField
                                    className="k-col-span-full"
                                    label="Table background"
                                    editor={ <ColorPicker /> }
                                />
                                <FormField
                                    className="k-col-span-1"
                                    label="Border width"
                                    editor={ <NumericTextbox value="1" /> }
                                />
                                <FormField
                                    className="k-col-span-1"
                                    label="Border color"
                                    editor={ <ColorPicker /> }
                                />
                                <FormField
                                    className="k-col-span-2"
                                    label="Border style"
                                    editor={ <DropdownList value="Solid" />}
                                />
                                <FormField
                                    className="k-col-span-full"
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
                            <Form tag="div" orientation="vertical">
                                <FormField label="ID" optional editor={ <Textbox /> } />
                                <FormField label="CSS class" optional editor={ <Textbox /> } />
                                <Fieldset legend="Accessibility">
                                    <div className="k-d-grid k-grid-cols-4 k-gap-x-4">
                                        <FormField
                                            className="k-col-span-2"
                                            label="Caption"
                                            optional
                                            editor={ <Textbox /> }
                                        />
                                        <FormField
                                            className="k-col-span-2"
                                            label="Caption alignment"
                                            editor={ <DropdownList prefix={ <Icon name="table-align-middle-left"/> } placeholder="Middle Left" /> }
                                        />
                                        <FormField
                                            className="k-col-span-1"
                                            label="Header rows"
                                            editor={ <NumericTextbox value="0" /> }
                                        />
                                        <FormField
                                            className="k-col-span-1"
                                            label="Header cols"
                                            editor={ <NumericTextbox value="0" /> }
                                        />
                                        <FormField
                                            className="k-col-span-2"
                                            label="Associate headers"
                                            editor={ <DropdownList value="Using 'scope' attribu..." /> }
                                        />
                                        <FormField
                                            className="k-col-span-full"
                                            label="Summary"
                                            optional
                                            editor={ <Textarea rows={3} placeholder="Summary attribute is not HTML5 compatible"/> }
                                        />
                                    </div>
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
                    <Form tag="div" layout="grid" cols={4} gapX={4}>
                        <FormField
                            className="k-col-span-full"
                            label=" "
                            editor={
                                <>
                                    <Checkbox />
                                    <label className="k-checkbox-label">Apply to all cells</label>
                                </>
                            }
                        />
                        <FormField
                            className="k-col-span-1"
                            label="Width"
                            editor={ <NumericTextbox /> }
                            hint="apply to column"
                        />
                        <FormField
                            className="k-col-span-1"
                            label="&nbsp;"
                            editor={ <DropdownList placeholder="px" /> }
                        />
                        <FormField
                            className="k-col-span-1"
                            label="Height"
                            editor={ <NumericTextbox placeholder="Auto" /> }
                            hint="apply to row"
                        />
                        <FormField
                            className="k-col-span-1"
                            label="&nbsp;"
                            editor={ <DropdownList placeholder="px" /> }
                        />
                        <FormField
                            className="k-col-span-2"
                            label="Alignment"
                            editor={ <DropdownList prefix={ <Icon name="table-align-middle-left" /> } placeholder="Middle Left" />}
                        />
                        <FormField
                            className="k-col-span-2"
                            label="Text control"
                            editor={ <DropdownList prefix={ <Icon name="text-wrap" /> } placeholder="Wrap" /> }
                        />
                        <FormField
                            className="k-col-span-2"
                            label="Cell spacing"
                            editor={ <NumericTextbox placeholder="Auto" /> }
                        />
                        <FormField
                            className="k-col-span-2"
                            label="Cell padding"
                            editor={ <NumericTextbox placeholder="Auto" /> }
                        />
                        <FormField
                            className="k-col-span-1"
                            label="Border width"
                            editor={ <NumericTextbox value="1" /> }
                        />
                        <FormField
                            className="k-col-span-1"
                            label="Border color"
                            editor={ <ColorPicker /> }
                        />
                        <FormField
                            className="k-col-span-2"
                            label="Border style"
                            editor={ <DropdownList value="Solid" />}
                        />
                        <FormField
                            className="k-col-span-full"
                            label="ID"
                            optional
                            editor={ <Textbox /> }
                        />
                        <FormField
                            className="k-col-span-full"
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
