import { WindowNormal } from '../../window';
import { Button } from '../../button';
import { Fieldset, Form, FormField } from '../../form';
import { RadioButtonWithLabelAfter, RadioGroup, RadioItem } from '../../radio';
import { Textbox } from '../../textbox';
import { DropdownList } from '../../dropdownlist';
import { NumericTextbox } from '../../numerictextbox';
import { Checkbox } from '../../checkbox';


const style = `
    .k-window {
        position: relative;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <section>
                <WindowNormal style={{ width: "620px" }} title="Print" actions={[ 'x' ]} className="k-spreadsheet-window" actionButtonsAlign="start" actionButtons={
                    <>
                        <Button themeColor="primary">Save</Button>
                    </>
                }>
                    <div className="k-tabstrip k-tabstrip-top">
                        <div className="k-tabstrip-items-wrapper k-hstack">
                            <ul className="k-tabstrip-items k-reset">
                                <li className="k-item k-first k-active"><span className="k-link">Print</span></li>
                                <li className="k-item k-last"><span className="k-link">Format</span></li>
                            </ul>
                        </div>
                        <div className="k-tabstrip-content k-active">
                            <Form tag="div" layout="grid">
                                <Fieldset legend="Settings" layout="grid" cols={2} gapX={4}>
                                    <FormField
                                        colSpan="1"
                                        label="Print"
                                        editor={ <DropdownList value="Selection" />}>
                                    </FormField>
                                    <FormField
                                        colSpan="1"
                                        label="Paper size"
                                        editor={ <DropdownList value="A4" />}>
                                    </FormField>
                                </Fieldset>
                                <Fieldset legend="Orientation" layout="grid" cols={1} gapX={4}>
                                    <FormField
                                        colSpan="4"
                                        label=""
                                        editor={
                                            <RadioGroup layout="horizontal">
                                                <RadioItem>
                                                    <RadioButtonWithLabelAfter>Auto</RadioButtonWithLabelAfter>
                                                </RadioItem>
                                                <RadioItem>
                                                    <RadioButtonWithLabelAfter>Portrait</RadioButtonWithLabelAfter>
                                                </RadioItem>
                                                <RadioItem>
                                                    <RadioButtonWithLabelAfter>Landscape</RadioButtonWithLabelAfter>
                                                </RadioItem>
                                            </RadioGroup>
                                        }>
                                    </FormField>
                                </Fieldset>
                                <Fieldset legend="Pages" layout="grid" cols={4} gapX={4}>
                                    <FormField
                                        colSpan="1"
                                        label="Pages"
                                        editor={
                                            <RadioGroup layout="horizontal">
                                                <RadioItem>
                                                    <RadioButtonWithLabelAfter>All</RadioButtonWithLabelAfter>
                                                </RadioItem>
                                                <RadioItem>
                                                    <RadioButtonWithLabelAfter>Range</RadioButtonWithLabelAfter>
                                                </RadioItem>
                                            </RadioGroup>
                                        }>
                                    </FormField>
                                    <FormField colSpan="3" label="&nbsp;" editor={ <Textbox placeholder="Example: 2 or 1 - 3" />}></FormField>
                                </Fieldset>
                                <Fieldset legend="Margins Unit" layout="grid" cols={4} gapX={4}>
                                    <FormField
                                        colSpan="1"
                                        label="Top"
                                        editor={ <NumericTextbox value="25.0" />}>
                                    </FormField>
                                    <FormField
                                        colSpan="1"
                                        label="&nbsp;"
                                        editor={ <DropdownList value="mm" />}>
                                    </FormField>
                                    <FormField
                                        colSpan="1"
                                        label="Bottom"
                                        editor={ <NumericTextbox value="25.0" />}>
                                    </FormField>
                                    <FormField
                                        colSpan="1"
                                        label="&nbsp;"
                                        editor={ <DropdownList value="mm" />}>
                                    </FormField>
                                    <FormField
                                        colSpan="1"
                                        label="Left"
                                        editor={ <NumericTextbox value="25.0" />}>
                                    </FormField>
                                    <FormField
                                        colSpan="1"
                                        label="&nbsp;"
                                        editor={ <DropdownList value="mm" />}>
                                    </FormField>
                                    <FormField
                                        colSpan="1"
                                        label="Right"
                                        editor={ <NumericTextbox value="25.0" />}>
                                    </FormField>
                                    <FormField
                                        colSpan="1"
                                        label="&nbsp;"
                                        editor={ <DropdownList value="mm" />}>
                                    </FormField>
                                </Fieldset>
                            </Form>
                        </div>
                    </div>
                </WindowNormal>
            </section>

            <section>
                <WindowNormal style={{ width: "620px" }} title="Print" actions={[ 'x' ]} className="k-spreadsheet-window" actionButtonsAlign="start" actionButtons={
                    <>
                        <Button themeColor="primary">Save</Button>
                    </>
                }>
                    <div className="k-tabstrip k-tabstrip-top">
                        <div className="k-tabstrip-items-wrapper k-hstack">
                            <ul className="k-tabstrip-items k-reset">
                                <li className="k-item k-first"><span className="k-link">Print</span></li>
                                <li className="k-item k-last k-active"><span className="k-link">Format</span></li>
                            </ul>
                        </div>
                        <div className="k-tabstrip-content k-active">
                            <Form tag="div" layout="grid">
                                <FormField label="Show" editor={
                                    <div className="k-search-options k-checkbox-list">
                                        <span className="k-checkbox-list-item">
                                            <Checkbox />
                                            <label className="k-checkbox-label">Grid lines</label>
                                        </span>
                                        <span className="k-checkbox-list-item">
                                            <Checkbox />
                                            <label className="k-checkbox-label">Row and column headings</label>
                                        </span>
                                    </div>
                                }/>
                                <FormField label="Center on page" editor={
                                    <div className="k-search-options k-checkbox-list">
                                        <span className="k-checkbox-list-item">
                                            <Checkbox />
                                            <label className="k-checkbox-label">Horizontally</label>
                                        </span>
                                        <span className="k-checkbox-list-item">
                                            <Checkbox />
                                            <label className="k-checkbox-label">Vertically</label>
                                        </span>
                                    </div>
                                } />
                            </Form>
                        </div>
                    </div>
                </WindowNormal>
            </section>
        </div>
    </>
);
