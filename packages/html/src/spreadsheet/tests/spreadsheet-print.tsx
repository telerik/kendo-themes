import { WindowNormal } from '../../window';
import { Button } from '../../button';
import { FormNormal, Fieldset, FormField } from '../../form';
import { RadioButtonWithLabelAfter, RadioGroup, RadioItem } from '../../radio';
import { Textbox } from '../../textbox';
import { DropdownList } from '../../dropdownlist';
import { NumericTextbox } from '../../numerictextbox';
import { CheckboxGroup, CheckboxItem, CheckboxWithLabelAfter } from '../../checkbox';
import { TabStrip, TabStripContent, TabStripItem, TabStripItems, TabStripItemsWrapper } from '../../tabstrip';


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
                    <TabStrip header={null} position="top">
                        <TabStripItemsWrapper orientation="horizontal">
                            <TabStripItems>
                                <TabStripItem first active value="Print" />
                                <TabStripItem last value="Format" />
                            </TabStripItems>
                        </TabStripItemsWrapper>
                        <div className="k-tabstrip-content k-active">
                            <FormNormal formButtons={null} tag="div" layout="grid">
                                <Fieldset legend="Settings" layout="grid" cols={2} gapX={4}>
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
                                    <FormField colSpan="3" label="&nbsp;" editor={<Textbox placeholder="Example: 2 or 1 - 3" />}></FormField>
                                </Fieldset>
                                <Fieldset legend="Margins Unit" layout="grid" cols={4} gapX={4}>
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
                    </TabStrip>
                </WindowNormal>
            </section>

            <section>
                <WindowNormal style={{ width: "620px" }} title="Print" actions={[ 'x' ]} className="k-spreadsheet-window" actionButtonsAlign="start" actionButtons={
                    <>
                        <Button themeColor="primary">Save</Button>
                    </>
                }>
                    <TabStrip header={null} position="top">
                        <TabStripItemsWrapper orientation="horizontal">
                            <TabStripItems>
                                <TabStripItem first value="Print" />
                                <TabStripItem last active value="Format" />
                            </TabStripItems>
                        </TabStripItemsWrapper>
                        <TabStripContent active>
                            <FormNormal formButtons={null} tag="div" layout="grid">
                                <FormField label="Show" editor={
                                    <CheckboxGroup className="k-search-options">
                                        <CheckboxItem>
                                            <CheckboxWithLabelAfter>Grid lines</CheckboxWithLabelAfter>
                                        </CheckboxItem>
                                        <CheckboxItem>
                                            <CheckboxWithLabelAfter>Row and column headings</CheckboxWithLabelAfter>
                                        </CheckboxItem>
                                    </CheckboxGroup>
                                } />
                                <FormField label="Center on page" editor={
                                    <CheckboxGroup className="k-search-options">
                                        <CheckboxItem>
                                            <CheckboxWithLabelAfter>Horizontally</CheckboxWithLabelAfter>
                                        </CheckboxItem>
                                        <CheckboxItem>
                                            <CheckboxWithLabelAfter>Vertically</CheckboxWithLabelAfter>
                                        </CheckboxItem>
                                    </CheckboxGroup>
                                } />
                            </FormNormal>
                        </TabStripContent>
                    </TabStrip>
                </WindowNormal>
            </section>
        </div>
    </>
);
