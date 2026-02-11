import { WindowNormal } from '../../window/templates/window-normal';
import { Button } from '../../button/button.spec';
import { FormNormal } from '../../form/templates/form-normal';
import { Fieldset } from '../../form/fieldset';
import { FormField } from '../../form/form-field';
import { RadioButtonWithLabelAfter } from '../../radio/templates/radio-with-label-after';
import { RadioGroupHorizontal } from '../../radio/templates/radio-group-horizontal';
import { RadioItem } from '../../radio/radio-item.spec';
import { Textbox } from '../../textbox/textbox.spec';
import { DropdownList } from '../../dropdownlist/dropdownlist.spec';
import { NumericTextbox } from '../../numerictextbox/numerictextbox.spec';
import { CheckboxGroupNormal } from '../../checkbox/templates/checkbox-group-normal';
import { CheckboxItem } from '../../checkbox/checkbox-item.spec';
import { CheckboxWithLabelAfter } from '../../checkbox/templates/checkbox-with-label-after';
import { TabStripNormal } from '../../tabstrip/templates/tabstrip-normal';
import { TabStripContent } from '../../tabstrip/tabstrip-content';
import { TabStripItem } from '../../tabstrip/tabstrip-item';


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
                    <TabStripNormal
                        tabStripItems={
                            <>
                                <TabStripItem first active value="Print" />
                                <TabStripItem last value="Format" />
                            </>
                        }
                    >
                        <div className="k-tabstrip-content k-active">
                            <FormNormal formButtons={null} tag="div" layout="grid">
                                <Fieldset legend="Settings" layout="grid" cols={2} gutters={{cols: "16px"}}>
                                    <FormField
                                        colSpan="1"
                                        label="Print"
                                        editor={<DropdownList value="Selection" />}>
                                    </FormField>
                                    <FormField
                                        colSpan="1"
                                        label="Paper size"
                                        editor={<DropdownList value="A4" />}>
                                    </FormField>
                                </Fieldset>
                                <Fieldset legend="Orientation" layout="grid" cols={1} gutters={{cols: "16px"}}>
                                    <FormField
                                        colSpan="4"
                                        label=""
                                        editor={
                                            <RadioGroupHorizontal>
                                                <RadioItem>
                                                    <RadioButtonWithLabelAfter>Auto</RadioButtonWithLabelAfter>
                                                </RadioItem>
                                                <RadioItem>
                                                    <RadioButtonWithLabelAfter>Portrait</RadioButtonWithLabelAfter>
                                                </RadioItem>
                                                <RadioItem>
                                                    <RadioButtonWithLabelAfter>Landscape</RadioButtonWithLabelAfter>
                                                </RadioItem>
                                            </RadioGroupHorizontal>
                                        }>
                                    </FormField>
                                </Fieldset>
                                <Fieldset legend="Pages" layout="grid" cols={4} gutters={{cols: "16px"}}>
                                    <FormField
                                        colSpan="1"
                                        label="Pages"
                                        editor={
                                            <RadioGroupHorizontal>
                                                <RadioItem>
                                                    <RadioButtonWithLabelAfter>All</RadioButtonWithLabelAfter>
                                                </RadioItem>
                                                <RadioItem>
                                                    <RadioButtonWithLabelAfter>Range</RadioButtonWithLabelAfter>
                                                </RadioItem>
                                            </RadioGroupHorizontal>
                                        }>
                                    </FormField>
                                    <FormField colSpan="3" label="&nbsp;" editor={<Textbox placeholder="Example: 2 or 1 - 3" />}></FormField>
                                </Fieldset>
                                <Fieldset legend="Margins Unit" layout="grid" cols={4} gutters={{cols: "16px"}}>
                                    <FormField
                                        colSpan="1"
                                        label="Top"
                                        editor={<NumericTextbox value="25.0" />}>
                                    </FormField>
                                    <FormField
                                        colSpan="1"
                                        label="&nbsp;"
                                        editor={<DropdownList value="mm" />}>
                                    </FormField>
                                    <FormField
                                        colSpan="1"
                                        label="Bottom"
                                        editor={<NumericTextbox value="25.0" />}>
                                    </FormField>
                                    <FormField
                                        colSpan="1"
                                        label="&nbsp;"
                                        editor={<DropdownList value="mm" />}>
                                    </FormField>
                                    <FormField
                                        colSpan="1"
                                        label="Left"
                                        editor={<NumericTextbox value="25.0" />}>
                                    </FormField>
                                    <FormField
                                        colSpan="1"
                                        label="&nbsp;"
                                        editor={<DropdownList value="mm" />}>
                                    </FormField>
                                    <FormField
                                        colSpan="1"
                                        label="Right"
                                        editor={<NumericTextbox value="25.0" />}>
                                    </FormField>
                                    <FormField
                                        colSpan="1"
                                        label="&nbsp;"
                                        editor={<DropdownList value="mm" />}>
                                    </FormField>
                                </Fieldset>
                            </FormNormal>
                        </div>
                    </TabStripNormal>
                </WindowNormal>
            </section>

            <section>
                <WindowNormal style={{ width: "620px" }} title="Print" actions={[ 'x' ]} className="k-spreadsheet-window" actionButtonsAlign="start" actionButtons={
                    <>
                        <Button themeColor="primary">Save</Button>
                    </>
                }>
                    <TabStripNormal
                        tabStripItems={
                            <>
                                <TabStripItem first value="Print" />
                                <TabStripItem last active value="Format" />
                            </>
                        }
                    >
                        <TabStripContent active>
                            <FormNormal formButtons={null} tag="div" layout="grid">
                                <FormField label="Show" editor={
                                    <CheckboxGroupNormal className="k-search-options">
                                        <CheckboxItem>
                                            <CheckboxWithLabelAfter>Grid lines</CheckboxWithLabelAfter>
                                        </CheckboxItem>
                                        <CheckboxItem>
                                            <CheckboxWithLabelAfter>Row and column headings</CheckboxWithLabelAfter>
                                        </CheckboxItem>
                                    </CheckboxGroupNormal>
                                } />
                                <FormField label="Center on page" editor={
                                    <CheckboxGroupNormal className="k-search-options">
                                        <CheckboxItem>
                                            <CheckboxWithLabelAfter>Horizontally</CheckboxWithLabelAfter>
                                        </CheckboxItem>
                                        <CheckboxItem>
                                            <CheckboxWithLabelAfter>Vertically</CheckboxWithLabelAfter>
                                        </CheckboxItem>
                                    </CheckboxGroupNormal>
                                } />
                            </FormNormal>
                        </TabStripContent>
                    </TabStripNormal>
                </WindowNormal>
            </section>
        </div>
    </>
);
